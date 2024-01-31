import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    BASE_URL: z.string().url(),
    AUTH_TOKEN: z.string().min(1),
    CHANNEL_ID: z.string().min(1),
    INSTAGRAM_URL: z.string().url(),
    TWITTER_URL: z.string().url(),
    GITHUB_URL: z.string().url(),
    NUMBER_OF_FETCH: z
      .string()
      .transform((s) => parseInt(s))
      .pipe(z.number()),
    DEPLOY_URL: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    BASE_URL: process.env.BASE_URL,
    CHANNEL_ID: process.env.CHANNEL_ID,
    INSTAGRAM_URL: process.env.INSTAGRAM_URL,
    TWITTER_URL: process.env.TWITTER_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    NUMBER_OF_FETCH: process.env.NUMBER_OF_FETCH,
    DEPLOY_URL: process.env.DEPLOY_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
