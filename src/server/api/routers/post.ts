import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        take: z.number().min(1).max(10).nullish(),
        page: z.number().min(1),
      })
    )
    .query(({ input }) => {
      const take = input.take ?? 5;
      const offset = (input.page - 1) * take;

      const items = "abcdefghijklmnopqrstuvwxyz".split(",").map((v, i) => ({
        value: v,
        id: i,
      }));

      return {
        items: items.slice(offset, input.page * take),
        maxPage: Math.ceil(items.length / take),
      };
    }),
});
