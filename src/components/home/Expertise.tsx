import { Bot, Cpu, Database, Globe, Layers, Plus, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { techStackBento } from "@/lib/home-data";

const icons = {
  layers: Layers,
  globe: Globe,
  smartphone: Smartphone,
  bot: Bot,
  database: Database,
  cpu: Cpu,
};

export function Expertise() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      {/* Apple-Style Section Header with Koulen Display Font */}
      <FadeIn className="mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md mb-3">
              <Cpu size={13} className="text-primary" />
              <span>Core Engineering Competencies</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-foreground">
              ជំនាញវិស្វកម្ម &amp; បច្ចេកវិទ្យាស្នូល
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
              បច្ចេកវិទ្យា និងឧបករណ៍កម្រិតខ្ពស់ដែលខ្ញុំប្រើប្រាស់ក្នុងការបង្កើតប្រព័ន្ធសូហ្វវែរ។
            </p>
          </div>
          <span className="font-accent text-sm text-primary/80 hidden md:block">
            ស្តង់ដារវិស្វកម្ម &amp; គុណភាពកូដ
          </span>
        </div>
      </FadeIn>

      {/* Apple Store Style Bento Grid Matrix */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {techStackBento.map((item, idx) => {
          const Icon = icons[item.icon];
          return (
            <FadeIn key={item.title} delay={idx * 0.08} className={item.colSpan}>
              <GlowCard className="group h-full !rounded-[32px] border border-black/[0.06]" glowColor={item.theme.glowColor}>
                <div className={`flex min-h-[420px] h-full flex-col justify-between p-8 sm:p-9 bg-gradient-to-br ${item.theme.gradient}`}>
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                        {item.categoryKh}
                      </span>
                      <span className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-2xs ${item.theme.iconBg}`}>
                        <Icon size={20} />
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-bold tracking-normal text-foreground sm:text-[1.65rem] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#6e6e73]">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Section with Apple Circular Button */}
                  <div className="mt-8 pt-6 border-t border-black/5 flex items-end justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                            tech.highlight
                              ? `border ${item.theme.activeChip}`
                              : "border border-black/5 bg-surface-subtle/80 text-foreground-secondary"
                          }`}
                        >
                          {tech.name}
                          {tech.level === "Expert" && (
                            <span className={`h-1.5 w-1.5 rounded-full ${item.theme.dotColor}`} />
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Apple Signature Circular Plus Button */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] text-white shadow-xs transition-transform duration-300 group-hover:scale-110">
                      <Plus size={16} />
                    </div>
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

