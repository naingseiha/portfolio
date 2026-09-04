export interface Project {
  id: string;
  title: string;
  category: "Web & Cloud" | "Mobile" | "AI & Systems" | "EdTech";
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  architectureHighlights: string[];
  gradient: string;
}

export const flagshipProjects: Project[] = [
  {
    id: "edu-ai-engine",
    title: "EduAI Engine & LMS Platform",
    category: "AI & Systems",
    tagline: "ប្រព័ន្ធស្វ័យប្រវត្តិកម្មបង្កើតកិច្ចតែងការ និងស្លាយបង្រៀនដោយប្រើ Multi-LLM Orchestration",
    description:
      "ស្ថាបត្យកម្មកម្រិតខ្ពស់សម្រាប់គ្រូបង្រៀនកម្ពុជា ដែលរួមបញ្ចូល Gemini, Claude និង ChatGPT ក្នុងការបង្កើតវិញ្ញាសា មាតិកាមេរៀន និងស្លាយប្រកបដោយអន្តរកម្ម។",
    metrics: [
      { label: "សន្សំសំចៃពេល", value: "65%" },
      { label: "ការឆ្លើយតប", value: "< 250ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Gemini API", "PostgreSQL", "Redis"],
    featured: true,
    demoUrl: "/courses/ai-for-teachers",
    architectureHighlights: [
      "Streaming LLM token responses ជាមួយ Server-Sent Events (SSE)",
      "Distributed cache architecture ដោយប្រើ Redis ជួយកាត់បន្ថយ Token Cost",
      "Dynamic prompt evaluation pipelines តាមមុខវិជ្ជានីមួយៗ",
    ],
    gradient: "from-blue-600/20 via-indigo-500/15 to-purple-500/10",
  },
  {
    id: "khmer-intelligent-mobile",
    title: "KhmerSmart Assistant Mobile Suite",
    category: "Mobile",
    tagline: "កម្មវិធីទូរស័ព្ទឆ្លងវេទិកា (iOS & Android) ដំណើរការល្បឿន 60 FPS ជាមួយ AI Assistant",
    description:
      "កម្មវិធីទូរស័ព្ទសម្រាប់គ្រូបង្រៀន និងសិស្សានុសិស្ស គាំទ្រ Offline-First Database, Voice-to-Text ភាសាខ្មែរ និងការវិភាគឯកសារ PDF ឆ្លាតវៃ។",
    metrics: [
      { label: "FPS Stability", value: "60 FPS" },
      { label: "Platform", value: "iOS / Android" },
      { label: "Sync Latency", value: "Real-time" },
    ],
    techStack: ["React Native", "Expo", "SwiftUI", "WatermelonDB", "FastAPI"],
    featured: true,
    githubUrl: "https://github.com/naingseiha",
    architectureHighlights: [
      "Offline-first local reactive storage ជាមួយ WatermelonDB",
      "Native bridge modules សរសេរដោយ SwiftUI & Kotlin",
      "End-to-End encrypted local file caching",
    ],
    gradient: "from-cyan-500/20 via-blue-500/15 to-indigo-500/10",
  },
  {
    id: "enterprise-omnichannel-pos",
    title: "Cloud Enterprise Omnichannel & POS",
    category: "Web & Cloud",
    tagline: "ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យខ្នាតធំ ដំណើរការលើ Microservices និង Graph Database",
    description:
      "ប្រព័ន្ធលក់ និងគ្រប់គ្រងស្តុកទំនិញកម្រិត Enterprise ដែលទ្រទ្រង់ប្រតិបត្តិការរាប់ម៉ឺនក្នុងមួយថ្ងៃ ដោយប្រើ Neo4j សម្រាប់វិភាគបណ្តាញផ្គត់ផ្គង់។",
    metrics: [
      { label: "Monthly Requests", value: "1.2M+" },
      { label: "Database Sync", value: "< 50ms" },
      { label: "Architecture", value: "Microservices" },
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Neo4j", "Docker", "AWS"],
    featured: false,
    githubUrl: "https://github.com/naingseiha",
    architectureHighlights: [
      "Graph database querying លើ Neo4j សម្រាប់ Supply-Chain Routing",
      "Containerized microservices លើ Docker និង AWS ECS",
      "Role-based access control (RBAC) & Multi-tenant security",
    ],
    gradient: "from-emerald-500/20 via-teal-500/15 to-blue-500/10",
  },
  {
    id: "vibe-code-antigravity",
    title: "Antigravity Vibe Workspace",
    category: "AI & Systems",
    tagline: "បរិស្ថានបង្កើត App ស្វ័យប្រវត្តិតាមរយៈ Prompt-driven Development",
    description:
      "ឧបករណ៍សម្រាប់គ្រូបង្រៀន និង Developer បង្កើត Web UI & Interactive Mini-Apps ភ្លាមៗដោយគ្រាន់តែប្រើភាសាធម្មជាតិ។",
    metrics: [
      { label: "Build Time", value: "< 10s" },
      { label: "Live Preview", value: "Instant" },
      { label: "Agentic AI", value: "Multi-tool" },
    ],
    techStack: ["React 19", "Next.js", "Framer Motion", "Tailwind CSS v4", "WebContainers"],
    featured: false,
    demoUrl: "/courses",
    architectureHighlights: [
      "In-browser code execution sandbox ជាមួយ WebContainers",
      "Dynamic AST manipulation & component parsing",
      "Fluid micro-animations ជាមួយ Framer Motion spring physics",
    ],
    gradient: "from-violet-500/20 via-purple-500/15 to-pink-500/10",
  },
];
