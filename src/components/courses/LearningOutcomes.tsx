import { CheckCircle2, Target } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { learningOutcomes as defaultOutcomes } from "@/lib/courses";

interface LearningOutcomesProps {
  outcomes?: string[];
}

export function LearningOutcomes({ outcomes = defaultOutcomes }: LearningOutcomesProps) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section className="py-8">
      <FadeIn>
        <div className="rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-surface-subtle/50 p-6 sm:p-8 backdrop-blur-xs">
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target size={16} />
            </span>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                អ្វីដែលអ្នកនឹងទទួលបានពីវគ្គនេះ (What you&apos;ll learn)
              </h2>
              <p className="text-xs text-muted">ជំនាញ និងសមត្ថភាពជាក់ស្តែងដែលអ្នកនឹងស្ទាត់ជំនាញក្រោយបញ្ចប់ការសិក្សា</p>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-surface/70 p-3.5 transition-colors hover:bg-surface border border-black/[0.04] dark:border-white/[0.05]"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={15} />
                </span>
                <span className="text-xs sm:text-sm font-medium leading-relaxed text-foreground-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

