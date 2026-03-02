export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-foreground/30 border-t-accent" />
    </div>
  );
}
