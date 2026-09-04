import {
  AppWindow,
  ClipboardCheck,
  FileText,
  Gem,
  Presentation,
  Video,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { portfolioOutcomes } from "@/lib/courses";

const icons = {
  presentation: Presentation,
  "file-text": FileText,
  "clipboard-check": ClipboardCheck,
  gem: Gem,
  video: Video,
  "app-window": AppWindow,
};

export function PortfolioOutcomes() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn className="mb-10 text-center">
        <h2 className="text-3xl text-foreground sm:text-4xl">
          លទ្ធផលរំពឹងទុក (Portfolio ចុងវគ្គ)
        </h2>
        <p className="mt-3 text-muted">
          បញ្ចប់វគ្គ អ្នកនឹងមានស្នាដៃ ៦ ប្រភេទសម្រាប់ប្រើប្រាស់ជាក់ស្តែង
        </p>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioOutcomes.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <FadeIn
              key={item.title}
              delay={i * 0.06}
              className="flex flex-col items-center gap-3 rounded-2xl bg-surface p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon size={22} />
              </span>
              <span className="font-medium text-foreground">
                {item.title}
              </span>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
