"use client";

import { useEffect, useState } from "react";

type CopyHandleProps = {
  label: string;
  handle: string;
};

/** クリックでユーザー名をコピーし、小さく COPIED と表示する（Discord 用） */
export function CopyHandle({ label, handle }: CopyHandleProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(handle);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label} のユーザー名 ${handle} をコピー`}
      className="group flex w-full cursor-pointer items-baseline justify-between gap-6 text-left"
    >
      <span className="font-serif text-contact font-light tracking-heading group-hover:text-shu">
        {label}
      </span>
      <span className="label flex items-baseline gap-4 text-ink-muted">
        <span aria-live="polite" className="text-shu">
          {copied ? "Copied" : ""}
        </span>
        <span className="group-hover:text-shu">{handle}</span>
      </span>
    </button>
  );
}
