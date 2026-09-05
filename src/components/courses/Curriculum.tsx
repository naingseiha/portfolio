"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronDown, Clock, PlayCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { Chapter, curriculum as defaultCurriculum } from "@/lib/courses";

interface CurriculumProps {
  chapters?: Chapter[];
  courseSlug?: string;
}

export function Curriculum({ chapters = defaultCurriculum, courseSlug = "ai-for-teachers" }: CurriculumProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  if (!chapters || chapters.length === 0) return null;

  const totalHours = chapters.reduce((sum, c) => sum + c.hours, 0);
  const totalLectures = chapters.reduce((sum, c) => sum + (c.lectures || 3), 0);
  const allExpanded = openIndices.length === chapters.length;

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndices([]);
    } else {
      setOpenIndices(chapters.map((_, i) => i));
    }
  };

  const toggleChapter = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="curriculum" className="py-10 scroll-mt-24">
      <FadeIn className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md">
            <BookOpen size={13} className="text-primary" />
            <span>Curriculum Breakdown</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-display">
            មាតិកាវគ្គសិក្សាលម្អិត
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            {chapters.length} ជំពូកស្នូល · {totalLectures} មេរៀនជាក់ស្តែង · រយៈពេលសរុប {totalHours} ម៉ោង
          </p>
        </div>

        <button
          type="button"
          onClick={toggleAll}
          className="self-start rounded-full border border-black/10 dark:border-white/10 bg-surface px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-surface-subtle"
        >
          {allExpanded ? "បង្រួមទាំងអស់ (Collapse All)" : "បើកទាំងអស់ (Expand All)"}
        </button>
      </FadeIn>

      <div className="flex flex-col divide-y divide-black/5 dark:divide-white/5 rounded-[24px] border border-black/[0.08] dark:border-white/[0.1] bg-surface-subtle/40 overflow-hidden">
        {chapters.map((chapter, i) => {
          const isOpen = openIndices.includes(i);
          return (
            <div key={chapter.title} className="transition-colors hover:bg-surface/50">
              <button
                type="button"
                onClick={() => toggleChapter(i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3.5 sm:gap-4 p-4 sm:p-5 text-left transition-colors"
              >
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-primary font-mono">
                      ជំពូក {i + 1}
                    </span>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <PlayCircle size={12} className="text-primary" />
                      {chapter.lectures || 3} មេរៀន
                    </span>
                  </div>
                  <span className="mt-1 block text-base sm:text-lg font-bold font-display text-foreground truncate sm:whitespace-normal tracking-wide">
                    {chapter.title}
                  </span>
                </div>

                <div className="hidden shrink-0 items-center gap-1.5 text-xs text-muted sm:flex">
                  <Clock size={12} className="text-primary" />
                  <span>{chapter.hours} ម៉ោង</span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-black/5 dark:border-white/5 bg-surface/70 px-4 py-4 sm:px-8 sm:py-5"
                  >
                    <p className="text-xs sm:text-sm leading-relaxed text-muted">
                      {chapter.summary}
                    </p>

                    {chapter.activities && chapter.activities.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                          <BookOpen size={12} className="text-primary" />
                          សកម្មភាព &amp; ការអនុវត្តជាក់ស្តែង
                        </p>
                        <ul className="mt-2 flex flex-col gap-2">
                          {chapter.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex items-start gap-2.5 text-xs text-foreground-secondary leading-relaxed"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {chapter.hasFullLesson && (
                      <Link
                        href={`/courses/${courseSlug}/chapters/${chapter.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary transition-colors hover:text-primary-hover"
                      >
                        <span>មើលមេរៀនពេញលេញ</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

