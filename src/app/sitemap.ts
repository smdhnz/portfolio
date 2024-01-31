import { MetadataRoute } from "next";
import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.DEPLOY_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
