export const careerStats = [
  { label: "គម្រោងសូហ្វវែរជោគជ័យ", value: "15+", subtext: "Web, Mobile & AI" },
  { label: "គ្រូបង្រៀនបានបណ្តុះបណ្តាល", value: "100+", subtext: "AI for Teachers" },
  { label: "ដំណើរការប្រព័ន្ធ (Uptime)", value: "99.9%", subtext: "High Availability" },
  { label: "បច្ចេកវិទ្យាស្នូល", value: "12+", subtext: "Full-Stack Ecosystem" },
];

export interface TechCategory {
  title: string;
  categoryKh: string;
  description: string;
  icon: "layers" | "globe" | "smartphone" | "bot" | "database" | "cpu";
  colSpan?: string;
  theme: {
    gradient: string;
    glowColor: string;
    iconBg: string;
    badgeBg: string;
    activeChip: string;
    dotColor: string;
  };
  technologies: {
    name: string;
    level: "Expert" | "Advanced";
    highlight?: boolean;
  }[];
}

export const techStackBento: TechCategory[] = [
  {
    title: "Modern Frontend & Web Architecture",
    categoryKh: "ស្ថាបត្យកម្មគេហទំព័រទំនើប",
    description: "បង្កើត Web App ល្បឿនលឿន ប្រកបដោយ High Performance, SSR/SSG និង Interactive UI បែប Apple Standard។",
    icon: "globe",
    colSpan: "md:col-span-2",
    theme: {
      gradient: "from-[#0071e3]/[0.06] via-[#0071e3]/[0.015] to-transparent",
      glowColor: "rgba(0, 113, 227, 0.18)",
      iconBg: "bg-[#eff6ff] text-[#0071e3] border border-[#0071e3]/20",
      badgeBg: "border-[#0071e3]/20 bg-[#eff6ff]/80 text-[#0071e3]",
      activeChip: "border-[#0071e3]/30 bg-[#eff6ff] text-[#0071e3] font-semibold shadow-2xs",
      dotColor: "bg-[#0071e3]",
    },
    technologies: [
      { name: "Next.js 16 (App Router)", level: "Expert", highlight: true },
      { name: "React 19", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "Tailwind CSS v4", level: "Expert", highlight: true },
      { name: "Framer Motion", level: "Advanced", highlight: true },
      { name: "State (Zustand/TanStack)", level: "Advanced" },
    ],
  },
  {
    title: "Mobile App Development",
    categoryKh: "កម្មវិធីទូរស័ព្ទឆ្លងវេទិកា",
    description: "កម្មវិធី iOS & Android ដែលមាន Native Performance 60 FPS, Offline-First Data និង UX រលូន។",
    icon: "smartphone",
    colSpan: "md:col-span-1",
    theme: {
      gradient: "from-[#6366f1]/[0.06] via-[#6366f1]/[0.015] to-transparent",
      glowColor: "rgba(99, 102, 241, 0.18)",
      iconBg: "bg-[#eef2ff] text-[#6366f1] border border-[#6366f1]/20",
      badgeBg: "border-[#6366f1]/20 bg-[#eef2ff]/80 text-[#6366f1]",
      activeChip: "border-[#6366f1]/30 bg-[#eef2ff] text-[#6366f1] font-semibold shadow-2xs",
      dotColor: "bg-[#6366f1]",
    },
    technologies: [
      { name: "React Native", level: "Expert", highlight: true },
      { name: "Expo SDK", level: "Expert", highlight: true },
      { name: "SwiftUI", level: "Advanced" },
      { name: "Kotlin", level: "Advanced" },
    ],
  },
  {
    title: "AI Integration & Vibe Workflows",
    categoryKh: "ការរួមបញ្ចូលបញ្ញាសិប្បនិម្មិត (AI)",
    description: "LLM Orchestration, Custom Gemini Gems, Prompt Engineering និង Agentic Coding Workflows។",
    icon: "bot",
    colSpan: "md:col-span-1",
    theme: {
      gradient: "from-[#10b981]/[0.06] via-[#10b981]/[0.015] to-transparent",
      glowColor: "rgba(16, 185, 129, 0.18)",
      iconBg: "bg-[#ecfdf5] text-[#059669] border border-[#10b981]/20",
      badgeBg: "border-[#10b981]/20 bg-[#ecfdf5]/80 text-[#059669]",
      activeChip: "border-[#10b981]/30 bg-[#ecfdf5] text-[#059669] font-semibold shadow-2xs",
      dotColor: "bg-[#10b981]",
    },
    technologies: [
      { name: "Gemini 2.5 / Flash", level: "Expert", highlight: true },
      { name: "Anthropic Claude", level: "Expert" },
      { name: "Google Antigravity", level: "Expert", highlight: true },
      { name: "Prompt Engineering", level: "Expert", highlight: true },
    ],
  },
  {
    title: "Backend, Cloud & Distributed Systems",
    categoryKh: "ប្រព័ន្ធ Backend និង Cloud",
    description: "ស្ថាបត្យកម្ម Scalable APIs, Microservices, Graph Databases និង Real-time Event Streaming។",
    icon: "database",
    colSpan: "md:col-span-2",
    theme: {
      gradient: "from-[#f59e0b]/[0.06] via-[#f59e0b]/[0.015] to-transparent",
      glowColor: "rgba(245, 158, 11, 0.18)",
      iconBg: "bg-[#fffbeb] text-[#d97706] border border-[#f59e0b]/20",
      badgeBg: "border-[#f59e0b]/20 bg-[#fffbeb]/80 text-[#d97706]",
      activeChip: "border-[#f59e0b]/30 bg-[#fffbeb] text-[#d97706] font-semibold shadow-2xs",
      dotColor: "bg-[#f59e0b]",
    },
    technologies: [
      { name: "Node.js & Express", level: "Expert", highlight: true },
      { name: "MongoDB Atlas", level: "Expert", highlight: true },
      { name: "Neo4j (Graph DB)", level: "Advanced", highlight: true },
      { name: "PostgreSQL & Prisma", level: "Advanced" },
      { name: "Docker & AWS ECS", level: "Advanced" },
      { name: "REST & GraphQL APIs", level: "Expert" },
    ],
  },
];

export const engineeringPrinciples = [
  {
    icon: "shield-check" as const,
    title: "Architecture & Clean Code",
    titleKh: "ស្ថាបត្យកម្មរឹងមាំ & កូដស្អាត",
    description:
      "ផ្តោតលើ SOLID Principles, Clean Architecture, និង Modular Design ដើម្បីធានាថាកូដងាយស្រួលពង្រីក (Maintainable & Scalable)។",
  },
  {
    icon: "zap" as const,
    title: "Sub-Second Performance",
    titleKh: "ល្បឿន និងប្រសិទ្ធភាពខ្ពស់",
    description:
      "កាត់បន្ថយ Bundle Size, ប្រើ Server Components, Intelligent Caching និង Edge Computing ដើម្បីឱ្យ Website បើកភ្លាមចេញភ្លែត។",
  },
  {
    icon: "gem" as const,
    title: "Pixel-Perfect Craftsmanship",
    titleKh: "ភាពផ្ចិតផ្ចង់កម្រិត Apple",
    description:
      "រាល់ចលនា Hover, Micro-interaction, និង Grid Spacing ត្រូវបានវាស់វែងយ៉ាងម៉ត់ចត់ដើម្បីផ្តល់បទពិសោធន៍ប្រើប្រាស់កម្រិតកំពូល។",
  },
];

