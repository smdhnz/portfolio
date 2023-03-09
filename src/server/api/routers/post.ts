import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(10).nullish(),
        cursor: z.number().nullish(),
      })
    )
    .query(({ input }) => {
      const limit = input.limit ?? 5;
      const cursor = input.cursor;

      const data = "abcdefghijklmnopqrstuvwxyz".split("").map((v, i) => ({
        id: i,
        title: v,
        images: [{ url: "/image.jpg" }],
      }));

      const start = cursor ? data.findIndex((d) => d.id === cursor) : 0;
      const end = start + limit + 1;
      const items = data.slice(start, end);

      if (items.length <= limit)
        return {
          items,
          nextCursor: undefined,
        };

      const lastItem = items.pop();

      return {
        items,
        nextCursor: lastItem!.id,
      };
    }),
});
