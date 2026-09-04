"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  User,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GridBackdrop } from "@/components/motion/GridBackdrop";
import { ShimmerButton } from "@/components/motion/ShimmerButton";
import { TiltCard } from "@/components/motion/TiltCard";
import { siteConfig } from "@/lib/site-config";
import { careerStats } from "@/lib/home-data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  const [activeTab, setActiveTab] = useState<"architecture" | "code" | "profile">("architecture");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <GridBackdrop />

      {/* Main Hero Container */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left Column: Clean Typography & CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col items-start gap-7 text-left"
        >
          {/* Status Pill Badge - Apple Minimal */}
          <motion.div
            variants={item}
            className="inline-flex flex-wrap items-center gap-2 rounded-full border border-black/8 bg-surface-glass/90 px-3.5 py-1.5 sm:px-4 shadow-xs backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-normal text-foreground-secondary">
              Senior Software Engineer · AI Specialist
            </span>
            <span className="hidden sm:inline-block font-accent text-xs text-primary/85 pl-1.5 border-l border-black/10">
              សិល្បៈកូដ &amp; ស្ថាបត្យកម្ម
            </span>
          </motion.div>

          {/* Clean Main Headline - Apple Style Pure Contrast with Koulen Display */}
          <motion.h1
            variants={item}
            className="tracking-normal text-foreground"
          >
            <span className="font-display block text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-wide text-foreground leading-[1.25]">
              វិស្វកម្មសូហ្វវែរទំនើប
            </span>
            <span className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-primary block mt-1.5 leading-[1.3]">
              ស្ថាបត្យកម្ម &amp; AI Solutions
            </span>
          </motion.h1>

          {/* Punchy, Breathing Subtitle */}
          <motion.p
            variants={item}
            className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            រចនា និងអភិវឌ្ឍប្រព័ន្ធ Web &amp; Mobile កម្រិតខ្ពស់ ប្រកបដោយស្ថាបត្យកម្មរឹងមាំ ល្បឿនលឿន និងដំណោះស្រាយ AI ជាក់ស្តែង។
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
            <ShimmerButton href="/#projects" variant="primary" className="!px-7 !py-3.5 !text-sm">
              <span>ពិនិត្យមើលគម្រោង</span>
              <ArrowRight size={15} />
            </ShimmerButton>
            <ShimmerButton href="/courses" variant="secondary" className="!px-7 !py-3.5 !text-sm">
              <GraduationCap size={15} className="text-primary" />
              <span>វគ្គបណ្តុះបណ្តាល AI</span>
            </ShimmerButton>
          </motion.div>
        </motion.div>

        {/* Right Column: Clean macOS Showcase Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative rounded-3xl border border-black/8 bg-surface/95 p-2.5 shadow-2xl shadow-primary/5 backdrop-blur-xl">
            {/* macOS Style Window Header */}
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Tab Switchers */}
              <div className="flex items-center rounded-xl bg-black/5 p-1 text-[11px] font-medium text-muted">
                <button
                  type="button"
                  onClick={() => setActiveTab("architecture")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1 transition-all ${
                    activeTab === "architecture"
                      ? "bg-surface font-semibold text-foreground shadow-xs"
                      : "hover:text-foreground"
                  }`}
                >
                  <Cpu size={12} />
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1 transition-all ${
                    activeTab === "code"
                      ? "bg-surface font-semibold text-foreground shadow-xs"
                      : "hover:text-foreground"
                  }`}
                >
                  <Code2 size={12} />
                  Code
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1 transition-all ${
                    activeTab === "profile"
                      ? "bg-surface font-semibold text-foreground shadow-xs"
                      : "hover:text-foreground"
                  }`}
                >
                  <User size={12} />
                  Profile
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-4 sm:p-5 min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "architecture" && (
                  <motion.div
                    key="arch"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="w-full space-y-2.5"
                  >
                    <div className="flex items-center justify-between rounded-2xl border border-primary/15 bg-primary-soft/40 p-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                          <Layers size={16} />
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Edge SSR Architecture</p>
                          <p className="text-[11px] text-muted">Next.js 16 · Turbopack · Zero Waterfall</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                        <Zap size={10} />
                        Fast
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-indigo-500/15 bg-indigo-50/30 p-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                          <Bot size={16} />
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Multi-LLM Integration</p>
                          <p className="text-[11px] text-muted">Gemini 2.5 · Claude 3.7 · Streaming</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary">
                        Streaming
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-surface-subtle p-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-white shadow-xs">
                          <Zap size={16} />
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Cross-Platform Suite</p>
                          <p className="text-[11px] text-muted">React Native · Offline-First Sync</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-foreground-secondary">
                        60 FPS
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "code" && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="w-full rounded-2xl bg-[#0f141c] p-4 text-[12px] font-mono leading-relaxed text-slate-200 shadow-inner"
                  >
                    <div className="flex items-center gap-2 pb-2 text-xs text-slate-400 border-b border-slate-800 mb-2.5">
                      <Code2 size={13} />
                      <span>engineer.ts</span>
                    </div>
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">profile</span> = &#123;</p>
                    <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">&quot;ណាំង សីហា&quot;</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">&quot;Senior Full-Stack &amp; AI&quot;</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">stack:</span> [<span className="text-amber-300">&quot;Next.js&quot;, &quot;React Native&quot;, &quot;AI&quot;</span>],</p>
                    <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-cyan-300">&quot;Ready for Impact&quot;</span></p>
                    <p>&#125;;</p>
                  </motion.div>
                )}

                {activeTab === "profile" && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <TiltCard>
                      <div className="relative h-36 w-36 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                        <Image
                          src="/images/profile.jpg"
                          alt={siteConfig.name}
                          fill
                          priority
                          sizes="144px"
                          className="object-cover"
                        />
                      </div>
                    </TiltCard>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{siteConfig.name}</h4>
                      <p className="text-xs text-muted">Senior Software Engineer &amp; AI Specialist</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Indicator */}
            <div className="flex items-center justify-between border-t border-black/5 bg-surface-subtle/60 px-4 py-2 rounded-b-2xl text-[11px] text-muted">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500" />
                Verified Production Architecture
              </span>
              <span className="font-mono text-[10px] text-foreground-secondary">
                Next.js 16 · React 19
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Clean Apple-Style Metrics Strip (Separated from Hero Grid for Breathing Room) */}
      <div className="relative mx-auto mt-20 max-w-5xl px-6 sm:mt-24">
        <div className="grid grid-cols-2 gap-6 rounded-[32px] border border-black/[0.06] bg-surface/90 p-8 shadow-xs backdrop-blur-xl sm:grid-cols-4 sm:gap-8 sm:p-10">
          {careerStats.map(({ label, value, subtext }) => (
            <div key={label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span
                className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              >
                {value}
              </span>
              <span className="mt-1.5 text-xs font-semibold text-foreground">
                {label}
              </span>
              <span className="text-[11px] text-muted">{subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

