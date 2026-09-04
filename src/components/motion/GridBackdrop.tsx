export function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
