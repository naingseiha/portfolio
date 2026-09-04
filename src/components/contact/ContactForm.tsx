"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            ឈ្មោះ
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border-0 bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            អ៊ីមែល
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border-0 bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          ប្រធានបទ
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded-xl border-0 bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          សារ
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-xl border-0 bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-transparent transition-shadow focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Send size={16} />
        ផ្ញើសារ
      </button>
    </form>
  );
}
