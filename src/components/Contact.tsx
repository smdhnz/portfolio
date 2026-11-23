import { contacts } from "@/lib/data";
import { CopyHandle } from "./CopyHandle";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** 大きなセリフのリンク一覧（罫線区切り） */
export function Contact() {
  return (
    <Section index={5} title="Contact">
      <ul className="border-t border-rule">
        {contacts.map((contact) => (
          <Reveal
            as="li"
            key={contact.label}
            className="border-b border-rule py-row"
          >
            {contact.kind === "link" ? (
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6"
              >
                <span className="font-serif text-contact font-light tracking-heading group-hover:text-shu">
                  {contact.label}
                </span>
                <span className="label text-ink-muted group-hover:text-shu">
                  {contact.handle} ↗
                </span>
              </a>
            ) : (
              <CopyHandle label={contact.label} handle={contact.handle} />
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
