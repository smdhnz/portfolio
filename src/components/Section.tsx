import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

export const SECTION_TOTAL = 5;

type SectionProps = {
  index: number;
  title: string;
  children: ReactNode;
};

/** セクションの共通枠（余白・見出し・ランドマーク） */
export function Section({ index, title, children }: SectionProps) {
  const id = title.toLowerCase();
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
        id={`${id}-heading`}
      />
      {children}
    </section>
  );
}
