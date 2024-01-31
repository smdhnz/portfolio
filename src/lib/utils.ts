import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { env } from "@/env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Image = {
  id: string;
  filename: string;
  url: string;
  width: number;
  height: number;
};

export type Post = {
  id: string;
  timestamp: Date;
  content: string;
  attachments: Image[];
};

export async function getPosts(beforeId?: string) {
  const url =
    `${env.BASE_URL}/channels/${env.CHANNEL_ID}/messages?limit=${env.NUMBER_OF_FETCH}` +
    (beforeId ? `&before=${beforeId}` : "");

  const res = await fetch(url, {
    cache: "no-cache",
    headers: {
      Authorization: env.AUTH_TOKEN,
    },
  });

  if (!res.ok) return [];

  const posts = (await res.json()) as Post[];

  return posts.map((post) => ({
    ...post,
    timestamp: new Date(post.timestamp),
  }));
}

export async function getAuthor() {
  const url = `${env.BASE_URL}/users/@me`;

  const res = await fetch(url, {
    cache: "no-cache",
    headers: {
      Authorization: env.AUTH_TOKEN,
    },
  });

  if (!res.ok) return null;

  const author = (await res.json()) as {
    id: string;
    global_name: string;
    avatar: string;
  };

  return {
    name: author.global_name,
    avatar: `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png`,
  };
}
