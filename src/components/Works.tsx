import { works, type Work } from "@/lib/data";
import { displayHost, pad } from "@/lib/format";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/**
 * 作品一覧。画像は使わずタイポグラフィだけで構成する。
 * 先頭（Torunel）は特大で全幅、2件目以降は左右交互にずらして均一な反復を崩す。
 */
export function Works() {
  return (
    <Section index={4}>
      <ol>
        {works.map((work, i) => {
          const featured = i === 0;
          // 偶数件目（2件目、4件目…）はブロック全体を右へ寄せる
          const shifted = !featured && i % 2 === 1;

          const numberCol = shifted ? "md:col-start-4 md:col-span-2" : "md:col-span-2";
          const bodyCol = featured ? "md:col-span-10" : "md:col-span-7";

          return (
            <Reveal
              as="li"
              key={work.title}
              className={`grid grid-cols-1 gap-y-5 border-b border-rule md:grid-cols-12 md:gap-x-8 ${
                featured
                  ? "py-[calc(var(--spacing-row)*2.6)]"
                  : "py-[calc(var(--spacing-row)*2)]"
              }`}
            >
              <span className={`label pt-[0.6em] text-shu ${numberCol}`}>
                No.{pad(i + 1)}
              </span>
              <div className={bodyCol}>
                <WorkBody work={work} featured={featured} shifted={shifted} />
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

type WorkBodyProps = {
  work: Work;
  featured: boolean;
  shifted: boolean;
};

function WorkBody({ work, featured, shifted }: WorkBodyProps) {
  const caption = [work.year, work.stack, work.role].filter(Boolean).join(" — ");

  return (
    <>
      <h3
        className={`font-serif font-light ${
          featured ? "text-work-feature tracking-display" : "text-work tracking-heading"
        }`}
      >
        {work.title}
      </h3>
      <p className="label mt-5 text-ink-muted">{caption}</p>
      <div
        className={`mt-6 flex flex-col gap-6 ${
          featured
            ? "lg:flex-row lg:items-end lg:justify-between lg:gap-16"
            : shifted
              ? "md:pl-[12%]"
              : ""
        }`}
      >
        <p
          className={
            featured
              ? "mincho max-w-[44em] text-lead"
              : "mincho max-w-[30em]"
          }
        >
          {work.description}
        </p>
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`label ink-link shrink-0 self-start ${featured ? "lg:self-auto" : ""}`}
        >
          {displayHost(work.url)} ↗
        </a>
      </div>
    </>
  );
}
