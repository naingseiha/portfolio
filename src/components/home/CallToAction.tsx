import { ArrowRight, Mail, Terminal } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 md:py-32">
      <FadeIn className="relative flex flex-col items-center gap-6 sm:gap-7 overflow-hidden !rounded-[28px] sm:!rounded-[36px] border border-white/10 bg-gradient-to-b from-[#111827] to-[#090d16] px-5 py-12 sm:px-8 sm:py-20 md:py-24 text-center text-white shadow-2xl shadow-black/20">
        {/* Subtle Ambient Radial Lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-primary/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md">
          <Terminal size={13} className="text-primary" />
          <span>Let&apos;s Build Something Extraordinary</span>
        </div>

        <h2 className="relative max-w-2xl font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-[1.3]">
          ត្រៀមខ្លួនសហការលើគម្រោងសូហ្វវែរ ឬវគ្គបណ្តុះបណ្តាល AI?
        </h2>

        <p className="relative max-w-md text-base leading-relaxed text-slate-300">
          ត្រៀមខ្លួនជានិច្ចដើម្បីសហការជាមួយអ្នកក្នុងការបង្កើត Platform ថ្មី ឬរៀបចំសិក្ខាសាលា AI។
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-4 pt-3">
          <ShimmerButton href="/contact" variant="primary" className="!bg-primary !text-white !px-8 !py-4 text-sm">
            <Mail size={16} />
            <span>ចាប់ផ្តើមទំនាក់ទំនងឥឡូវនេះ</span>
            <ArrowRight size={16} />
          </ShimmerButton>
        </div>
      </FadeIn>
    </section>
  );
}

