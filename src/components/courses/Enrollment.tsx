import { Banknote, Calendar, Mail } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  enrollmentFields,
  featuredCourse,
  googleFormEmbedUrl,
} from "@/lib/courses";
import { siteConfig } from "@/lib/site-config";

export function Enrollment() {
  return (
    <section id="enrollment" className="bg-surface py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              ចុះឈ្មោះចូលរៀន
            </h2>
            <p className="mt-3 text-muted">
              បំពេញព័ត៌មានខាងក្រោម ហើយក្រុមការងារនឹងទាក់ទងទៅអ្នកវិញ
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-2xl bg-background p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Calendar size={18} />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  កាលវិភាគ
                </span>
                <span className="text-sm text-muted">
                  {featuredCourse.schedule}
                </span>
              </span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-background p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Banknote size={18} />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  តម្លៃ
                </span>
                <span className="text-sm text-muted">
                  {featuredCourse.price}
                </span>
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {googleFormEmbedUrl ? (
            <div className="overflow-hidden rounded-2xl bg-background">
              <iframe
                src={googleFormEmbedUrl}
                title="ទម្រង់ចុះឈ្មោះ"
                className="h-[640px] w-full"
              >
                កំពុងផ្ទុកទម្រង់…
              </iframe>
            </div>
          ) : (
            <div className="flex flex-col gap-5 rounded-2xl border border-dashed border-primary/30 bg-background p-6">
              <p className="text-sm text-muted">
                ទម្រង់ចុះឈ្មោះ (Google Form) នឹងបង្ហាញនៅទីនេះ។ ខាងក្រោមជាព័ត៌មាន
                ដែលទម្រង់នឹងសួរ៖
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {enrollmentFields.map((field) => (
                  <div
                    key={field.label}
                    className="rounded-xl bg-surface px-4 py-3 text-sm text-foreground/70"
                  >
                    {field.label}
                  </div>
                ))}
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                  `ចុះឈ្មោះចូលរៀនវគ្គ ${featuredCourse.title}`,
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Mail size={16} />
                ចុះឈ្មោះតាមអ៊ីមែលឥឡូវនេះ
              </a>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
