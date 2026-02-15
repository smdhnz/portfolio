import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import TiltedCard from "@/components/TiltedCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { ExternalLink } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import Image from "next/image";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <SplitText
          text="雰囲気エンジニアのブログ"
          className="text-4xl md:text-6xl font-bold tracking-tighter"
          delay={50}
        />
        <BlurText
          text="技術とか、日常とか。気が向いたときに、なんとなく更新します。"
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
          delay={200}
        />
        <div className="flex gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/blog">
              Read Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/smdhnz" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <SpotlightCard className="h-full overflow-hidden flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.frontmatter.thumbnail || "/images/profile.png"}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col">
                  <div className="flex gap-2">
                    {post.frontmatter.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] uppercase tracking-wider text-primary font-bold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-auto">
                    {post.frontmatter.description}
                  </p>
                  <time className="text-[10px] text-muted-foreground pt-2">
                    {post.frontmatter.date}
                  </time>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-center md:text-left border-b pb-2">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                基本的にはAIにコードを書かせて、自分はそれを眺めて頷くのが仕事です。
              </p>
              <p>
                0から1を生み出すようなクリエイティブな苦労はなるべく避けたい。でも、新しい技術やライブラリを触って『おーすごい』ってなるのは大好き。
              </p>
              <p>
                高専卒の悲しい性なのか、「これやって」と言われると、文句を垂れつつも結局なんでも実装してしまいます。基本は楽をして生きていたい、そんなエンジニアです。
              </p>
            </div>

            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm md:text-base border-t pt-4">
              <dt className="font-semibold text-foreground">Name</dt>
              <dd className="text-muted-foreground">Fumiya Kato</dd>

              <dt className="font-semibold text-foreground">Age</dt>
              <dd className="text-muted-foreground">
                {new Date().getFullYear() -
                  1999 -
                  (new Date() < new Date(new Date().getFullYear(), 11, 8)
                    ? 1
                    : 0)}
              </dd>

              <dt className="font-semibold text-foreground">Job</dt>
              <dd className="text-muted-foreground">フリーランスエンジニア</dd>

              <dt className="font-semibold text-foreground self-start">
                Likes
              </dt>
              <dd className="text-muted-foreground">
                Overwatch2, レザークラフト, 自作PC, ガジェット
              </dd>
            </dl>
          </div>
          <div className="flex justify-center">
            {/* TiltedCardでプロフィール画像を表示 */}
            <TiltedCard
              imageSrc="/profile-image.jpg"
              altText="Profile Picture"
              captionText="Fumiya Kato"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={30}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div className="bg-black/50 px-4 py-2 mt-4 ml-4 rounded-lg text-white">
                  <p className="font-bold">Fumiya Kato</p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8 pb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-center md:text-left border-b pb-2">
            Skills
          </h2>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            使える技術スタック（できるとは言ってない）
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Frontend Frameworks"
            skills={["React", "Next.js", "Vue", "Nuxt.js", "Tailwind CSS"]}
          />
          <SkillCard
            title="Languages"
            skills={["TypeScript", "Python", "VBA", "Shell/Batch"]}
          />
          <SkillCard title="Backend & DB" skills={["Node.js", "SQL"]} />
          <SkillCard
            title="Cloud & Infra"
            skills={[
              "AWS (Lambda, Sagemaker, etc.)",
              "Docker",
              "Linux",
              "WSL2",
              "サーバー構築(物理)",
            ]}
          />
          <SkillCard title="AI & Data" skills={["Huggingface", "Sagemaker"]} />
          <SkillCard
            title="Tools & Editors"
            skills={["Git", "Vim", "Neovim"]}
          />
        </div>
      </section>

      {/* Career Section */}
      <section className="space-y-8 pb-12">
        <h2 className="text-3xl font-bold tracking-tight text-center md:text-left border-b pb-2">
          Career
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-card shadow-sm">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-foreground">
                  東京都立産業技術高等専門学校 卒業
                </div>
                <time className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  2020.03
                </time>
              </div>
              <div className="text-sm text-muted-foreground">
                情報通信工学コース 卒業
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-card shadow-sm">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-foreground">
                  朝日エティック株式会社 入社
                </div>
                <time className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  2020.04
                </time>
              </div>
              <div className="text-sm text-muted-foreground">
                情報システム部にて、Web開発や情シス業務に従事。
                Excelマクロやバッチファイルによる業務効率化、キッティングなど「ITの便利屋さん」として奔走。
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-card shadow-sm">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-foreground">
                  株式会社分析屋 入社
                </div>
                <time className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  2023.11
                </time>
              </div>
              <div className="text-sm text-muted-foreground">
                データサイエンティスト見習いとしてSESに従事。株式会社ジールへ常駐。
                生成AIを活用したWebアプリケーション開発など、モダンな技術に触れ始める。
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border-2 border-primary/50 bg-card shadow-lg ring-1 ring-primary/20">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-foreground text-lg">
                  フリーランス独立
                </div>
                <time className="font-mono text-xs text-primary font-bold whitespace-nowrap">
                  2025.04 - Present
                </time>
              </div>
              <div className="text-sm text-muted-foreground">
                培った技術とAI活用スキルを武器に独立。
                株式会社ジールと直接契約を締結し、エンジニアとして活動中。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8 pb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-center md:text-left border-b pb-2">
            Projects
          </h2>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            作ったものや携わったもの
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="yomiage"
            description="Twitch 配信者用コメント読み上げアプリ。配信中のコメントをVOICEVOXを使ってリアルタイムに読み上げます。"
            demoUrl="https://yomiage.vercel.app/"
            repoUrl="https://github.com/smdhnz/yomiage"
          />
          <ProjectCard
            title="video-viewer"
            description="ブラウザで動作するローカルビデオビュアー。手元の動画ファイルをサクサク確認できます。"
            demoUrl="https://video-viewer-smdhnz.vercel.app/"
            repoUrl="https://github.com/smdhnz/video-viewer"
          />
          <ProjectCard
            title="STORYAI"
            description="生成AIと融合したAI感情分析SaaS"
            demoUrl="https://storyai.app/"
          />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  demoUrl,
  repoUrl,
}: {
  title: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
}) {
  return (
    <SpotlightCard
      className="h-full p-6 flex flex-col gap-4"
      spotlightColor="rgba(0, 229, 255, 0.1)"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2">
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm flex-1">{description}</p>
    </SpotlightCard>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-md py-1 px-3">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
