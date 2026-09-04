import {
  Bot,
  Code2,
  Cpu,
  MessageCircle,
  Rocket,
  Search,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { aiTools as defaultAiTools } from "@/lib/courses";

const icons = [Cpu, Bot, Code2, MessageCircle, Search, Zap, Rocket];

interface AiToolsProps {
  aiTools?: { name: string; role: string }[];
}

export function AiTools({ aiTools = defaultAiTools }: AiToolsProps) {
  if (!aiTools || aiTools.length === 0) return null;

  return (
    <section className="py-8">
      <FadeIn className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md mb-2">
          <Cpu size={13} className="text-primary" />
          <span>AI &amp; Tech Stack</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-display">
          បច្ចេកវិទ្យា &amp; ឧបករណ៍ AI ដែលនឹងរៀនក្នុងវគ្គ
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted">
          ឧបករណ៍ឆ្លាតវៃឈានមុខគេលើពិភពលោក ត្រូវបានសម្រិតសម្រាំងសម្រាប់វគ្គនេះ
        </p>
      </FadeIn>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {aiTools.map((tool, i) => {
          const Icon = icons[i % icons.length];
          return (
            <FadeIn key={tool.name} delay={i * 0.04}>
              <GlowCard className="h-full p-4">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-2xs">
                    <Icon size={18} />
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-foreground">
                      {tool.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                      {tool.role}
                    </span>
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

