import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Youtube } from "@/components/mdx/Youtube";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

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

const components = {
  Youtube,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <article className="container px-4 md:px-8 py-12 max-w-3xl mx-auto space-y-8 pb-32">
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
            <Badge
              key={cat}
              variant="outline"
              className="border-primary/20 text-primary"
            >
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

      {/* Thumbnail */}
      {post.frontmatter.thumbnail && (
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
