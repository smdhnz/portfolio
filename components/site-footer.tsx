export function SiteFooter() {
  return (
    <footer className="py-6 pb-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 雰囲気エンジニアのブログ. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
