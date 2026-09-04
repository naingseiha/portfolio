"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `ឈ្មោះ: ${name}\nអ៊ីមែល: ${email}\n\n${message}`;
    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject || "ទំនាក់ទំនងពីគេហទំព័រ",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex items-center gap-2 pb-2 border-b border-black/5">
        <Mail size={16} className="text-primary" />
        <h3 className="text-base font-bold text-foreground">ផ្ញើសារមកកាន់ខ្ញុំ</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-foreground">
            ឈ្មោះរបស់អ្នក
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="ឧ. សុខ ចាន់ដារា"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-2xl border border-black/8 bg-surface-subtle/80 px-4 py-3 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground">
            អ៊ីមែល
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border border-black/8 bg-surface-subtle/80 px-4 py-3 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-foreground">
          ប្រធានបទ
        </label>
        <input
          id="subject"
          type="text"
          placeholder="ឧ. សហការលើគម្រោង Web App / សាកសួរវគ្គ AI"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded-2xl border border-black/8 bg-surface-subtle/80 px-4 py-3 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-foreground">
          ខ្លឹមសារសារ
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="សរសេរសារ ឬសំណួររបស់អ្នកនៅទីនេះ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-2xl border border-black/8 bg-surface-subtle/80 px-4 py-3 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="pt-2">
        <ShimmerButton variant="primary" className="w-full !py-3.5" onClick={() => {}}>
          <Send size={15} />
          <span>ផ្ញើសារផ្ទាល់</span>
        </ShimmerButton>
      </div>
    </form>
  );
}

