"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * コードブロック用のコピーボタンコンポーネント
 *
 * @param props - コンポーネントのプロパティ
 * @param props.text - コピー対象のテキスト
 * @param props.className - 追加のスタイルクラス
 * @returns コピーボタンのReactコンポーネント
 */
export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [isCopied, setIsCopied] = React.useState(false);

  /**
   * テキストをクリップボードにコピーし、完了状態を一時的に保持する
   */
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800",
        className,
      )}
      onClick={copy}
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="sr-only">Copy code</span>
    </Button>
  );
}
