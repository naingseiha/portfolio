import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, ListTree, PlayCircle, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShimmerButton } from "@/components/motion/ShimmerButton";
import { LessonContent } from "@/components/courses/LessonContent";
import { LessonAccordion } from "@/components/courses/LessonAccordion";
import { allCourses, getChapterBySlug } from "@/lib/courses";
import { getLessonMarkdown, parseLessonSections } from "@/lib/lessons";

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

  const { intro, sections } = parseLessonSections(markdown);

  const prevChapter = index > 0 ? course.curriculum[index - 1] : null;
  const nextChapter = index < course.curriculum.length - 1 ? course.curriculum[index + 1] : null;
  const hasAiChapterHero = course.slug === "ai-for-teachers" && chapter.slug === "ai-prompt-engineering-basics";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden border-b border-white/10 bg-[#06142d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.24),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.22),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <FadeIn className="mb-5 flex flex-wrap items-center gap-2 text-xs text-sky-100/70">
              <Link
                href={`/courses/${course.slug}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <ArrowLeft size={13} />
                <span>{course.title}</span>
              </Link>
              <span>/</span>
              <span className="font-medium text-sky-100">ជំពូក {index + 1}</span>
            </FadeIn>

          <FadeIn delay={0.05}>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[11px] font-bold text-sky-200">
              <Sparkles size={12} /> មេរៀនអនុវត្ត · Prompt អាច Copy បាន
            </span>
            <h1 className="font-display text-3xl font-bold leading-[1.3] tracking-wide text-white sm:text-4xl md:text-5xl">
              {chapter.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            <p>{chapter.summary}</p>
          </FadeIn>

          <FadeIn
            delay={0.15}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-xs text-slate-300"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-sky-300" />
              {chapter.hours} ម៉ោង
            </span>
            <span className="flex items-center gap-1.5">
              <PlayCircle size={13} className="text-sky-300" />
              {chapter.lectures} មេរៀន
            </span>
          </FadeIn>
          </div>

          <FadeIn delay={0.12} className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-2xl shadow-sky-950/50">
              <Image
                src={hasAiChapterHero ? "/images/courses/ai-for-teachers/chapter-1-ai-copilot.png" : course.image}
                alt={hasAiChapterHero ? "គ្រូបង្រៀនប្រើ AI ជាជំនួយការរៀបចំមេរៀន" : chapter.title}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </FadeIn>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[250px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[24px] border border-black/[0.06] bg-surface p-4 shadow-sm dark:border-white/[0.08]">
              <div className="flex items-center gap-2 border-b border-black/[0.06] pb-3 text-xs font-extrabold text-foreground dark:border-white/[0.08]">
                <ListTree size={16} className="text-primary" /> មាតិកាក្នុងជំពូក
              </div>
              <nav className="mt-3 flex flex-col gap-1" aria-label="មាតិកាក្នុងជំពូក">
                <a href="#chapter-overview" className="rounded-xl px-3 py-2 text-xs font-semibold text-foreground-secondary transition hover:bg-primary/5 hover:text-primary">
                  ទិដ្ឋភាពទូទៅ
                </a>
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="flex gap-2 rounded-xl px-3 py-2 text-xs leading-5 text-foreground-secondary transition hover:bg-primary/5 hover:text-primary">
                    <span className="font-mono font-black text-primary">{section.number ?? "ឯកសារ"}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-4 rounded-2xl bg-emerald-500/[0.07] p-3 text-[11px] leading-5 text-emerald-800 dark:text-emerald-300">
                <p className="flex items-center gap-1.5 font-bold"><CheckCircle2 size={13} /> រៀនដោយអនុវត្ត</p>
                <p className="mt-1 opacity-80">Copy prompt → កែពាក្យក្នុង [ ] → សាកល្បង → ពិនិត្យលទ្ធផល</p>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
        {intro && (
          <div id="chapter-overview" className="scroll-mt-24">
            <FadeIn className="mb-8 rounded-[28px] border border-black/[0.06] bg-surface p-5 shadow-sm dark:border-white/[0.08] sm:p-8">
              <LessonContent markdown={intro} />
            </FadeIn>
          </div>
        )}

        <LessonAccordion sections={sections} />

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
          </div>
        </div>
      </main>
    </div>
  );
}
