import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <FadeIn className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-foreground sm:text-3xl">អំពីខ្ញុំ</h2>
        <p className="max-w-xl text-base leading-relaxed text-muted">
          អតីតគ្រូ ICT ដែលក្លាយជា Full-Stack Developer — ឥឡូវនេះរួមបញ្ចូល
          បទពិសោធន៍ទាំងពីរ ដើម្បីជួយគ្រូបង្រៀនប្រើប្រាស់ AI។
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          អានបន្ថែមអំពីខ្ញុំ
          <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </section>
  );
}
