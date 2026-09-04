import { ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

export function AboutTeaser() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <FadeIn>
        <GlowCard className="!rounded-[28px] sm:!rounded-[32px] border border-black/[0.06] p-6 sm:p-10 md:p-14 text-center bg-gradient-to-b from-surface via-surface to-surface-subtle/40">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs mb-4">
            <User size={22} />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-wide text-foreground">
            ដំណើរ និងទស្សនវិស័យរបស់ខ្ញុំ
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-muted">
            ពីអតីតគ្រូបង្រៀន ICT នៅកម្ពុជា រហូតដល់ Senior Full-Stack Developer លើគម្រោងអន្តរជាតិ —
            ខ្ញុំរួមបញ្ចូលបទពិសោធន៍ទាំងពីរ ដើម្បីបង្កើតប្រព័ន្ធសូហ្វវែរ និងលើកកម្ពស់បច្ចេកវិទ្យា AI។
          </p>
          <div className="mt-8 flex justify-center">
            <ShimmerButton href="/about" variant="secondary" className="!px-6 !py-3 !text-xs">
              <span>អានបន្ថែមអំពីប្រវត្តិការងារ</span>
              <ArrowRight size={14} />
            </ShimmerButton>
          </div>
        </GlowCard>
      </FadeIn>
    </section>
  );
}

