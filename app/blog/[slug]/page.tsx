import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import React from "react";
import { Youtube } from "@/components/mdx/Youtube";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CopyButton } from "@/components/mdx/CopyButton";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.url}/blog/${post.slug}`);
  const ogImage = post.frontmatter.thumbnail
    ? `${siteConfig.url}${post.frontmatter.thumbnail}`
    : `${siteConfig.url}/images/profile.png`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical: ogUrl,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: ogUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
  };
}

/**
 * Reactのノードから再帰的にプレーンテキストを抽出する
 */
function extractText(node: React.ReactNode): string {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }
  return "";
}

/**
 * MDX内で使用される画像コンポーネント
 * 縦長の画像が大きくなりすぎるのを防ぐため、max-height で縦のサイズを制限する
 */
function MdxImage(
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    width?: number | string;
    height?: number | string;
    alt?: string;
  },
) {
  const { src, width, height, alt, className: classNameProp, ...rest } = props;
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${classNameProp || ""} max-h-[48vh] w-auto h-auto mx-auto block rounded-lg`.trim()}
      {...rest}
    />
  );
}

/**
 * MDX内で使用される動画コンポーネント
 * 縦長の動画が大きくなりすぎるのを防ぐため、max-height で縦のサイズを制限する
 */
function Video(
  props: React.VideoHTMLAttributes<HTMLVideoElement> & {
    src?: string;
    width?: string | number;
    height?: string | number;
  },
) {
  const { src, className: classNameProp, width, height, ...rest } = props;
  return (
    <video
      src={src}
      width={width}
      height={height}
      className={`${classNameProp || ""} max-h-[48vh] w-auto h-auto mx-auto rounded-lg block object-contain`.trim()}
      {...rest}
    />
  );
}

const components = {
  img: MdxImage,
  video: Video,
  Video,
  Youtube,
  /**
   * カスタムのpreコンポーネント
   * ScrollAreaを使用して横スクロールを実装し、CopyButtonを追加する
   */
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // codeタグを探し、その中身からテキストを抽出する
    const codeElement = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === "code",
    );
    const rawText = codeElement ? extractText(codeElement) : "";

    return (
      <div className="group relative my-6">
        <ScrollArea className="w-full rounded-md border border-border/50 bg-[#0d1117]">
          <div className="p-6 md:p-8">
            <pre
              {...props}
              className="p-0 m-0 overflow-visible bg-transparent border-none"
            >
              {children}
            </pre>
          </div>
          <ScrollBar orientation="horizontal" className="bg-muted/10" />
        </ScrollArea>
        <CopyButton
          text={rawText}
          className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    );
  },
};

/**
 * 記事本文のMDXソース内にthumbnailと同じ画像が含まれているかチェックする
 */
function isThumbnailInContent(
  content: string,
  thumbnail: string | undefined,
): boolean {
  if (!thumbnail) return false;
  const path = thumbnail.replace(/^\//, "");
  return content.includes(path) || content.includes(thumbnail);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const shouldHideThumbnail = isThumbnailInContent(
    post.content,
    post.frontmatter.thumbnail,
  );

  return (
    <article className="container px-4 md:px-8 py-12 max-w-3xl mx-auto space-y-8 pb-32">
      {/* 構造化データ (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            description: post.frontmatter.description,
            image: post.frontmatter.thumbnail
              ? `${siteConfig.url}${post.frontmatter.thumbnail}`
              : `${siteConfig.url}/images/profile.png`,
            datePublished: post.frontmatter.date,
            author: {
              "@type": "Person",
              name: "Fumiya Kato",
            },
          }),
        }}
      />
      {/* Back Button */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="-ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {post.frontmatter.categories.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </div>
      </div>

      <Separator />

      {/* Thumbnail */}
      {post.frontmatter.thumbnail && !shouldHideThumbnail && (
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted border border-border/50 shadow-sm relative">
          <Image
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary prose-img:rounded-lg">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </div>
    </article>
  );
}
