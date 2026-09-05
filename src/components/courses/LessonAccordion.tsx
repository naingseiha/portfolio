"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown, Clock } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { LessonContent } from "@/components/courses/LessonContent";
import type { LessonSection } from "@/lib/lessons";

interface LessonAccordionProps {
  sections: LessonSection[];
}

export function LessonAccordion({ sections }: LessonAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(sections[0] ? [sections[0].id] : []);

  if (!sections || sections.length === 0) return null;

  const allExpanded = openIds.length === sections.length;

  const toggleAll = () => {
    setOpenIds(allExpanded ? [] : sections.map((s) => s.id));
  };

  const toggleSection = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-muted">
          {sections.length} ផ្នែក · ចុចលើផ្នែកណាមួយដើម្បីមើលលម្អិត
        </p>
        <button
          type="button"
          onClick={toggleAll}
          className="shrink-0 rounded-full border border-black/10 dark:border-white/10 bg-surface px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-surface-subtle"
        >
          {allExpanded ? "បង្រួមទាំងអស់" : "បើកទាំងអស់"}
        </button>
      </div>

      <div className="flex flex-col gap-3.5">
        {sections.map((section, i) => {
          const isOpen = openIds.includes(section.id);
          return (
            <FadeIn key={section.id} delay={Math.min(i * 0.04, 0.2)}>
              <GlowCard>
                <div id={section.id} className="scroll-mt-24">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3.5 sm:gap-4 p-4 sm:p-5 text-left"
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
                        <div className="px-4 pb-5 pt-4 sm:px-8 sm:pb-6">
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
