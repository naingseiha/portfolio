import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { learningOutcomes } from "@/lib/courses";

export function LearningOutcomes() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <FadeIn className="mb-10 text-center">
        <h2 className="text-3xl text-foreground sm:text-4xl">
          គោលដៅសិក្សា
        </h2>
        <p className="mt-3 text-muted">បញ្ចប់វគ្គនេះ អ្នកនឹងអាច...</p>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2">
        {learningOutcomes.map((item, i) => (
          <FadeIn
            key={item}
            delay={i * 0.05}
            className="flex items-start gap-3 rounded-2xl bg-surface p-4"
          >
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
            <span className="text-sm leading-relaxed text-foreground/90">
              {item}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
