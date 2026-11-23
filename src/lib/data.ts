// サイトに表示する内容はすべてここに集約する。コンポーネントは表示に専念する。

export type ProfileItem = {
  label: string;
  values: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type CareerEntry = {
  date: string;
  org: string;
  note?: string;
  description?: string;
};

export type Work = {
  title: string;
  year?: string;
  stack: string;
  role: string;
  description: string;
  url: string;
};

export type ContactLink =
  | { kind: "link"; label: string; url: string; handle: string }
  | { kind: "copy"; label: string; handle: string };

export const site = {
  title: "Fumiya Kato | Portfolio",
  description:
    "加藤史也（Fumiya Kato）のポートフォリオ。フリーランスエンジニア。",
  masthead: { left: "PORTFOLIO — 2026", right: "KASHIWA, JAPAN" },
  // 改行位置を手で決めるため、行ごとに分けて持つ
  nameLines: ["Fumiya", "Kato"],
  // ヒーローで縦に組む和文の名前
  nameJa: "加藤史也",
  // ヒーローで名前の下に置く事実（キャッチコピーは置かない）
  role: "フリーランスエンジニア",
  roleEn: "FREELANCE ENGINEER — KASHIWA, JAPAN",
  hankoChar: "加",
  copyright: "© 2026 Fumiya Kato",
} as const;

export type SectionEntry = {
  /** アンカー id（#profile など） */
  id: string;
  title: string;
  /** 見出し右端に縦書きで置く和文ラベル（本の柱） */
  pillar: string;
  /** 目次に載せる頁番号風の番号 */
  page: number;
};

/** 本の構成。目次とセクション見出しはここから作る（並び順 = 通し番号） */
export const sections: SectionEntry[] = [
  { id: "profile", title: "Profile", pillar: "プロフィール", page: 3 },
  { id: "skills", title: "Skills", pillar: "技能", page: 7 },
  { id: "career", title: "Career", pillar: "経歴", page: 13 },
  { id: "works", title: "Works", pillar: "作品", page: 19 },
  { id: "contact", title: "Contact", pillar: "連絡先", page: 27 },
];

/** 奥付 */
export const colophon = {
  title: "ポートフォリオ",
  rows: [
    { label: "著者", value: "加藤史也", seal: true },
    { label: "発行", value: "2026年11月" },
    { label: "所在地", value: "千葉県柏市" },
  ],
  url: "https://portfolio.fumiya.dev",
} as const;

export const profile: ProfileItem[] = [
  { label: "Name", values: ["加藤史也", "Fumiya Kato"] },
  { label: "Born", values: ["1999.12.08"] },
  { label: "Job", values: ["フリーランスエンジニア"] },
  {
    label: "Likes",
    values: ["Overwatch 2", "レザークラフト", "自作PC", "ガジェット"],
  },
];

export const skills: SkillGroup[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue", "Nuxt.js", "Tailwind CSS"],
  },
  {
    name: "Languages",
    items: ["TypeScript", "Python", "VBA", "Shell・Batch"],
  },
  { name: "Backend & DB", items: ["Node.js", "SQL"] },
  {
    name: "Cloud & Infra",
    items: [
      "AWS（Lambda, SageMaker, etc.）",
      "Docker",
      "Linux",
      "WSL2",
      "サーバー構築（物理）",
    ],
  },
  { name: "AI & Data", items: ["Hugging Face", "SageMaker"] },
  { name: "Tools & Editors", items: ["Git", "Vim", "Neovim"] },
];

export const career: CareerEntry[] = [
  {
    date: "2020.03",
    org: "東京都立産業技術高等専門学校",
    note: "卒業（情報通信工学コース）",
  },
  {
    date: "2020.04",
    org: "朝日エティック株式会社",
    description:
      "情報システム部でWeb開発と情シス業務を担当。Excelマクロやバッチファイルによる業務効率化、PCのキッティングなどを行った。",
  },
  {
    date: "2023.11",
    org: "株式会社分析屋",
    description:
      "データサイエンティスト見習いとしてSESで従事し、株式会社ジールに常駐。生成AIを活用したWebアプリケーションの開発を担当した。",
  },
  {
    date: "2025.04",
    org: "フリーランス独立",
    description:
      "株式会社ジールと直接契約を結び、業務委託で開発に従事している。",
  },
];

export const works: Work[] = [
  {
    title: "Torunel",
    year: "2026",
    stack: "TypeScript / Go / PostgreSQL",
    role: "設計・開発・運用",
    description:
      "ローカル開発環境を外部に公開するトンネルサービス。IDも設定ファイルも使わず、名前を指定するだけでつながる。設計から開発、運用まで一人で担う。",
    url: "https://fumiya.dev",
  },
  {
    title: "Tools",
    year: "2026",
    stack: "Next.js / TypeScript",
    role: "個人開発",
    description:
      "日常の小さな作業を集めた個人用ツール集。配信コメント読み上げ、動画・音声編集、画像変換など11のツール。",
    url: "https://tools.fumiya.dev",
  },
  {
    title: "Board Verse",
    stack: "Next.js / WebSocket",
    role: "個人開発",
    description:
      "URLを共有するだけで対戦できるオンラインボードゲーム。将棋、リバーシ、五目並べ、大富豪、2048。",
    url: "https://board-verse.fumiya.dev",
  },
  {
    title: "STORYAI",
    stack: "生成AI / SaaS",
    role: "開発担当",
    description: "生成AIと融合したAI感情分析SaaS。",
    url: "https://storyai.app/",
  },
];

export const contacts: ContactLink[] = [
  {
    kind: "link",
    label: "GitHub",
    handle: "smdhnz",
    url: "https://github.com/smdhnz",
  },
  {
    kind: "link",
    label: "Instagram",
    handle: "ktfmy_",
    url: "https://www.instagram.com/ktfmy_/",
  },
  { kind: "link", label: "X", handle: "2383k", url: "https://x.com/2383k" },
  {
    kind: "link",
    label: "YouTube",
    handle: "@smdhnz-w6f",
    url: "https://www.youtube.com/@smdhnz-w6f",
  },
  { kind: "copy", label: "Discord", handle: "smdhnz" },
];
