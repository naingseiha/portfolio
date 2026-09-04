"use client";

import { useMemo, useState } from "react";
import { Award, Clock, GraduationCap, Search, Users, X } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { CourseCard } from "@/components/courses/CourseCard";
import { allCourses, courseCategories } from "@/lib/courses";

export function CoursesCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.tagline.toLowerCase().includes(query) ||
        course.categoryKh.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 md:py-28">
      {/* Header with Apple & Udemy Elegance */}
      <FadeIn className="mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-4 py-1.5 text-xs font-semibold text-foreground-secondary backdrop-blur-md mb-3">
          <GraduationCap size={14} className="text-primary" />
          <span>Professional Engineering &amp; AI Academy</span>
        </div>
        <h1 className="font-display text-4xl font-bold tracking-wide text-foreground sm:text-5xl md:text-6xl">
          វគ្គបណ្តុះបណ្តាលជំនាញ
        </h1>
        <p className="font-accent text-base text-primary/80 mt-2">
          កម្មវិធីសិក្សាជាក់ស្តែងសម្រាប់លើកកម្ពស់សមត្ថភាព និងការងារអនាគត
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
          រៀនសូត្រពីវិស្វករដែលមានបទពិសោធន៍ជាក់ស្តែង ជាមួយមាតិកាកម្រិត Enterprise និងការអនុវត្តគម្រោងពិត។
        </p>
      </FadeIn>

      {/* Search & Filter Controls Toolbar */}
      <FadeIn delay={0.1} className="mb-10 space-y-5">
        {/* Search Bar */}
        <div className="relative mx-auto max-w-2xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ស្វែងរកវគ្គសិក្សា (ឧ. AI, Next.js, React Native, Vibe Coding...)"
            className="w-full rounded-2xl border border-black/10 bg-surface/90 py-3.5 pl-11 pr-10 text-sm text-foreground shadow-sm backdrop-blur-md transition-all placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted hover:bg-black/5 hover:text-foreground"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category Pills & Results Counter */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {courseCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#1d1d1f] text-white shadow-xs"
                      : "border border-black/5 bg-surface/80 text-foreground-secondary hover:border-black/15 hover:bg-surface"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-muted">
            រកឃើញ <strong className="text-foreground">{filteredCourses.length}</strong> វគ្គសិក្សា
          </span>
        </div>
      </FadeIn>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, idx) => (
            <FadeIn key={course.slug} delay={idx * 0.06}>
              <CourseCard course={course} />
            </FadeIn>
          ))}
        </div>
      ) : (
        /* Empty State */
        <FadeIn className="mx-auto max-w-md rounded-3xl border border-black/5 bg-surface-subtle/50 p-12 text-center">
          <Search size={32} className="mx-auto text-muted mb-3" />
          <h3 className="text-lg font-bold text-foreground">រកមិនឃើញវគ្គសិក្សាដែលត្រូវនឹងពាក្យស្វែងរក</h3>
          <p className="mt-1 text-xs text-muted">
            សូមសាកល្បងស្វែងរកដោយពាក្យគន្លឹះផ្សេង ឬប្តូរប្រភេទ Category។
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-primary-hover"
          >
            កំណត់ការស្វែងរកឡើងវិញ
          </button>
        </FadeIn>
      )}

      {/* Udemy-Style Trust & Value Banner */}
      <FadeIn className="mt-16 sm:mt-24">
        <div className="grid gap-6 rounded-[32px] border border-black/[0.06] bg-surface/80 p-6 sm:p-10 shadow-xs backdrop-blur-md sm:grid-cols-3 text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <span className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-foreground">
              <Award size={18} className="text-primary" />
              <span>វិញ្ញាបនបត្រផ្លូវការ</span>
            </span>
            <p className="text-xs leading-relaxed text-muted">
              ទទួលបានវិញ្ញាបនបត្របញ្ជាក់ការសិក្សាពេលបញ្ចប់គម្រោង និងមេរៀនទាំងអស់។
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-foreground">
              <Clock size={18} className="text-primary" />
              <span>សិក្សាបានគ្រប់ពេលវេលា</span>
            </span>
            <p className="text-xs leading-relaxed text-muted">
              អាចចូលរៀនឡើងវិញបានគ្រប់ពេល ជាមួយឯកសារ និង Codebase updates ថ្មីៗជានិច្ច។
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-foreground">
              <Users size={18} className="text-primary" />
              <span>ការគាំទ្រផ្ទាល់ពីគ្រូ</span>
            </span>
            <p className="text-xs leading-relaxed text-muted">
              សហគមន៍សួរសំណួរ និងពិភាក្សាផ្ទាល់ជាមួយគ្រូឧទ្ទេស និងមិត្តរួមថ្នាក់។
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
