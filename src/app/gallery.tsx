"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Post } from "@/lib/utils";
import { loadMorePosts } from "./server-actions";

type Props = {
  initialPosts: Post[];
};

export function Gallery({ initialPosts }: Props) {
  const initialBedoreId = initialPosts[initialPosts.length - 1]?.id;

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [beforeId, setBeforeId] = useState(initialBedoreId);
  const [last, setLast] = useState(false);
  const { ref, inView } = useInView();

  const loadMore = async () => {
    const nextPosts = await loadMorePosts(beforeId);

    if (nextPosts.length > 0) {
      setBeforeId(nextPosts[nextPosts.length - 1]?.id);
      setPosts((prev) => [...prev, ...nextPosts]);
    } else {
      setLast(true);
    }
  };

  useEffect(() => {
    if (inView) loadMore();
  }, [inView]);

  return (
    <div>
      <div className="flex flex-col items-center w-full gap-4">
        {posts.map(({ id, attachments, content }) => (
          <div
            key={id}
            className="w-[300px] rounded-xl border-2 overflow-hidden animate-slide-top bg-black"
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                src={attachments[0]?.url ?? ""}
                alt={attachments[0]?.filename ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center h-full w-full"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      {!last && <div ref={ref} />}
    </div>
  );
}
