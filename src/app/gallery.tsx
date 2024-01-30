"use client";

import { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/utils";
import { loadMorePosts } from "./server-actions";

type Props = {
  initialPosts: Post[];
};

export function Gallery({ initialPosts }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [beforeId, setBeforeId] = useState(
    initialPosts[initialPosts.length - 1]?.id,
  );

  const [last, setLast] = useState(false);

  const onClick = async () => {
    const nextPosts = await loadMorePosts(5, beforeId);

    if (nextPosts.length > 0) {
      setBeforeId(nextPosts[nextPosts.length - 1]?.id);
      setPosts((prev) => [...prev, ...nextPosts]);
    } else {
      setLast(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {posts.map(({ id, attachments, content }) => (
        <div className="w-[300px]" key={id}>
          <AspectRatio ratio={1 / 1}>
            <Image
              src={attachments[0]?.url ?? ""}
              alt={attachments[0]?.filename ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl border"
            />
          </AspectRatio>
        </div>
      ))}
      <Button variant="ghost" onClick={onClick} disabled={last}>
        {last ? "" : "Load more images"}
      </Button>
    </div>
  );
}
