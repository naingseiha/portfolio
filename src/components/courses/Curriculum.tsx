"use client";

import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { curriculum } from "@/lib/courses";

export function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <FadeIn className="mb-10 text-center">
        <h2 className="text-3xl text-foreground sm:text-4xl">
          មាតិកាវគ្គសិក្សា
        </h2>
        <p className="mt-3 text-muted">
          {curriculum.length} ជំពូក · សរុប{" "}
          {curriculum.reduce((sum, c) => sum + c.hours, 0)} ម៉ោង
        </p>
      </FadeIn>

      <div className="flex flex-col gap-3">
        {curriculum.map((chapter, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeIn
              key={chapter.title}
              delay={Math.min(i * 0.04, 0.3)}
              className="overflow-hidden rounded-2xl bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <span className="flex-1">
                  <span className="block text-base font-medium text-foreground">
                    {chapter.title}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                    <Clock size={12} />
                    {chapter.hours} ម៉ោង
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-black/5 px-5 py-4 pl-[3.75rem]">
                  <p className="text-sm leading-relaxed text-muted">
                    {chapter.summary}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-foreground/80">
                    សកម្មភាពអនុវត្ត
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {chapter.activities.map((activity) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
