import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { getAuthor, getPosts } from "@/lib/utils";
import { env } from "@/env";
import { Gallery } from "./gallery";

export default async function HomePage() {
  const auther = await getAuthor();
  const posts = await getPosts();

  return (
    <main className="w-full my-32">
      <div className="w-full flex flex-col items-center gap-6 mb-32">
        <div className="w-[64px]">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={auther?.avatar ?? ""}
              alt="profile image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full border"
            />
          </AspectRatio>
        </div>

        <h1 className="text-xl font-bold">Fumiya Kato</h1>

        <p className="text-zinc-500 text-center font-bold">
          Web developer & Data scientist
          <br />I love Overwatch
        </p>

        <div className="flex gap-2 text-zinc-500">
          <Button asChild variant="ghost" size="icon">
            <Link href={env.INSTAGRAM_URL}>
              <InstagramLogoIcon className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon">
            <Link href={env.TWITTER_URL}>
              <TwitterLogoIcon className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="ghost" size="icon">
            <Link href={env.GITHUB_URL}>
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Gallery initialPosts={posts} />
    </main>
  );
}
