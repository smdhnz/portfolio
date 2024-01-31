"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import type { Post } from "@/lib/utils";
import { loadMorePosts } from "./server-actions";
import { PostContent } from "./post-content";

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
        {posts.map((post) => (
          <Dialog key={post.id}>
            <DialogTrigger>
              <div className="w-[300px] rounded-xl border-2 overflow-hidden animate-slide-top bg-black">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={post.attachments[0]?.url ?? ""}
                    alt={post.attachments[0]?.filename ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality="65"
                    className="object-contain object-center h-full w-full"
                  />
                </AspectRatio>
              </div>
            </DialogTrigger>
            <PostContent post={post} />
          </Dialog>
        ))}
      </div>
      {!last && <div ref={ref} />}
    </div>
  );
}
