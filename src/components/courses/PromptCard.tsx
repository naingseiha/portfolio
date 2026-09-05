"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

export function PromptCard({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-6 overflow-hidden rounded-[22px] border border-sky-400/25 bg-[#07162f] shadow-[0_18px_50px_-30px_rgba(14,165,233,0.8)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-xs font-black text-sky-300">
            AI
          </span>
          <div className="min-w-0">
            <p className="m-0 truncate text-xs font-bold text-white">Prompt អាចប្រើបានភ្លាមៗ</p>
            <p className="m-0 text-[11px] text-slate-400">ប្រើបានជាមួយ ChatGPT, Gemini, Claude និង AI Chatbot ផ្សេងៗ</p>
          </div>
        </div>
        <button
          type="button"
          onClick={copyPrompt}
          className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/10 px-3 text-xs font-bold text-white transition hover:border-sky-300/40 hover:bg-sky-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          aria-label="ចម្លង Prompt"
        >
          {copied ? <Check size={14} /> : <Clipboard size={14} />}
          {copied ? "បានចម្លង" : "Copy"}
        </button>
      </div>
      <pre className="m-0 whitespace-pre-wrap break-words px-4 py-5 font-body text-sm leading-7 text-slate-100 sm:px-5 sm:text-[15px]">
        {prompt}
      </pre>
      <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3 sm:px-5">
        {['[មុខវិជ្ជា]', '[ថ្នាក់ទី…]', '[ប្រធានបទ]'].map((item) => (
          <span key={item} className="rounded-md bg-amber-300/10 px-2 py-1 text-[10px] font-bold text-amber-200">
            {item} = កែតាមការងាររបស់អ្នក
          </span>
        ))}
      </div>
    </div>
  );
}
