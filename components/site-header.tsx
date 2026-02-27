import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="flex h-16 items-center justify-end px-4 md:px-8">
        <ThemeToggle />
      </div>
    </header>
  );
}
