import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Profile() {
  return (
    <Section index={1}>
      <dl>
        {profile.map((item) => (
          <Reveal
            key={item.label}
            className="grid grid-cols-1 gap-y-2 border-b border-rule py-row md:grid-cols-12 md:gap-x-8"
          >
            <dt className="label pt-[0.6em] text-ink-muted md:col-span-3">
              {item.label}
            </dt>
            <dd className="mincho text-lead md:col-span-9">
              {item.values.map((value, i) => (
                <span key={value} className="inline-block">
                  {i > 0 && (
                    <span aria-hidden="true" className="px-[0.5em] text-ink-muted">
                      ／
                    </span>
                  )}
                  {value}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
