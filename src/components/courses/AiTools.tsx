import {
  Bot,
  Cpu,
  MessageCircle,
  Rocket,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { aiTools } from "@/lib/courses";

const icons = [Sparkles, Bot, MessageCircle, Search, Cpu, Zap, Rocket];

export function AiTools() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn className="mb-10 text-center">
          <h2 className="text-3xl text-foreground sm:text-4xl">
            ឧបករណ៍ AI ប្រើប្រាស់ក្នុងវគ្គ
          </h2>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn
                key={tool.name}
                delay={i * 0.06}
                className="flex items-start gap-4 rounded-2xl bg-background p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">
                    {tool.name}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {tool.role}
                  </span>
                </span>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
