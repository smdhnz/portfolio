import type { ReactNode } from "react";
import { sections } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export const SECTION_TOTAL = sections.length;

type SectionProps = {
  /** 通し番号（1始まり）。見出し・id・柱は data.ts の sections から引く */
  index: number;
  children: ReactNode;
};

/** セクションの共通枠（余白・見出し・ランドマーク） */
export function Section({ index, children }: SectionProps) {
  const { id, title, pillar } = sections[index - 1];
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="px-gutter pt-section"
    >
      <SectionHeading
        index={index}
        total={SECTION_TOTAL}
        title={title}
        pillar={pillar}
        id={`${id}-heading`}
      />
      {children}
    </section>
  );
}
