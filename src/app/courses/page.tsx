import type { Metadata } from "next";
import { CourseCard } from "@/components/courses/CourseCard";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "វគ្គបណ្តុះបណ្តាល | ណាំង សីហា",
};

export default function CoursesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <FadeIn className="mb-12 text-center">
        <h1 className="text-4xl text-foreground sm:text-5xl">
          វគ្គបណ្តុះបណ្តាល
        </h1>
        <p className="mt-4 text-muted">
          វគ្គសិក្សាដែលរៀបចំឡើងសម្រាប់គ្រូបង្រៀន ដើម្បីអភិវឌ្ឍជំនាញឌីជីថល
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6">
        <CourseCard />

        <FadeIn
          delay={0.1}
          className="flex flex-col items-center gap-2 rounded-3xl border border-dashed border-border p-10 text-center text-muted"
        >
          <p className="font-medium text-foreground/70">វគ្គថ្មីៗ</p>
          <p className="text-sm">នឹងបន្ថែមឆាប់ៗនេះ</p>
        </FadeIn>
      </div>
    </section>
  );
}
