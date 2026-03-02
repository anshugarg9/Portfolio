export default function GlowButton({
  href,
  children,
  variant = "primary",
  as = "a",
  type = "button",
  onClick,
  target,
  rel,
  disabled = false
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";

  const styles =
    variant === "outline"
      ? "border border-foreground/30 text-foreground hover:border-accent/70 hover:text-accent"
      : "bg-accent text-white shadow-glow hover:shadow-[0_0_50px_rgba(99,102,241,0.55)]";

  if (as === "button") {
    return (
      <button
        className={`${base} ${styles}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      className={`${base} ${styles}`}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
