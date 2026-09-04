import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function CallToAction() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn className="relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-14 text-center text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <h2
          className="relative text-2xl sm:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ត្រៀមខ្លួនសហការជាមួយគ្នាហើយឬនៅ?
        </h2>
        <p className="relative max-w-md text-sm text-primary-foreground/90">
          ស្វែងរកអ្នកអភិវឌ្ឍន៍កម្មវិធី ឬចង់រៀន AI ក្នុងការបង្រៀន — ខ្ញុំរីករាយសហការជាមួយអ្នក។
        </p>
        <Link
          href="/contact"
          className="relative inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          ចាប់ផ្តើមទំនាក់ទំនង
          <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </section>
  );
}
