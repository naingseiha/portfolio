"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown, Clock, Play } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { LessonContent } from "@/components/courses/LessonContent";
import { LessonVisual } from "@/components/courses/LessonVisuals";
import type { LessonSection } from "@/lib/lessons";

interface LessonAccordionProps {
  sections: LessonSection[];
}

export function LessonAccordion({ sections }: LessonAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(sections.map((section) => section.id));

  if (!sections || sections.length === 0) return null;

  const allExpanded = openIds.length === sections.length;

  const toggleAll = () => {
    setOpenIds(allExpanded ? [] : sections.map((s) => s.id));
  };

  const toggleSection = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="min-w-0">
      <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-surface px-4 py-3 shadow-sm dark:border-white/[0.08]">
        <p className="flex items-center gap-2 text-xs sm:text-sm text-muted">
          <Play size={13} className="fill-primary text-primary" />
          {sections.length} ផ្នែក · បានបើកសម្រាប់អានជាបន្តបន្ទាប់
        </p>
        <button
          type="button"
          onClick={toggleAll}
          className="shrink-0 rounded-full border border-black/10 dark:border-white/10 bg-surface px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-surface-subtle"
        >
          {allExpanded ? "បង្រួមទាំងអស់" : "បើកទាំងអស់"}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section, i) => {
          const isOpen = openIds.includes(section.id);
          return (
            <FadeIn key={section.id} delay={Math.min(i * 0.04, 0.2)}>
              <GlowCard className="overflow-hidden rounded-[28px]">
                <div id={section.id} className="scroll-mt-24">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3.5 bg-gradient-to-r from-primary/[0.06] to-transparent p-4 text-left sm:gap-4 sm:p-6"
                  >
                    <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-mono text-xs sm:text-sm font-bold text-primary">
                      {section.number ?? <BookOpen size={16} />}
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="block text-sm sm:text-base font-bold leading-snug text-foreground">
                        {section.title}
                      </span>
                      {section.duration && (
                        <span className="mt-1 inline-flex items-center gap-1 text-[11px] sm:text-xs text-muted">
                          <Clock size={11} className="text-primary" />
                          {section.duration}
                        </span>
                      )}
                    </div>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-black/5 dark:border-white/5"
                      >
                        <div className="px-4 pb-7 pt-5 sm:px-8 sm:pb-9 sm:pt-7">
                          <LessonVisual sectionId={section.id} />
                          <LessonContent markdown={section.body} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </GlowCard>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
