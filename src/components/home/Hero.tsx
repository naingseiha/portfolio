"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GridBackdrop } from "@/components/motion/GridBackdrop";
import { TiltCard } from "@/components/motion/TiltCard";
import { siteConfig } from "@/lib/site-config";
import { careerStats } from "@/lib/home-data";

const heroStats = [
  { value: careerStats[0].value, label: "គម្រោង" },
  { value: careerStats[3].value, label: "បច្ចេកវិទ្យា" },
  { value: careerStats[2].value, label: "ឆ្នាំ" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackdrop />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col items-start gap-5 text-left"
        >
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-[0.15em] text-primary uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Software Engineer · គ្រូបង្រៀន
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl leading-[1.15] text-foreground sm:text-5xl md:text-6xl"
          >
            សាងសង់កម្មវិធី។
            <br />
            <span className="text-primary">បង្រៀនមនុស្ស។</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            Full-Stack Developer ជំនាញ Web & Mobile — និងជាគ្រូបង្រៀន
            ដែលចែករំលែកចំណេះដឹង AI ជូនដល់គ្រូបង្រៀនកម្ពុជា។
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-6">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              មើលវគ្គសិក្សា
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              ទាក់ទង
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-[320px] md:max-w-sm"
        >
          <TiltCard className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10 ring-1 ring-black/5">
              <Image
                src="/images/profile.jpg"
                alt={siteConfig.name}
                fill
                priority
                sizes="(min-width: 768px) 384px, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            <span className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Sparkles size={20} />
            </span>
          </TiltCard>

          <div className="absolute -bottom-5 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between divide-x divide-black/5 rounded-2xl bg-surface px-5 py-3 shadow-xl shadow-black/5">
            {heroStats.map(({ label, value }) => (
              <div key={label} className="flex-1 text-center first:pl-0 last:pr-0">
                <p className="text-lg font-semibold text-foreground">{value}</p>
                <p className="text-[11px] text-muted">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
