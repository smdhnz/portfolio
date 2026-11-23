import { skills } from "@/lib/data";
import { pad } from "@/lib/format";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** 索引形式：グループ名（等幅）の下に項目を罫線区切りで縦に積む */
export function Skills() {
  return (
    <Section index={2} title="Skills">
      <div className="grid grid-cols-1 gap-x-[clamp(2rem,6vw,6rem)] gap-y-[calc(var(--spacing-section)*0.4)] md:grid-cols-2">
        {skills.map((group, g) => (
          <Reveal key={group.name}>
            <h3 className="label flex justify-between border-b border-rule-strong pb-2">
              <span>
                <span className="text-shu">{pad(g + 1)}</span>
                <span className="px-2 text-ink-muted">—</span>
                {group.name}
              </span>
              <span className="text-ink-muted">{pad(group.items.length)}</span>
            </h3>
            <ul>
              {group.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-rule py-3"
                >
                  <span className="label w-6 text-ink-muted">{i + 1}</span>
                  <span className="mincho text-lead">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
