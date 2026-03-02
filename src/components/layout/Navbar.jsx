export default function Navbar({ sections }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-foreground-muted">
          AG
        </span>
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          {sections.map((section) => (
            <a
              className="text-foreground-muted transition hover:text-foreground"
              href={`#${section.id}`}
              key={section.id}
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
