import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Clock, PlayCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShimmerButton } from "@/components/motion/ShimmerButton";
import { LessonContent } from "@/components/courses/LessonContent";
import { allCourses, getChapterBySlug } from "@/lib/courses";
import { getLessonMarkdown } from "@/lib/lessons";

export function generateStaticParams() {
  return allCourses.flatMap((course) =>
    course.curriculum
      .filter((chapter) => chapter.hasFullLesson)
      .map((chapter) => ({ slug: course.slug, chapterSlug: chapter.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; chapterSlug: string }>;
}): Promise<Metadata> {
  const { slug, chapterSlug } = await params;
  const found = getChapterBySlug(slug, chapterSlug);
  if (!found) return {};
  return {
    title: `${found.chapter.title} | ${found.course.title}`,
    description: found.chapter.summary,
  };
}

export default async function ChapterLessonPage({
  params,
}: {
  params: Promise<{ slug: string; chapterSlug: string }>;
}) {
  const { slug, chapterSlug } = await params;
  const found = getChapterBySlug(slug, chapterSlug);
  if (!found || !found.chapter.hasFullLesson) notFound();

  const { course, chapter, index } = found;
  const markdown = getLessonMarkdown(course.slug, chapter.slug);
  if (!markdown) notFound();

  const prevChapter = index > 0 ? course.curriculum[index - 1] : null;
  const nextChapter = index < course.curriculum.length - 1 ? course.curriculum[index + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Lesson Header */}
      <header className="border-b border-black/[0.06] dark:border-white/[0.08] bg-surface-subtle/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-10">
          <FadeIn className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted">
            <Link
              href={`/courses/${course.slug}`}
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <ArrowLeft size={13} />
              <span>{course.title}</span>
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground-secondary">ជំពូក {index + 1}</span>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-foreground leading-[1.3]">
              {chapter.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-foreground-secondary">
            <p>{chapter.summary}</p>
          </FadeIn>

          <FadeIn
            delay={0.15}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/[0.06] dark:border-white/[0.08] pt-4 text-xs text-muted"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-primary" />
              {chapter.hours} ម៉ោង
            </span>
            <span className="flex items-center gap-1.5">
              <PlayCircle size={13} className="text-primary" />
              {chapter.lectures} មេរៀន
            </span>
          </FadeIn>
        </div>
      </header>

      {/* Lesson Body */}
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-12">
        <FadeIn>
          <LessonContent markdown={markdown} />
        </FadeIn>

        {/* Prev / Next Navigation */}
        <nav className="mt-12 grid gap-3 sm:grid-cols-2">
          {prevChapter ? (
            <Link
              href={
                prevChapter.hasFullLesson
                  ? `/courses/${course.slug}/chapters/${prevChapter.slug}`
                  : `/courses/${course.slug}#curriculum`
              }
              className="group flex flex-col gap-1 rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-surface p-4 transition-colors hover:border-primary/30"
            >
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
                ជំពូកមុន
              </span>
              <span className="text-sm font-bold text-foreground line-clamp-1">{prevChapter.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextChapter ? (
            <Link
              href={
                nextChapter.hasFullLesson
                  ? `/courses/${course.slug}/chapters/${nextChapter.slug}`
                  : `/courses/${course.slug}#curriculum`
              }
              className="group flex flex-col gap-1 rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-surface p-4 text-right transition-colors hover:border-primary/30 sm:items-end"
            >
              <span className="flex items-center gap-1.5 text-xs font-semibold text-muted">
                ជំពូកបន្ទាប់
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="text-sm font-bold text-foreground line-clamp-1">{nextChapter.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* Enrollment CTA */}
        <FadeIn className="mt-10 rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-surface-subtle/50 p-6 sm:p-8 text-center">
          <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen size={18} />
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            ចង់រៀនបន្តគ្រប់ជំពូក និងទទួលវិញ្ញាបនបត្រ?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-muted">
            ចុះឈ្មោះចូលរៀនវគ្គ &ldquo;{course.title}&rdquo; ដើម្បីទទួលបានមេរៀនពេញលេញទាំង {course.chapterCount} ជំពូក
          </p>
          <ShimmerButton
            href={`/courses/${course.slug}#enrollment`}
            variant="primary"
            className="mt-5 mx-auto py-3 text-xs sm:text-sm font-bold shadow-md shadow-primary/20"
          >
            <span>ចុះឈ្មោះចូលរៀនឥឡូវនេះ</span>
            <ArrowRight size={16} />
          </ShimmerButton>
        </FadeIn>
      </main>
    </div>
  );
}
