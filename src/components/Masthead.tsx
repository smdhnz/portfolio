import { site } from "@/lib/data";

/** 最上部の細いバー（柱） */
export function Masthead() {
  return (
    <div className="px-gutter">
      <div className="label flex items-center justify-between border-b border-rule-strong py-3 text-ink">
        <span>{site.masthead.left}</span>
        <span>{site.masthead.right}</span>
      </div>
    </div>
  );
}
