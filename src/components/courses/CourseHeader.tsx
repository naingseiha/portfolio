import Link from "next/link";
import { ArrowRight, BookOpen, Clock, TrendingUp, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { featuredCourse } from "@/lib/courses";

export function CourseHeader() {
  return (
    <section className="bg-gradient-to-b from-primary-soft/60 to-background">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <FadeIn className="flex flex-col items-center gap-5">
          <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
            វគ្គបណ្តុះបណ្តាល
          </span>

          <h1 className="text-4xl text-foreground sm:text-5xl">
            {featuredCourse.title}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {featuredCourse.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2">
              <Clock size={16} className="text-primary" />
              {featuredCourse.durationHours} ម៉ោង
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2">
              <BookOpen size={16} className="text-primary" />
              {featuredCourse.chapterCount} ជំពូក
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2">
              <TrendingUp size={16} className="text-primary" />
              {featuredCourse.levelRange}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2">
              <Users size={16} className="text-primary" />
              {featuredCourse.audience}
            </span>
          </div>

          <Link
            href="#enrollment"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            ចុះឈ្មោះឥឡូវនេះ
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
