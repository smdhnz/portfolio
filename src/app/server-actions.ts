"use server";
import { getPosts } from "@/lib/utils";

export const loadMorePosts = async (beforeId: string | undefined) =>
  await getPosts(beforeId);
