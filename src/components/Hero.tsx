import { site } from "@/lib/data";
import { Hanko } from "./Hanko";
import { Reveal } from "./Reveal";

const [first, last] = site.nameLines;

/**
 * ヒーロー。置くのは名前・判子・宣言・SCROLL だけ。
 * 改行位置：デスクトップは1行、モバイル（sm 未満）は名と姓の間で折る。
 */
export function Hero() {
  return (
    <section
      aria-label="Fumiya Kato"
      className="flex min-h-[calc(100svh-2.75rem)] flex-col px-gutter"
    >
      <div className="flex flex-1 flex-col justify-center pt-[12vh] pb-[8vh]">
        <Reveal delay={80}>
          <h1 className="font-serif text-display-stacked font-light tracking-display whitespace-nowrap sm:text-display">
            <span className="block sm:inline">{first}</span>{" "}
            <span className="inline-flex items-start">
              {last}
              <Hanko className="mt-[0.12em] ml-[0.1em] w-[1.15em] text-[0.22em] sm:text-[0.17em]" />
            </span>
          </h1>
        </Reveal>

        <div className="mt-[clamp(2.5rem,7vh,5rem)] flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
          <Reveal delay={320}>
            <p className="mincho text-statement font-medium">{site.statement}</p>
          </Reveal>
          <Reveal delay={480}>
            <p className="label text-ink-muted">{site.statementEn}</p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={720}>
        <div className="label flex items-center justify-between border-t border-rule-strong py-3">
          <span>Scroll ↓</span>
          <span className="text-ink-muted">00 / 05</span>
        </div>
      </Reveal>
    </section>
  );
}
