import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { featuredCourse } from "@/lib/courses";

export function FeaturedCourse() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn className="mb-10 text-center">
        <p className="mb-1.5 text-xs font-semibold tracking-[0.15em] text-primary uppercase">
          My Teaching
        </p>
        <h2 className="text-2xl text-foreground sm:text-3xl">
          វគ្គបណ្តុះបណ្តាលដែលកំពុងបង្រៀន
        </h2>
      </FadeIn>

      <FadeIn>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80">
          <div className="grid gap-8 p-8 sm:p-12 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div className="flex flex-col items-start gap-4 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium">
                <Sparkles size={14} />
                វគ្គពេញនិយម
              </span>
              <h3
                className="text-2xl sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {featuredCourse.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/90">
                {featuredCourse.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/90">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} />
                  {featuredCourse.durationHours} ម៉ោង
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen size={16} />
                  {featuredCourse.chapterCount} ជំពូក
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <TrendingUp size={16} />
                  {featuredCourse.levelRange}
                </span>
              </div>

              <Link
                href={`/courses/${featuredCourse.slug}`}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                មើលព័ត៌មានលម្អិត
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm sm:h-56 sm:w-56">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/95 text-primary shadow-inner sm:h-44 sm:w-44">
                <Sparkles size={64} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
