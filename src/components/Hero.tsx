import { site } from "@/lib/data";
import { Hanko } from "./Hanko";
import { Reveal } from "./Reveal";

const [first, last] = site.nameLines;

/**
 * ヒーロー。縦書きの「加藤史也」と横書きの「Fumiya Kato」を交差させる。
 *
 * md 以上：縦書きは右端に絶対配置し、天地中央に置く。横書きは通常の流れで
 * 左から組み、行末が縦書きの柱を横切る。重なりは z-index で横書きを手前に出し、
 * 紙色の縁取り（.knockout）で交差部分の墨を切り抜く。
 * md 未満：縦書きは右上に小さく流れの中で置き、横書きはその下に組む（重ねない）。
 */
export function Hero() {
  return (
    <section
      aria-label="Fumiya Kato"
      className="flex min-h-[calc(100svh-2.75rem)] flex-col px-gutter"
    >
      <div className="relative flex flex-1 flex-col pt-[6vh] pb-[6vh] md:justify-center md:pt-[10vh] md:pb-[8vh]">
        {/* 縦書きの署名＋著者印 */}
        <Reveal
          delay={80}
          className="z-0 self-end md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2"
        >
          <p
            lang="ja"
            className="flex flex-row-reverse items-end gap-[0.12em] text-tategaki-sm md:text-tategaki"
          >
            <span className="tategaki mincho font-medium tracking-[0.02em]">
              {site.nameJa}
            </span>
            <Hanko className="mb-[0.06em] w-[1.15em] text-[0.24em]" />
          </p>
        </Reveal>

        <Reveal delay={240} className="relative z-10 mt-[5vh] md:mt-0">
          <h1
            lang="en"
            className="knockout font-serif text-display-stacked font-light tracking-display whitespace-nowrap sm:text-display"
          >
            <span className="block sm:inline">{first}</span> {last}
          </h1>
        </Reveal>

        <div className="relative z-10 mt-[clamp(2rem,6vh,4.5rem)] flex flex-col gap-2 md:max-w-[60%]">
          <Reveal delay={400}>
            <p className="mincho text-role font-medium">{site.role}</p>
          </Reveal>
          <Reveal delay={520}>
            <p className="label text-ink-muted">{site.roleEn}</p>
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
