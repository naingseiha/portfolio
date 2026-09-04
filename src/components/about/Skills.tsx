import { Code2, Database, Presentation, Smartphone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { skillGroups } from "@/lib/about-data";

const icons = {
  code: Code2,
  smartphone: Smartphone,
  database: Database,
  presentation: Presentation,
};

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn className="mb-12 text-center">
        <h2 className="text-3xl text-foreground sm:text-4xl">ជំនាញ</h2>
        <p className="mt-3 text-muted">
          បច្ចេកវិទ្យា និងជំនាញដែលខ្ញុំប្រើប្រាស់ក្នុងការងារប្រចាំថ្ងៃ
        </p>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <FadeIn
              key={group.title}
              delay={i * 0.08}
              className="rounded-3xl bg-surface p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary-soft/60 px-3 py-1.5 text-sm text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
