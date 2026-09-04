import Link from "next/link";
import { ArrowLeft, Award, Globe, ShieldCheck, Star, Users } from "lucide-react";
import type { Course } from "@/lib/courses";
import { FadeIn } from "@/components/motion/FadeIn";

export function CourseHeader({ course }: { course: Course }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#141824] via-[#0f121a] to-[#0a0d14] text-white pt-8 pb-12 sm:pt-10 sm:pb-16">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-80 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: course.accentColor }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <FadeIn className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <Link href="/courses" className="flex items-center gap-1.5 transition-colors hover:text-white">
            <ArrowLeft size={13} />
            <span>វគ្គបណ្តុះបណ្តាលទាំងអស់</span>
          </Link>
          <span>/</span>
          <span className="text-slate-300 font-medium">{course.categoryKh}</span>
        </FadeIn>

        <div className="max-w-3xl">
          {/* Badge */}
          {course.badge && (
            <FadeIn className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 px-3 py-1 text-xs font-semibold text-amber-300">
                <Award size={13} />
                {course.badge}
              </span>
            </FadeIn>
          )}

          {/* Title with Koulen Display Font */}
          <FadeIn delay={0.05}>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-[1.3]">
              {course.title}
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.1}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
              {course.tagline}
            </p>
          </FadeIn>

          {/* Udemy Meta Info Strip */}
          <FadeIn delay={0.15} className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-5 text-xs text-slate-300 border-t border-white/10 pt-5">
            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-amber-400 text-sm">{course.rating.toFixed(1)}</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 underline cursor-pointer hover:text-white">
                ({course.reviewsCount} ការវាយតម្លៃ)
              </span>
            </div>

            {/* Students count */}
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-primary" />
              <span>{course.studentsCount} សិក្ខាកាមបានចូលរៀន</span>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-1.5">
              <span>បង្កើតដោយ៖</span>
              <span className="font-semibold text-white underline cursor-pointer">ណាំង សីហា</span>
            </div>

            {/* Updates & Language */}
            <div className="flex flex-wrap items-center gap-3 text-slate-400 w-full sm:w-auto">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                ធ្វើបច្ចុប្បន្នភាព៖ {course.updatedDate}
              </span>
              <span className="flex items-center gap-1">
                <Globe size={14} />
                {course.language}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

