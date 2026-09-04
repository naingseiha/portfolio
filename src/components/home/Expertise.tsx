import { Globe, Layers, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { expertiseCards } from "@/lib/home-data";

const icons = {
  layers: Layers,
  globe: Globe,
  smartphone: Smartphone,
};

export function Expertise() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn className="mb-10 text-center">
        <p className="mb-1.5 text-xs font-semibold tracking-[0.15em] text-primary uppercase">
          My Expertise
        </p>
        <h2 className="text-2xl text-foreground sm:text-3xl">ជំនាញសំខាន់ៗ</h2>
      </FadeIn>

      <div className="grid gap-3 md:grid-cols-3">
        {expertiseCards.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <FadeIn
              key={card.title}
              delay={i * 0.1}
              className="flex flex-col gap-3 rounded-3xl bg-surface p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon size={20} />
              </span>
              <h3 className="text-lg text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {card.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary-soft/60 px-3 py-1 text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
