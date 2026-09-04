import Image from "next/image";
import { Award, BookOpen, Star, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/site-config";

export function InstructorSection() {
  return (
    <section className="py-10 border-t border-black/5 dark:border-white/5">
      <FadeIn>
        <div className="mb-6">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-display">
            គ្រូបង្រៀន (Instructor)
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            ដឹកនាំ និងបង្រៀនផ្ទាល់ដោយវិស្វករកម្មវិធីដែលមានបទពិសោធន៍ជាក់ស្តែង
          </p>
        </div>

        <div className="rounded-[28px] border border-black/[0.08] dark:border-white/[0.1] bg-surface-subtle/50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Instructor Avatar */}
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-surface shadow-md">
              <Image
                src="/images/profile.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Instructor Bio & Stats */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground sm:text-xl font-display">
                {siteConfig.name} (Seiha Naing)
              </h3>
              <p className="text-xs sm:text-sm font-medium text-primary">
                {siteConfig.role}
              </p>

              {/* Stats badges */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-foreground-secondary">
                <div className="flex items-center gap-1.5">
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  <span>4.9 ពិន្ទុវាយតម្លៃ (Instructor Rating)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={15} className="text-primary" />
                  <span>1,200+ សិស្សបានបញ្ចប់ការសិក្សា</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={15} className="text-primary" />
                  <span>4 វគ្គសិក្សាស្នូល</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award size={15} className="text-primary" />
                  <span>8+ ឆ្នាំបទពិសោធន៍ Software</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
                វិស្វករកម្មវិធីជាន់ខ្ពស់ដែលមានបទពិសោធន៍យូរឆ្នាំក្នុងការអភិវឌ្ឍប្រព័ន្ធ Enterprise, Modern Web, Mobile Apps និងដំណោះស្រាយ AI។ មានចំណង់ចំណូលចិត្តក្នុងការចែករំលែក និងបណ្តុះបណ្តាលយុវជនជំនាន់ក្រោយ និងលោកគ្រូអ្នកគ្រូឲ្យចេះប្រើប្រាស់បច្ចេកវិទ្យាទំនើបៗប្រកបដោយប្រសិទ្ធភាពខ្ពស់។
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
