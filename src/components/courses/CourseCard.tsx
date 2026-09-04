import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Clock,
  Code2,
  GraduationCap,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { GlowCard } from "@/components/motion/GlowCard";
import type { Course } from "@/lib/courses";

const iconMap = {
  "graduation-cap": GraduationCap,
  code: Code2,
  smartphone: Smartphone,
  bot: Bot,
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.iconName] || GraduationCap;

  return (
    <GlowCard className="group h-full !rounded-[28px] border border-black/[0.06] dark:border-white/[0.08] transition-all hover:-translate-y-1 hover:shadow-xl overflow-hidden">
      <Link href={`/courses/${course.slug}`} className="flex h-full flex-col justify-between">
        <div>
          {/* Top Banner / Card Header with Course Cover Image */}
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-[28px] bg-slate-900">
            {course.image ? (
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div
                className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${course.gradient}`}
              >
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 text-foreground shadow-lg backdrop-blur-md"
                  style={{ color: course.accentColor }}
                >
                  <Icon size={32} />
                </div>
              </div>
            )}

            {/* Subtle Gradient Overlay for badge contrast */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            {/* Badge pill */}
            {course.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-black/60 border border-white/15 px-3 py-1 text-[11px] font-semibold text-white shadow-xs backdrop-blur-md">
                {course.badge}
              </span>
            )}

            {/* Category tag */}
            <span className="absolute bottom-3.5 left-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-medium text-white shadow-xs backdrop-blur-md">
              {course.categoryKh}
            </span>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <h3 className="font-heading text-xl font-bold tracking-normal text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-[#6e6e73] line-clamp-2">
              {course.tagline}
            </p>

            <p className="mt-3 text-xs font-medium text-muted">
              បង្រៀនដោយ៖ <span className="font-semibold text-foreground">ណាំង សីហា</span>
            </p>

            {/* Rating Row (Udemy Style) */}
            <div className="mt-3 flex items-center gap-1.5 text-xs">
              <span className="font-bold text-amber-500">{course.rating.toFixed(1)}</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-muted">({course.reviewsCount})</span>
              <span className="text-muted">·</span>
              <span className="flex items-center gap-1 text-[11px] text-muted">
                <Users size={12} />
                {course.studentsCount} សិស្ស
              </span>
            </div>

            {/* Metadata Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-black/5 pt-3.5 text-[11px] text-muted">
              <span className="flex items-center gap-1">
                <Clock size={12} className="text-primary" />
                {course.durationHours} ម៉ោង
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <BookOpen size={12} className="text-primary" />
                {course.chapterCount} ជំពូក
              </span>
              <span>·</span>
              <span>{course.levelRange}</span>
            </div>
          </div>
        </div>

        {/* Card Footer: Price & CTA */}
        <div className="flex items-center justify-between border-t border-black/5 bg-surface-subtle/40 p-5 px-6 rounded-b-[28px]">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">{course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-muted line-through">
                {course.originalPrice}
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all group-hover:gap-2">
            <span>ស្វែងយល់</span>
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </GlowCard>
  );
}

