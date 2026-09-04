import { Code, Laptop, MailCheck, Monitor, Wifi, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { prerequisites as defaultPrerequisites } from "@/lib/courses";

const icons: Record<string, React.ElementType> = {
  laptop: Laptop,
  "mail-check": MailCheck,
  monitor: Monitor,
  wifi: Wifi,
  code: Code,
};

interface PrerequisitesProps {
  prerequisites?: { icon: string; label: string }[];
}

export function Prerequisites({ prerequisites = defaultPrerequisites }: PrerequisitesProps) {
  if (!prerequisites || prerequisites.length === 0) return null;

  return (
    <section className="py-8">
      <FadeIn className="mb-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl font-display">
          តម្រូវការមុនចូលរៀន (Requirements &amp; Prerequisites)
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted">
          អ្វីដែលអ្នកត្រូវមានដើម្បីទទួលបានប្រសិទ្ធភាពខ្ពស់បំផុតពីវគ្គនេះ
        </p>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2">
        {prerequisites.map((item) => {
          const Icon = icons[item.icon] || CheckCircle;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-surface-subtle/50 p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={18} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground-secondary">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
