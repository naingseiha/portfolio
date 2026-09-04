import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { featuredCourse } from "@/lib/courses";

export function CourseCard() {
  return (
    <FadeIn>
      <Link
        href={`/courses/${featuredCourse.slug}`}
        className="group flex flex-col gap-5 rounded-3xl bg-surface p-8 transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-center"
      >
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
          <Sparkles size={36} />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl text-foreground">{featuredCourse.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {featuredCourse.tagline}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {featuredCourse.durationHours} ម៉ោង
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen size={14} />
              {featuredCourse.chapterCount} ជំពូក
            </span>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90 sm:self-center">
          មើលលម្អិត
          <ArrowRight size={16} />
        </span>
      </Link>
    </FadeIn>
  );
}
