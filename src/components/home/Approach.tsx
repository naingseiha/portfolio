import { Gem, ShieldCheck, Zap } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { engineeringPrinciples } from "@/lib/home-data";

const icons = {
  "shield-check": ShieldCheck,
  zap: Zap,
  gem: Gem,
};

export function Approach() {
  return (
    <section className="relative border-y border-black/5 bg-surface-subtle/40 py-16 sm:py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <FadeIn className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md">
            <ShieldCheck size={13} className="text-primary" />
            <span>Engineering Principles &amp; Standards</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-foreground">
            ស្តង់ដារវិស្វកម្ម &amp; ក្រមសីលធម៌កូដ
          </h2>
          <p className="font-accent text-sm sm:text-base text-primary/80 mt-2">
            សិល្បៈនៃការសរសេរកូដប្រកបដោយភាពម៉ត់ចត់ និងភាពស្អាតស្អំ
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-muted">
            ការផ្តោតលើភាពម៉ត់ចត់នៃស្ថាបត្យកម្ម ល្បឿន និងបទពិសោធន៍រលូនកម្រិតកំពូល។
          </p>
        </FadeIn>

        {/* 3 Principles Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {engineeringPrinciples.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <GlowCard className="h-full !rounded-[28px] sm:!rounded-[32px] border border-black/[0.06]">
                  <div className="flex h-full flex-col p-6 sm:p-8 md:p-9">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                      {item.titleKh}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

