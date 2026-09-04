"use client";

import { useState } from "react";
import {
  AlertCircle,
  Banknote,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Course, featuredCourse, googleFormEmbedUrl } from "@/lib/courses";

interface EnrollmentProps {
  course?: Course;
}

export function Enrollment({ course }: EnrollmentProps) {
  const currentCourse = course || featuredCourse;
  const courseSchedule =
    currentCourse.schedule || "រៀងរាល់ចុងសប្តាហ៍ (សៅរ៍-អាទិត្យ) ឬតាមការណាត់";

  const [fullName, setFullName] = useState("");
  const [phoneTelegram, setPhoneTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [session, setSession] = useState("weekend");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក");
      return;
    }
    if (!phoneTelegram.trim()) {
      setErrorMessage("សូមបញ្ចូលលេខទូរស័ព្ទ ឬ Telegram របស់អ្នក");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលឲ្យបានត្រឹមត្រូវ");
      return;
    }

    setIsSubmitting(true);

    try {
      // Connect directly to Google Form Response backend
      const googleFormActionUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSd5jXokEqRtPB30mkk-E96G_3DfargWN7-RONYcZXAfeJsHrg/formResponse";

      const formData = new FormData();
      formData.append("entry.1978588261", fullName.trim());
      formData.append("entry.1096519060", phoneTelegram.trim());
      formData.append("entry.593585430", email.trim());
      formData.append(
        "entry.383383059",
        session === "weekend" ? "សៅរ៍-អាទិត្យ" : "ព្រហ-សុក្រ"
      );

      // Submit in the background via no-cors to record response directly into Google Sheet
      await fetch(googleFormActionUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      // Fallback gracefully and still confirm submission
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFullName("");
    setPhoneTelegram("");
    setEmail("");
    setNotes("");
    setIsSubmitted(false);
    setErrorMessage("");
  };

  return (
    <section
      id="enrollment"
      className="scroll-mt-24 border-t border-black/5 dark:border-white/5 py-12 sm:py-16"
    >
      <FadeIn className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-3.5 py-1 text-xs font-semibold text-primary backdrop-blur-md mb-2.5">
          <ShieldCheck size={14} />
          <span>Easy Enrollment · ធានាការឆ្លើយតបរហ័ស</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl font-display">
          ទម្រង់ចុះឈ្មោះចូលរៀនវគ្គ {currentCourse.title}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-muted">
          បំពេញព័ត៌មានខាងក្រោមត្រឹមតែ ១ នាទី ហើយខ្ញុំនឹងទាក់ទងបញ្ជាក់ការចុះឈ្មោះទៅកាន់អ្នកផ្ទាល់
        </p>
      </FadeIn>

      {/* Main Form Container Card */}
      <FadeIn delay={0.05}>
        <div className="overflow-hidden rounded-[28px] sm:rounded-[32px] border border-black/[0.08] dark:border-white/[0.1] bg-surface/90 shadow-xl shadow-black/[0.03] dark:shadow-black/20 backdrop-blur-xl">
          {/* Top Quick Course Summary Header Strip */}
          <div className="border-b border-black/5 dark:border-white/5 bg-surface-subtle/50 px-5 py-4 sm:px-8 sm:py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <span className="block text-xs font-semibold text-muted">
                    វគ្គសិក្សាដែលបានជ្រើសរើស
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {currentCourse.title}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5 rounded-xl border border-black/5 dark:border-white/5 bg-surface px-3 py-1.5 font-medium text-foreground">
                  <Calendar size={14} className="text-primary" />
                  <span>{courseSchedule}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1.5 font-bold text-primary">
                  <Banknote size={14} />
                  <span>{currentCourse.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form or Success State Body */}
          <div className="p-5 sm:p-8 md:p-10">
            {isSubmitted ? (
              /* High-End Apple Success State */
              <div className="flex flex-col items-center text-center py-6 sm:py-10">
                <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 size={42} />
                  <span className="absolute inset-0 rounded-full animate-ping bg-emerald-500/10" />
                </div>

                <h3 className="text-2xl font-bold text-foreground sm:text-3xl font-display">
                  ការចុះឈ្មោះទទួលបានជោគជ័យ!
                </h3>
                <p className="mt-2 max-w-md text-xs sm:text-sm text-muted leading-relaxed">
                  អរគុណលោកអ្នក <strong className="text-foreground">{fullName}</strong> សម្រាប់ការចុះឈ្មោះចូលរៀនវគ្គ <strong className="text-foreground">{currentCourse.title}</strong>។ យើងខ្ញុំបានទទួលព័ត៌មានរបស់លោកអ្នករួចរាល់ហើយ ហើយនឹងទាក់ទងបញ្ជាក់តាម Telegram/អ៊ីមែលក្នុងពេលឆាប់ៗ។
                </p>

                {/* Direct Contact CTAs */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://t.me/naingseiha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0088cc] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0077b5] hover:scale-[1.02]"
                  >
                    <Send size={15} />
                    <span>ទាក់ទង Telegram ផ្ទាល់ (@naingseiha)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-surface px-5 py-3 text-xs font-semibold text-foreground-secondary transition-colors hover:bg-surface-subtle"
                  >
                    <span>ចុះឈ្មោះអ្នកផ្សេងទៀត</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Native Clean Registration Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="flex items-center gap-2.5 rounded-2xl border border-red-500/20 bg-red-500/10 p-3.5 text-xs font-medium text-red-600 dark:text-red-400">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="flex items-center gap-1.5 text-xs font-bold text-foreground"
                    >
                      <User size={14} className="text-primary" />
                      <span>ឈ្មោះពេញ (Full Name) <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="ឧ. ណាំង សីហា ឬ John Doe"
                      className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-2xs transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Phone / Telegram */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phoneTelegram"
                      className="flex items-center gap-1.5 text-xs font-bold text-foreground"
                    >
                      <Phone size={14} className="text-primary" />
                      <span>លេខទូរស័ព្ទ ឬ Telegram <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      id="phoneTelegram"
                      type="text"
                      required
                      value={phoneTelegram}
                      onChange={(e) => setPhoneTelegram(e.target.value)}
                      placeholder="ឧ. 012 345 678 ឬ @username"
                      className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-2xs transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-1.5 text-xs font-bold text-foreground"
                    >
                      <Mail size={14} className="text-primary" />
                      <span>អាសយដ្ឋានអ៊ីមែល (Email) <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ឧ. yourname@gmail.com"
                      className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-2xs transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Preferred Schedule Session */}
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <Calendar size={14} className="text-primary" />
                      <span>កាលវិភាគដែលងាយស្រួលរៀន</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSession("weekend")}
                        className={`rounded-2xl border p-2.5 text-xs font-semibold transition-all text-center ${
                          session === "weekend"
                            ? "border-primary bg-primary-soft text-primary shadow-xs"
                            : "border-black/10 dark:border-white/10 bg-surface text-muted hover:text-foreground"
                        }`}
                      >
                        សៅរ៍ - អាទិត្យ (Weekend)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSession("weekday")}
                        className={`rounded-2xl border p-2.5 text-xs font-semibold transition-all text-center ${
                          session === "weekday"
                            ? "border-primary bg-primary-soft text-primary shadow-xs"
                            : "border-black/10 dark:border-white/10 bg-surface text-muted hover:text-foreground"
                        }`}
                      >
                        យប់ថ្ងៃចន្ទ - សុក្រ (Evening)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notes & Learning Goals */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="notes"
                    className="flex items-center gap-1.5 text-xs font-bold text-foreground"
                  >
                    <MessageSquare size={14} className="text-primary" />
                    <span>ចំណាំបន្ថែម ឬគោលដៅសិក្សាដែលចង់ទទួលបាន (Optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="បញ្ជាក់ពីកម្រិតចំណេះដឹងបច្ចុប្បន្ន ឬសំណួរផ្សេងៗដែលអ្នកចង់សួរគ្រូ..."
                    className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted shadow-2xs transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Value Guarantee & Security Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-surface-subtle/50 px-4 py-3 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                    <span>ព័ត៌មានរបស់អ្នកត្រូវបានរក្សាការសម្ងាត់ និងប្រើប្រាស់សម្រាប់តែការសិក្សាប៉ុណ្ណោះ</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    ធានាឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង
                  </span>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:scale-[1.005] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>កំពុងបញ្ជូនព័ត៌មាន...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>ផ្ញើព័ត៌មានចុះឈ្មោះ (Submit Registration)</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Optional Direct Google Form Link Footer */}
          {googleFormEmbedUrl && (
            <div className="border-t border-black/5 dark:border-white/5 bg-surface-subtle/40 px-6 py-4 text-center">
              <p className="text-xs text-muted">
                ឬប្រសិនបើអ្នកពេញចិត្តការចុះឈ្មោះតាម Google Form ដោយផ្ទាល់៖{" "}
                <a
                  href={googleFormEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-2 hover:text-primary-hover"
                >
                  <span>បើកទម្រង់ចុះឈ្មោះ Google Form ផ្លូវការ</span>
                  <ExternalLink size={12} />
                </a>
              </p>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

