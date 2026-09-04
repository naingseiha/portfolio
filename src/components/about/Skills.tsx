import { Code2, Database, Layers, Presentation, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { skillGroups } from "@/lib/about-data";

const icons = {
  code: Code2,
  smartphone: Smartphone,
  database: Database,
  presentation: Presentation,
};

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
      <FadeIn className="mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md">
          <Layers size={13} className="text-primary" />
          <span>Technical Capabilities</span>
        </div>
        <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-wide text-foreground">
          ជំនាញ និងបច្ចេកវិទ្យា
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-muted">
          ជំនាញវិស្វកម្មសូហ្វវែរ និងការអប់រំដែលខ្ញុំអនុវត្តក្នុងការងារជាក់ស្តែង
        </p>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <FadeIn key={group.title} delay={i * 0.08}>
              <GlowCard className="h-full">
                <div className="flex h-full flex-col justify-between p-7 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-black/5 bg-surface-subtle px-3 py-1.5 text-xs font-medium text-foreground-secondary transition-colors hover:border-primary/30 hover:bg-primary-soft hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

