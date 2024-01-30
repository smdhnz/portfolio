"use server";
import { getPosts } from "@/lib/utils";

export const loadMorePosts = async (
  limit: number,
  beforeId: string | undefined,
) => await getPosts(limit, beforeId);
