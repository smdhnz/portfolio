/** 通し番号を2桁にそろえる（01, 02, ...） */
export const pad = (n: number) => String(n).padStart(2, "0");

/** URL から表示用のホスト名を作る */
export function displayHost(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
