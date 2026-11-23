import { site } from "@/lib/data";

type HankoProps = {
  className?: string;
};

/**
 * 朱の判子。朱の四角に白抜き（紙色）の「加」。CSS だけで描く。
 * 著者印として、ヒーローの縦書き署名の脇と奥付の2か所だけに置く。
 */
export function Hanko({ className = "" }: HankoProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex aspect-square shrink-0 select-none items-center justify-center rounded-[3px] bg-shu font-mincho font-bold leading-none text-paper outline outline-1 -outline-offset-[0.14em] outline-paper/70 ${className}`}
    >
      <span className="translate-y-[0.02em] text-[0.62em]">{site.hankoChar}</span>
    </span>
  );
}
