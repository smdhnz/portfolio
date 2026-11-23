import { site } from "@/lib/data";
import { Hanko } from "./Hanko";
import { Reveal } from "./Reveal";

/** 奥付。ヒーローの宣言を反復し、判子で締める */
export function Footer() {
  return (
    <footer className="px-gutter pt-section">
      <Reveal className="flex items-end justify-between gap-6 border-t border-rule-strong pt-[calc(var(--spacing-section)*0.5)] pb-[calc(var(--spacing-section)*0.4)]">
        <p className="mincho flex flex-wrap text-closing font-medium">
          {site.statementParts.map((part) => (
            <span key={part} className="whitespace-nowrap">
              {part}
            </span>
          ))}
        </p>
        <Hanko className="mb-[0.4em] w-[1.15em] text-hanko" />
      </Reveal>
      <div className="label flex items-center justify-between border-t border-rule py-3 text-ink-muted">
        <span>{site.copyright}</span>
        <span>{site.masthead.right}</span>
      </div>
    </footer>
  );
}
