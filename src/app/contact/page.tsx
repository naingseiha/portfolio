import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "ទំនាក់ទំនង | ណាំង សីហា",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20">
      <FadeIn className="mb-10 sm:mb-12 text-center">
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-wide text-foreground">
          ទំនាក់ទំនង
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted">
          មានសំណួរអំពីវគ្គបណ្តុះបណ្តាល ឬចង់សហការជាមួយគ្នា? សរសេរសារមកខ្ញុំ
        </p>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn delay={0.1}>
          <ContactInfo />
        </FadeIn>

        <FadeIn delay={0.15} className="rounded-[28px] sm:rounded-3xl border border-black/[0.06] dark:border-white/[0.08] bg-surface p-5 sm:p-8 shadow-xs">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
