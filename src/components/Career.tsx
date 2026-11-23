import { career } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** 年表：年（等幅）／所属（セリフ大）／説明（短文） */
export function Career() {
  return (
    <Section index={3} title="Career">
      <ol>
        {career.map((entry) => (
          <Reveal
            as="li"
            key={entry.date}
            className="grid grid-cols-1 gap-y-3 border-b border-rule py-[calc(var(--spacing-row)*1.4)] md:grid-cols-12 md:gap-x-8"
          >
            <time
              dateTime={entry.date.replace(".", "-")}
              className="label pt-[0.9em] md:col-span-3"
            >
              {entry.date}
            </time>
            <div className="md:col-span-9">
              <h3 className="mincho text-org font-medium">
                {entry.org}
              </h3>
              {entry.note && (
                <p className="mincho mt-1 text-ink-muted">{entry.note}</p>
              )}
              {entry.description && (
                <p className="mincho mt-3 max-w-[38em] text-ink-muted">
                  {entry.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
