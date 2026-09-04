import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "ទំនាក់ទំនង | ណាំង សីហា",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn className="mb-12 text-center">
        <h1 className="text-4xl text-foreground sm:text-5xl">ទំនាក់ទំនង</h1>
        <p className="mt-4 text-muted">
          មានសំណួរអំពីវគ្គបណ្តុះបណ្តាល ឬចង់សហការជាមួយគ្នា? សរសេរសារមកខ្ញុំ
        </p>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn delay={0.1}>
          <ContactInfo />
        </FadeIn>

        <FadeIn delay={0.15} className="rounded-3xl bg-surface p-6 sm:p-8">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
