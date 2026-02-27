import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import SpotlightCard from "@/components/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const posts = getAllPosts();
  const categories = getAllCategories();

  const selectedCategory = Array.isArray(category) ? category[0] : category;

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.frontmatter.categories.includes(selectedCategory),
      )
    : posts;

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 space-y-12 pb-24">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          日々の学びや技術的なトピックを共有します。
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          asChild
          size="sm"
        >
          <Link href="/blog">All</Link>
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            asChild
            size="sm"
          >
            <Link href={`/blog?category=${cat}`}>{cat}</Link>
          </Button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block h-full group"
          >
            <SpotlightCard
              className="h-full p-6 transition-transform group-hover:-translate-y-1"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col h-full space-y-4">
                {post.frontmatter.thumbnail && (
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted relative">
                    <Image
                      src={post.frontmatter.thumbnail}
                      alt={post.frontmatter.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    <div className="flex gap-2 flex-wrap">
                      {post.frontmatter.categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant="secondary"
                          className="text-xs"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.frontmatter.description}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground pt-4 border-t">
                    {post.frontmatter.date}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-muted-foreground col-span-full text-center py-12">
            記事が見つかりませんでした。
          </p>
        )}
      </div>
    </div>
  );
}
