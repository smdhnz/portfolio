import { pad } from "@/lib/format";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: number;
  total: number;
  title: string;
  /** 右端に縦書きで置く和文ラベル（本の柱） */
  pillar: string;
  id: string;
};

/** 全セクション共通の見出し：番号（等幅）＋単語（セリフ）＋罫線＋縦書きの柱 */
export function SectionHeading({
  index,
  total,
  title,
  pillar,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal as="header" className="mb-[calc(var(--spacing-section)*0.42)]">
      <div className="flex items-end gap-5 border-b border-rule-strong pb-4 md:gap-8">
        <span className="label pb-[0.55em] text-shu">{pad(index)}</span>
        <h2
          id={id}
          className="font-serif text-section font-light tracking-heading"
        >
          {title}
        </h2>
        <span className="label ml-auto hidden pb-[0.55em] text-ink-muted sm:block">
          {pad(index)} / {pad(total)}
        </span>
        <span
          lang="ja"
          aria-hidden="true"
          className="tategaki mincho ml-auto pb-[0.2em] text-pillar text-ink-muted sm:ml-0"
        >
          {pillar}
        </span>
      </div>
    </Reveal>
  );
}
