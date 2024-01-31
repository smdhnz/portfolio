import Image from "next/image";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Post } from "@/lib/utils";

export function PostContent({ post }: { post: Post }) {
  return (
    <DialogContent className="sm:max-w-md p-0 gap-0">
      <Carousel>
        <CarouselContent>
          {post.attachments.map((img) => (
            <CarouselItem key={img.id}>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={img.url}
                  alt={img.filename}
                  width={img.width}
                  height={img.height}
                  className="object-contain object-center h-full w-full"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {post.content && (
        <DialogFooter className="sm:justify-start border-t px-2 py-3">
          {post.content}
        </DialogFooter>
      )}
    </DialogContent>
  );
}
