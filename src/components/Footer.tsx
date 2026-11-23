import { colophon, site } from "@/lib/data";
import { Hanko } from "./Hanko";
import { Reveal } from "./Reveal";

/** 奥付。罫線の枠に標題・著者・発行・所在地・URL を組み、著者名の脇に著者印を押す */
export function Footer() {
  return (
    <footer className="px-gutter pt-section">
      <div className="border-t border-rule-strong pt-[calc(var(--spacing-section)*0.45)] pb-[calc(var(--spacing-section)*0.4)]">
        <Reveal className="w-full max-w-[22rem] border border-rule-strong px-6 py-5 md:ml-auto">
          <p lang="ja" className="mincho border-b border-rule pb-3 text-lead font-medium">
            {colophon.title}
          </p>
          <dl lang="ja" className="mincho mt-3 text-colophon">
            {colophon.rows.map((row) => (
              <div key={row.label} className="flex items-center gap-[1em]">
                <dt className="w-[3.5em] shrink-0 [text-align-last:justify]">
                  {row.label}
                </dt>
                <dd className="flex items-center gap-3">
                  {row.value}
                  {"seal" in row && row.seal && (
                    <Hanko className="w-[1.15em] text-seal" />
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 border-t border-rule pt-3 font-mono text-colophon">
            {colophon.url}
          </p>
        </Reveal>
      </div>
      <div className="label flex items-center justify-between border-t border-rule py-3 text-ink-muted">
        <span>{site.copyright}</span>
        <span>{site.masthead.right}</span>
      </div>
    </footer>
  );
}
