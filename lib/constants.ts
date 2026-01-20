export const siteConfig = {
  title: "雰囲気エンジニアのブログ",
  description: "エンジニアとしてのポートフォリオサイトです。技術とか、日常とか。気が向いたときに、なんとなく更新します。",
  url: process.env.NEXT_PUBLIC_APP_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://example.com"),
  author: {
    name: "Fumiya Kato",
    url: "https://github.com/smdhnz",
  },
  links: {
    github: "https://github.com/smdhnz",
  },
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Portfolio",
    "Blog",
    "Engineer",
    "Shadcn UI",
    "Fumiya Kato",
    "加藤文也",
    "エンジニア",
    "ポートフォリオ",
    "ブログ",
    "Web開発",
    "フリーランス",
  ],
};

export type SiteConfig = typeof siteConfig;
