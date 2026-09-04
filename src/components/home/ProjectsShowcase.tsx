"use client";

import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Code2, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowCard } from "@/components/motion/GlowCard";
import { flagshipProjects } from "@/lib/projects-data";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 md:py-32 scroll-mt-20">
      {/* Apple-Style Section Header with Koulen Display Font */}
      <FadeIn className="mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
              <Code2 size={13} />
              <span>Selected Engineering Projects</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-foreground">
              ស្នាដៃវិស្វកម្មសូហ្វវែរ &amp; ប្រព័ន្ធ AI
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
              គម្រោងជាក់ស្តែងដែលត្រូវបានរចនាឡើងប្រកបដោយស្ថាបត្យកម្មរឹងមាំ ល្បឿនលឿន និងបទពិសោធន៍កម្រិតខ្ពស់។
            </p>
          </div>
          <span className="font-accent text-sm text-primary/80 hidden md:block">
            ស្ថាបត្យកម្មកូដ &amp; ដំណោះស្រាយជាក់ស្តែង
          </span>
        </div>
      </FadeIn>

      {/* Bento Grid Showcase */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {flagshipProjects.map((project, idx) => {
          const isLarge = idx === 0 || idx === 3;
          return (
            <FadeIn key={project.id} delay={idx * 0.08} className={isLarge ? "md:col-span-2" : "md:col-span-1"}>
              <GlowCard className="h-full !rounded-[28px] sm:!rounded-[32px] border border-black/[0.06]">
                <div className={`flex h-full flex-col justify-between p-6 sm:p-9 bg-gradient-to-br ${project.gradient}`}>
                  <div>
                    {/* Top Bar: Category & Status */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-black/8 bg-surface/90 px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                          <BadgeCheck size={13} />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="mt-4 font-heading text-2xl font-bold tracking-normal text-foreground sm:text-3xl leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#6e6e73] font-normal">
                      {project.tagline}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="mt-6 flex flex-wrap items-center gap-2.5">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex items-center gap-2 rounded-xl border border-black/5 bg-surface/90 px-3 py-1.5 shadow-2xs backdrop-blur-xs"
                        >
                          <span className="text-xs font-bold text-primary">{m.value}</span>
                          <span className="text-[11px] text-foreground-secondary">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Bar: Tech Stack & Action Links */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-black/5 bg-surface/60 px-2.5 py-0.5 text-[11px] font-medium text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-foreground-secondary transition-colors hover:text-primary"
                        >
                          <ExternalLink size={13} />
                          GitHub
                        </a>
                      )}
                      {project.demoUrl && (
                        <Link
                          href={project.demoUrl}
                          className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary-hover hover:gap-1.5"
                        >
                          <span>សាកល្បង</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          );
        })}
      </div>

      {/* Extra CTA underneath projects */}
      <FadeIn className="mt-10 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 rounded-3xl border border-black/5 bg-surface-subtle/80 p-5 px-7">
          <p className="text-sm font-medium text-foreground">
            ចង់ពិភាក្សាលើស្ថាបត្យកម្មសូហ្វវែរ ឬគម្រោងថ្មី?
          </p>
          <ShimmerButton href="/contact" variant="primary" className="!py-2 !px-4 !text-xs">
            ទំនាក់ទំនង
          </ShimmerButton>
        </div>
      </FadeIn>
    </section>
  );
}
