import { Briefcase, Laptop, School } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { timeline } from "@/lib/about-data";

const icons = {
  school: School,
  briefcase: Briefcase,
  laptop: Laptop,
};

export function Timeline() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl">
            បទពិសោធន៍
          </h2>
        </FadeIn>

        <div className="relative flex flex-col gap-10 border-s-2 border-border ps-8">
          {timeline.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.title} delay={i * 0.1} className="relative">
                <span className="absolute -start-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-surface">
                  <Icon size={16} />
                </span>
                <p className="text-sm font-medium text-primary">
                  {item.period}
                </p>
                <h3 className="mt-1 text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
