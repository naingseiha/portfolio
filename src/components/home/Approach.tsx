import { RefreshCw, Search, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { approach } from "@/lib/home-data";

const icons = {
  search: Search,
  "refresh-cw": RefreshCw,
  "shield-check": ShieldCheck,
};

export function Approach() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-10 text-center">
          <p className="mb-1.5 text-xs font-semibold tracking-[0.15em] text-primary uppercase">
            My Philosophy
          </p>
          <h2 className="text-2xl text-foreground sm:text-3xl">
            របៀបធ្វើការរបស់ខ្ញុំ
          </h2>
        </FadeIn>

        <div className="grid gap-3 md:grid-cols-3">
          {approach.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn
                key={item.title}
                delay={i * 0.1}
                className="flex flex-col gap-3 rounded-3xl bg-background p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
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
