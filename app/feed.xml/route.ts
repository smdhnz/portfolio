import RSS from "rss";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/constants";
import { NextResponse } from "next/server";

/**
 * RSSフィード (feed.xml) を生成する
 */
export async function GET() {
  const posts = getAllPosts();
  const baseUrl = siteConfig.url;

  const feed = new RSS({
    title: siteConfig.title,
    description: siteConfig.description,
    feed_url: `${baseUrl}/feed.xml`,
    site_url: baseUrl,
    image_url: `${baseUrl}/favicon.ico`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.author.name}`,
    language: "ja",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${baseUrl}/blog/${post.slug}`,
      guid: post.slug,
      categories: post.frontmatter.categories,
      date: post.frontmatter.date,
      enclosure: post.frontmatter.thumbnail
        ? {
            url: `${baseUrl}${post.frontmatter.thumbnail}`,
            type: "image/png",
          }
        : undefined,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
    },
  });
}
