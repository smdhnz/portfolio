import { works } from "@/lib/data";
import { displayHost, pad } from "@/lib/format";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** 索引形式の作品一覧。画像は使わずタイポグラフィだけで構成する */
export function Works() {
  return (
    <Section index={4} title="Works">
      <ol>
        {works.map((work, i) => {
          const caption = [work.year, work.stack, work.role]
            .filter(Boolean)
            .join(" — ");
          return (
            <Reveal
              as="li"
              key={work.title}
              className="grid grid-cols-1 gap-y-5 border-b border-rule py-[calc(var(--spacing-row)*2)] md:grid-cols-12 md:gap-x-8"
            >
              <span className="label pt-[0.6em] text-shu md:col-span-2">
                No.{pad(i + 1)}
              </span>
              <div className="md:col-span-10">
                <h3 className="font-serif text-work font-light tracking-heading">
                  {work.title}
                </h3>
                <p className="label mt-5 text-ink-muted">{caption}</p>
                <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                  <p className="mincho max-w-[34em]">{work.description}</p>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label ink-link shrink-0 self-start lg:self-auto"
                  >
                    {displayHost(work.url)} ↗
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
