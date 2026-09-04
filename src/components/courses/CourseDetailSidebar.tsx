"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Download,
  FileCode,
  Laptop,
  PlayCircle,
  Share2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Course } from "@/lib/courses";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

interface CourseDetailSidebarProps {
  course: Course;
}

export function CourseDetailSidebar({ course }: CourseDetailSidebarProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: course.title,
          text: course.tagline,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled share
    }
  };

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-surface/80 p-5 sm:p-7 lg:p-6 shadow-xl shadow-black/[0.03] dark:shadow-black/20 backdrop-blur-md">
        {/* Tablet split grid: on sm screens media is left, price & CTA right; on mobile & lg vertical */}
        <div className="sm:grid sm:grid-cols-2 sm:gap-6 lg:block">
          {/* Course Preview Media Box with High-Res Course Cover */}
          <div className="relative mb-5 sm:mb-0 lg:mb-6 aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 border border-black/5 dark:border-white/10 group cursor-pointer shadow-md">
            {course.image && (
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="relative flex flex-col items-center gap-2 text-white">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-transform group-hover:scale-110 shadow-xl border border-white/40">
                <PlayCircle size={28} className="text-white fill-white/20 sm:w-8 sm:h-8" />
              </span>
              <span className="text-xs font-semibold tracking-wide drop-shadow-md">
                មើលវីដេអូសង្ខេប (Preview)
              </span>
            </div>
          </div>

          <div>
            {/* Pricing Block */}
            <div className="mb-5 lg:mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">
                  {course.price}
                </span>
                {course.originalPrice && (
                  <span className="text-xs sm:text-sm font-medium text-muted line-through">
                    {course.originalPrice}
                  </span>
                )}
                {course.badge && (
                  <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                    {course.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-muted">
                ទទួលបានសិទ្ធិចូលរៀនភ្លាមៗក្រោយចុះឈ្មោះ
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mb-5 lg:mb-6 flex flex-col gap-2.5">
              <ShimmerButton
                href="#enrollment"
                variant="primary"
                className="w-full justify-center py-3 sm:py-3.5 text-xs sm:text-sm font-bold shadow-md shadow-primary/20"
              >
                <span>ចុះឈ្មោះចូលរៀនឥឡូវនេះ (Enroll Now)</span>
                <ArrowRight size={16} />
              </ShimmerButton>

              <button
                type="button"
                onClick={handleShare}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-surface-subtle/50 py-2.5 text-xs font-semibold text-foreground-secondary transition-colors hover:bg-surface-subtle hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">បានចម្លង Link រួចរាល់!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={14} />
                    <span>ចែករំលែកវគ្គសិក្សា (Share)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Trust & Guarantee */}
        <div className="my-5 lg:my-6 flex items-center justify-center gap-2 border-y border-black/5 dark:border-white/5 py-3 text-center">
          <ShieldCheck size={16} className="text-primary shrink-0" />
          <span className="text-xs font-medium text-muted">
            ធានាគុណភាពបង្រៀន &amp; ការអនុវត្តជាក់ស្តែង 100%
          </span>
        </div>

        {/* Udemy "This course includes" List */}
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
            វគ្គសិក្សានេះរួមបញ្ចូល (Course Includes)
          </h3>
          <ul className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-2.5 text-xs text-foreground-secondary">
            <li className="flex items-center gap-2.5">
              <Clock size={15} className="text-primary shrink-0" />
              <span>{course.durationHours} ម៉ោងវីដេអូបណ្តុះបណ្តាលគុណភាពខ្ពស់</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PlayCircle size={15} className="text-primary shrink-0" />
              <span>{course.lectureCount} មេរៀន និងលំហាត់ជាក់ស្តែង</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Download size={15} className="text-primary shrink-0" />
              <span>ស្លាយ &amp; ឯកសារទាញយកសម្រាប់អនុវត្ត</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FileCode size={15} className="text-primary shrink-0" />
              <span>Source Code និងគំរូ Project ពេញលេញ</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Laptop size={15} className="text-primary shrink-0" />
              <span>ចូលរៀនបានលើទូរស័ព្ទ កុំព្យូទ័រ និង iPad</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Users size={15} className="text-primary shrink-0" />
              <span>ក្រុម Telegram សហគមន៍សិស្ស &amp; ការប្រឹក្សា</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Award size={15} className="text-primary shrink-0" />
              <span>វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា (Certificate)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Floating Bottom Sticky Action Bar (Hidden on Desktop) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-black/10 dark:border-white/10 bg-surface/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6 lg:hidden">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground font-display">
              {course.price}
            </span>
            {course.originalPrice && (
              <span className="text-xs font-medium text-muted line-through">
                {course.originalPrice}
              </span>
            )}
          </div>
          <span className="text-[11px] text-muted block">
            {course.badge || "ចូលរៀនបានមួយជីវិត"}
          </span>
        </div>

        <a
          href="#enrollment"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all"
        >
          <span>ចុះឈ្មោះឥឡូវនេះ</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </aside>
  );
}
