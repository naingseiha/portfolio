import Image from "next/image";
import { ArrowRight, Award, BookOpen, Clock, GraduationCap, Layers, TrendingUp, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { ShimmerButton } from "@/components/motion/ShimmerButton";
import { featuredCourse } from "@/lib/courses";

export function FeaturedCourse() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      {/* Section Header with Koulen Display Font */}
      <FadeIn className="mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50/60 px-3.5 py-1 text-xs font-semibold text-indigo-700">
          <GraduationCap size={14} className="text-indigo-600" />
          <span>Empowering Cambodian Educators</span>
        </div>
        <h2 className="mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-foreground">
          វគ្គបណ្តុះបណ្តាល AI សម្រាប់គ្រូបង្រៀន
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
          កម្មវិធីសិក្សាជាក់ស្តែងដែលបង្រៀនគ្រូបង្រៀនឱ្យចេះប្រើប្រាស់ឧបករណ៍ AI ដើម្បីបង្កើនប្រសិទ្ធភាពការងារ។
        </p>
      </FadeIn>

      <FadeIn>
        <GlowCard className="overflow-hidden !rounded-[28px] sm:!rounded-[32px] border border-primary/20 bg-gradient-to-br from-surface via-primary-soft/40 to-indigo-50/40">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            {/* Left Column */}
            <div className="flex flex-col items-start gap-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-xs">
                  <Award size={13} />
                  វគ្គពិសេសប្រចាំឆ្នាំ
                </span>
                <span className="rounded-full border border-black/8 bg-surface px-3 py-1 text-xs font-medium text-foreground-secondary">
                  32 ម៉ោងបណ្តុះបណ្តាល
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-normal text-foreground leading-snug">
                {featuredCourse.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                {featuredCourse.tagline}
              </p>

              {/* Course Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-lg border-y border-black/5 py-4 my-1">
                <div className="flex items-center gap-2 text-xs text-foreground-secondary">
                  <Clock size={15} className="text-primary shrink-0" />
                  <span>{featuredCourse.durationHours} ម៉ោង សិក្សាពេញលេញ</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground-secondary">
                  <BookOpen size={15} className="text-primary shrink-0" />
                  <span>{featuredCourse.chapterCount} ជំពូក និងសកម្មភាព</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground-secondary">
                  <TrendingUp size={15} className="text-primary shrink-0" />
                  <span>{featuredCourse.levelRange}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground-secondary">
                  <Users size={15} className="text-primary shrink-0" />
                  <span>{featuredCourse.audience}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <ShimmerButton href={`/courses/${featuredCourse.slug}`} variant="primary" className="!px-5 !py-2.5 !text-xs">
                  <span>មើលមាតិកាវគ្គលម្អិត</span>
                  <ArrowRight size={14} />
                </ShimmerButton>
                <ShimmerButton href={`/courses/${featuredCourse.slug}#enrollment`} variant="secondary" className="!px-5 !py-2.5 !text-xs">
                  <span>ចុះឈ្មោះចូលរៀន</span>
                </ShimmerButton>
              </div>
            </div>

            {/* Right Column: Visual Showcase with Real Course Cover */}
            <div className="relative mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-black/8 dark:border-white/10 bg-surface/95 shadow-xl shadow-primary/5 backdrop-blur-xl">
              {/* Image banner */}
              <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-900">
                <Image
                  src={featuredCourse.image}
                  alt={featuredCourse.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                  Masterclass Preview
                </span>
              </div>

              {/* Course Outcomes Checklist */}
              <div className="p-5 flex flex-col gap-2.5">
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-2 text-xs font-bold text-foreground">
                  <span className="flex items-center gap-1.5 text-primary">
                    <Layers size={14} />
                    ជំនាញដែលទទួលបាន
                  </span>
                  <span className="text-[11px] font-normal text-muted">6 ប្រភេទ Portfolio</span>
                </div>

                <div className="space-y-1.5 text-xs text-foreground-secondary">
                  <div className="flex items-center gap-2 rounded-xl bg-primary-soft/50 p-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-white">1</span>
                    <span className="truncate">Gemini + Google Slides បង្កើតស្លាយស្វ័យប្រវត្តិ</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-indigo-50/50 p-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-[10px] font-bold text-white">2</span>
                    <span className="truncate">រៀបចំកិច្ចតែងការ &amp; វិញ្ញាសាដោយ Prompt</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-surface-subtle p-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-800 text-[10px] font-bold text-white">3</span>
                    <span className="truncate">បង្កើត Gemini Gem ផ្ទាល់ខ្លួនសម្រាប់កិច្ចការ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </FadeIn>
    </section>
  );
}

