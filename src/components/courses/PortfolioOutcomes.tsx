import {
  AppWindow,
  ClipboardCheck,
  FileText,
  Gem,
  Layers,
  Presentation,
  Video,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { portfolioOutcomes as defaultOutcomes } from "@/lib/courses";

const icons: Record<string, React.ElementType> = {
  presentation: Presentation,
  "file-text": FileText,
  "clipboard-check": ClipboardCheck,
  gem: Gem,
  video: Video,
  "app-window": AppWindow,
};

interface PortfolioOutcomesProps {
  portfolioOutcomes?: { icon: string; title: string }[];
}

export function PortfolioOutcomes({ portfolioOutcomes = defaultOutcomes }: PortfolioOutcomesProps) {
  if (!portfolioOutcomes || portfolioOutcomes.length === 0) return null;

  return (
    <section className="py-8">
      <FadeIn className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md mb-2">
          <Layers size={13} className="text-primary" />
          <span>Tangible Artifacts</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-display">
          លទ្ធផលរំពឹងទុក (ស្នាដៃជាក់ស្តែង {portfolioOutcomes.length} យ៉ាង)
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted">
          បញ្ចប់វគ្គនេះ អ្នកនឹងមានស្នាដៃជាក់ស្តែងទាំងនេះសម្រាប់ប្រើប្រាស់ និងដាក់ក្នុង Portfolio របស់អ្នក
        </p>
      </FadeIn>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioOutcomes.map((item, i) => {
          const Icon = icons[item.icon] || Layers;
          return (
            <FadeIn key={item.title} delay={i * 0.05}>
              <GlowCard className="h-full p-5 text-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground">
                    {item.title}
                  </span>
                </div>
              </GlowCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

