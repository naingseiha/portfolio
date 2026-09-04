import { Briefcase, Laptop, Milestone, School } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { timeline } from "@/lib/about-data";

const icons = {
  school: School,
  briefcase: Briefcase,
  laptop: Laptop,
};

export function Timeline() {
  return (
    <section className="border-t border-black/5 bg-surface-subtle/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn className="mb-12 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md">
            <Milestone size={13} className="text-primary" />
            <span>Career Milestones</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            បទពិសោធន៍ការងារ &amp; ដំណើរបណ្តុះបណ្តាល
          </h2>
        </FadeIn>

        <div className="relative flex flex-col gap-8 border-s-2 border-primary/20 ps-6 sm:ps-8 ms-4 sm:ms-6">
          {timeline.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.title} delay={i * 0.1} className="relative">
                {/* Node icon */}
                <span className="absolute -start-[2.35rem] sm:-start-[2.85rem] flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/20 ring-4 ring-background">
                  <Icon size={15} />
                </span>

                <GlowCard className="p-6">
                  <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-[11px] font-semibold text-primary">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

