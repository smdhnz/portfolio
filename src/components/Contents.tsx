import { sections } from "@/lib/data";
import { pad } from "@/lib/format";
import { Reveal } from "./Reveal";

/**
 * 目次。番号を持たない独立ブロックとしてヒーローの直後に置く。
 * 「番号　項目名……頁」の本の目次の組版で、各行は該当セクションへのアンカー。
 */
export function Contents() {
  return (
    <nav
      aria-labelledby="contents-heading"
      className="px-gutter pt-section"
    >
      <Reveal className="mb-[calc(var(--spacing-section)*0.3)] flex items-end justify-between border-b border-rule-strong pb-4">
        <h2
          id="contents-heading"
          lang="ja"
          className="mincho text-section font-medium"
        >
          目次
        </h2>
        <span className="label pb-[0.55em] text-ink-muted">Contents</span>
      </Reveal>

      <ol className="md:ml-[25%]">
        {sections.map((section, i) => (
          <Reveal as="li" key={section.id} className="border-b border-rule">
            <a
              href={`#${section.id}`}
              className="group flex items-baseline gap-4 py-row hover:text-shu md:gap-6"
            >
              <span className="label w-6 shrink-0 text-shu">{pad(i + 1)}</span>
              <span className="font-serif text-contents font-light tracking-heading">
                {section.title}
              </span>
              <span aria-hidden="true" className="leader text-ink-muted group-hover:text-shu" />
              <span className="label shrink-0 tabular-nums">
                <span className="sr-only">頁 </span>
                {pad(section.page)}
              </span>
            </a>
          </Reveal>
        ))}
      </ol>
    </nav>
  );
}
