export function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Delicate Micro-Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 10%, black 30%, transparent 80%)",
        }}
      />

      {/* Luminous Ambient Orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-transparent blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-accent/8 blur-3xl" />
    </div>
  );
}

