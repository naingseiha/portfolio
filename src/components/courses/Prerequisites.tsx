import { Laptop, MailCheck, Monitor, Wifi } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { prerequisites } from "@/lib/courses";

const icons = {
  laptop: Laptop,
  "mail-check": MailCheck,
  monitor: Monitor,
  wifi: Wifi,
};

export function Prerequisites() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn className="mb-10 text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl">
            តម្រូវការចូលរួម
          </h2>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2">
          {prerequisites.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn
                key={item.label}
                delay={i * 0.06}
                className="flex items-center gap-3 rounded-2xl bg-background p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon size={18} />
                </span>
                <span className="text-sm text-foreground/90">
                  {item.label}
                </span>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
