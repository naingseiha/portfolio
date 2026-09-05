export interface Chapter {
  slug: string;
  title: string;
  hours: number;
  lectures: number;
  summary: string;
  activities: string[];
  hasFullLesson?: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  category: "ai-education" | "web-dev" | "mobile-dev" | "ai-agents";
  categoryKh: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  durationHours: number;
  chapterCount: number;
  lectureCount: number;
  levelRange: string;
  audience: string;
  price: string;
  originalPrice?: string;
  schedule?: string;
  badge?: "Bestseller" | "Featured" | "Hot & New";
  gradient: string;
  accentColor: string;
  iconName: "graduation-cap" | "code" | "smartphone" | "bot";
  updatedDate: string;
  language: string;
  learningOutcomes: string[];
  prerequisites: { icon: "laptop" | "mail-check" | "monitor" | "wifi" | "code"; label: string }[];
  curriculum: Chapter[];
  aiTools: { name: string; role: string }[];
  portfolioOutcomes: { icon: "presentation" | "file-text" | "clipboard-check" | "gem" | "video" | "app-window"; title: string }[];
  reviews: Review[];
}

export const courseCategories = [
  { id: "all", label: "ទាំងអស់" },
  { id: "ai-education", label: "AI សម្រាប់គ្រូបង្រៀន" },
  { id: "web-dev", label: "Web Architecture" },
  { id: "mobile-dev", label: "Mobile Apps" },
  { id: "ai-agents", label: "Vibe Coding & Agents" },
];

export const allCourses: Course[] = [
  {
    slug: "ai-for-teachers",
    title: "AI សម្រាប់គ្រូបង្រៀន (AI for Educators)",
    tagline:
      "ប្រើប្រាស់ឧបករណ៍ AI ទំនើបៗ ដើម្បីរៀបចំមេរៀន ស្លាយ និងកិច្ចតែងការក្នុងរយៈពេលខ្លី សន្សំពេលវេលា និងលើកកម្ពស់គុណភាពបង្រៀន។",
    image: "/images/courses/ai-for-teachers.jpg",
    category: "ai-education",
    categoryKh: "AI សម្រាប់គ្រូបង្រៀន",
    rating: 4.9,
    reviewsCount: 128,
    studentsCount: 350,
    durationHours: 32,
    chapterCount: 8,
    lectureCount: 24,
    levelRange: "មូលដ្ឋាន → កម្រិតខ្ពស់",
    audience: "គ្រូបង្រៀនគ្រប់កម្រិត និងអ្នកគ្រប់គ្រងការអប់រំ",
    price: "អាហារូបករណ៍",
    originalPrice: "$120",
    badge: "Bestseller",
    gradient: "from-blue-500/10 via-indigo-500/5 to-purple-500/10",
    accentColor: "#0071e3",
    iconName: "graduation-cap",
    updatedDate: "កុម្ភៈ ២០២៦",
    language: "ភាសាខ្មែរ (Khmer)",
    learningOutcomes: [
      "យល់ដឹងពីមូលដ្ឋាន AI និងបច្ចេកទេស Prompt Engineering ជាក់ស្តែង",
      "ប្រើ AI រៀបចំកិច្ចតែងការ និងរបាយការណ៍បង្រៀនបានយ៉ាងរហ័ស",
      "បង្កើតស្លាយមេរៀនប្រកបដោយអន្តរកម្មដោយ Gemini + Google Slides",
      "បង្កើតវិញ្ញាសា លំហាត់ និង Gemini Gems ផ្ទាល់ខ្លួនសម្រាប់ប្រើប្រាស់ឡើងវិញ",
      "ផលិតវីដេអូអប់រំ និងរូបភាពគំនូរជីវចលដោយប្រើ AI",
      "យល់ដឹងពី Vibe Coding និងបង្កើត Web App ជំនួយការបង្រៀនដំបូង",
      "បង្កើត Portfolio ស្នាដៃ AI ពេញលេញសម្រាប់តាំងបង្ហាញ",
    ],
    prerequisites: [
      { icon: "laptop", label: "មានកុំព្យូទ័រ (Laptop/Desktop) ផ្ទាល់ខ្លួន" },
      { icon: "mail-check", label: "មានគណនី Gmail សកម្ម" },
      { icon: "monitor", label: "ចំណេះដឹងកុំព្យូទ័រទូទៅកម្រិតមធ្យម" },
      { icon: "wifi", label: "អ៊ីនធឺណិតមានស្ថិរភាពសម្រាប់ការអនុវត្ត" },
    ],
    curriculum: [
      {
        slug: "ai-prompt-engineering-basics",
        title: "ជំពូកទី ១៖ មូលដ្ឋានគ្រឹះ AI និង Prompt Engineering",
        hours: 4,
        lectures: 3,
        summary:
          "ស្វែងយល់ពីគោលគំនិត AI, Generative AI, LLM និងបច្ចេកទេសសរសេរ Prompt ឲ្យមានប្រសិទ្ធភាពខ្ពស់។",
        activities: [
          "ស្គាល់ប្រភេទឧបករណ៍ AI ដែលមាននាពេលបច្ចុប្បន្ន (Gemini, ChatGPT, Claude)",
          "អនុវត្តសរសេរ Prompt តាមរូបមន្ត Role-Context-Task-Constraint",
          "លំហាត់ប្រៀបធៀបគុណភាពលទ្ធផលរវាង Prompt សាមញ្ញ និង Prompt វិជ្ជាជីវៈ",
        ],
        hasFullLesson: true,
      },
      {
        slug: "lesson-plans-and-reports",
        title: "ជំពូកទី ២៖ ការរៀបចំកិច្ចតែងការ និងរបាយការណ៍បង្រៀន",
        hours: 5,
        lectures: 4,
        summary:
          "ប្រើ AI ជួយរៀបចំកិច្ចតែងការបង្រៀន និងរបាយការណ៍ការងារឲ្យលឿន ត្រឹមត្រូវ និងទាក់ទាញ។",
        activities: [
          "បង្កើត Prompt Template សម្រាប់កិច្ចតែងការមេរៀនគ្រប់មុខវិជ្ជា",
          "អនុវត្តរៀបចំកិច្ចតែងការសម្រាប់មុខវិជ្ជាផ្ទាល់ខ្លួន",
          "កែសម្រួល និងបង្កើនគុណភាពរបាយការណ៍ដោយ AI",
        ],
      },
      {
        slug: "slides-with-gemini",
        title: "ជំពូកទី ៣៖ បង្កើតស្លាយមេរៀនដោយ Gemini + Google Slides",
        hours: 5,
        lectures: 3,
        summary:
          "ប្រើប្រាស់ Gemini រួមជាមួយ Google Slides ដើម្បីបង្កើតស្លាយមេរៀនទំនើប មានអន្តរកម្ម និងរូបភាពស្អាត។",
        activities: [
          "បង្កើតគំរោងមាតិកាស្លាយពី Prompt តែមួយ",
          "រចនា Layout និងបន្ថែមរូបភាព/គំនូសតាងដោយ AI",
          "ចែករំលែក និង Export ស្លាយសម្រាប់ប្រើក្នុងថ្នាក់ជាក់ស្តែង",
        ],
      },
      {
        slug: "quizzes-and-gemini-gems",
        title: "ជំពូកទី ៤៖ វិញ្ញាសា/លំហាត់ និង Gemini Gems ផ្ទាល់ខ្លួន",
        hours: 4,
        lectures: 3,
        summary:
          "បង្កើតវិញ្ញាសា និងលំហាត់ស្វ័យប្រវត្តិ ព្រមទាំងបង្កើត Gemini Gem ផ្ទាល់ខ្លួនសម្រាប់ការងារឡើងវិញ។",
        activities: [
          "បង្កើតវិញ្ញាសាច្រើនប្រភេទ (ជ្រើសរើសចម្លើយ, ត្រូវ/ខុស, សរសេរឆ្លើយ)",
          "កំណត់រចនាសម្ព័ន្ធ Gemini Gem សម្រាប់ការប្រើប្រាស់ម្តងហើយម្តងទៀត",
          "សាកល្បង Gem ជាមួយស្ថានភាពក្លែងក្លាយក្នុងថ្នាក់",
        ],
      },
      {
        slug: "video-and-audio-production",
        title: "ជំពូកទី ៥៖ ការផលិតវីដេអូអប់រំ និងសំឡេងដោយ AI",
        hours: 4,
        lectures: 3,
        summary:
          "ស្គាល់ឧបករណ៍ AI ជំនួយផលិតវីដេអូខ្លីៗសម្រាប់មេរៀន ចាប់ពីស្គ្រីប រហូតដល់សំឡេងនិយាយ។",
        activities: [
          "សរសេរស្គ្រីបវីដេអូខ្លីមួយដោយ AI",
          "បង្កើតវីដេអូ/animation ខ្លីជាមួយឧបករណ៍ AI",
          "បន្ថែមសំឡេងនិយាយ (Voice-over) ដោយ AI",
        ],
      },
      {
        slug: "intro-to-vibe-coding",
        title: "ជំពូកទី ៦៖ សេចក្តីផ្តើម Vibe Coding & Google Antigravity",
        hours: 4,
        lectures: 3,
        summary:
          "ស្គាល់គោលគំនិត \"Vibe Coding\" និងបង្កើត App ជំនួយការដោយមិនចាំបាច់សរសេរកូដស្មុគស្មាញ។",
        activities: [
          "ចូលប្រើ និងស្គាល់ interface របស់ Google Antigravity",
          "សាកល្បងបង្កើត App សាមញ្ញមួយពី Prompt",
          "យល់ដឹងពីលំហូរការងារ (workflow) នៃ Vibe Coding",
        ],
      },
      {
        slug: "building-a-teaching-app",
        title: "ជំពូកទី ៧៖ បង្កើត App ជំនួយការបង្រៀនជាក់ស្តែង",
        hours: 5,
        lectures: 4,
        summary:
          "អនុវត្តជាក់ស្តែងក្នុងការបង្កើត App ជំនួយការបង្រៀនតាមតម្រូវការផ្ទាល់ខ្លួន ដោយប្រើជំនាញដែលបានរៀន។",
        activities: [
          "កំណត់តម្រូវការ App សម្រាប់ថ្នាក់រៀនផ្ទាល់ខ្លួន",
          "បង្កើត App ដំបូងដោយ Vibe Coding",
          "សាកល្បង និងកែលម្អ App ឱ្យដំណើរការរលូន",
        ],
      },
      {
        slug: "final-presentation",
        title: "ជំពូកទី ៨៖ បទបង្ហាញគម្រោង និងវាយតម្លៃចុងក្រោយ",
        hours: 1,
        lectures: 1,
        summary:
          "បង្ហាញលទ្ធផលការងារទាំងអស់ចំពោះមុខថ្នាក់ និងទទួលបានវិញ្ញាបនបត្របញ្ជាក់ការសិក្សា។",
        activities: [
          "រៀបចំបទបង្ហាញខ្លីអំពី App/Portfolio",
          "ទទួលមតិកែលម្អពីគ្រូបង្គោល និងមិត្តរួមថ្នាក់",
          "ទទួលវិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សាផ្លូវការ",
        ],
      },
    ],
    aiTools: [
      { name: "Gemini", role: "ជំនួយសរសេរខ្លឹមសារ បង្កើតស្លាយ និង Gemini Gems ផ្ទាល់ខ្លួន" },
      { name: "ChatGPT", role: "ជំនួយសរសេរ Prompt រៀបចំកិច្ចតែងការ និងគំនិតច្នៃប្រឌិត" },
      { name: "Claude", role: "ជំនួយវិភាគ និងសរសេរខ្លឹមសារវែងៗឲ្យមានលក្ខណៈវិជ្ជាជីវៈ" },
      { name: "Google Antigravity", role: "ឧបករណ៍ Vibe Coding សម្រាប់បង្កើត App ដោយប្រើ AI" },
    ],
    portfolioOutcomes: [
      { icon: "presentation", title: "ស្លាយមេរៀនអន្តរកម្ម" },
      { icon: "file-text", title: "កិច្ចតែងការបង្រៀនទំនើប" },
      { icon: "clipboard-check", title: "វិញ្ញាសា និងលំហាត់ស្វ័យប្រវត្តិ" },
      { icon: "gem", title: "Gemini Gem ផ្ទាល់ខ្លួន" },
      { icon: "video", title: "វីដេអូអប់រំខ្លី" },
      { icon: "app-window", title: "App ជំនួយការបង្រៀន" },
    ],
    reviews: [
      {
        id: "rev-1",
        name: "សួស ពិសិដ្ឋ",
        role: "គ្រូបង្រៀនវិទ្យាល័យព្រះស៊ីសុវត្ថិ",
        rating: 5,
        date: "២ សប្តាហ៍មុន",
        comment:
          "វគ្គនេះបានផ្លាស់ប្តូររបៀបរៀបចំកិច្ចតែងការរបស់ខ្ញុំទាំងស្រុង។ ពីមុនចំណាយពេល ៣-៤ ម៉ោង ឥឡូវសល់ត្រឹមតែ ៣០ នាទី ហើយស្លាយបង្រៀនមានភាពទាក់ទាញខ្លាំង!",
      },
      {
        id: "rev-2",
        name: "ចាន់ ធីតា",
        role: "សាស្ត្រាចារ្យសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
        rating: 5,
        date: "១ ខែមុន",
        comment:
          "ការបង្រៀនរបស់លោកគ្រូ សីហា ច្បាស់លាស់ ងាយយល់ និងផ្តោតលើការអនុវត្តពិតប្រាកដ។ ខ្ញុំពេញចិត្តខ្លាំងត្រង់ផ្នែកបង្កើត Gemini Gems និង Vibe Coding!",
      },
      {
        id: "rev-3",
        name: "ម៉ៅ វុទ្ធី",
        role: "នាយករងសាលាបឋមសិក្សា",
        rating: 5,
        date: "២ ខែមុន",
        comment:
          "ជាវគ្គសិក្សា AI ដ៏មានតម្លៃបំផុតសម្រាប់វិស័យអប់រំនៅកម្ពុជា។ មិនត្រឹមតែចេះប្រើ AI ទេ ថែមទាំងយល់ដឹងពីក្រមសីលធម៌នៃការប្រើប្រាស់ទៀតផង។",
      },
    ],
  },
  {
    slug: "nextjs-fullstack-mastery",
    title: "Next.js 16 & React 19 Full-Stack Architecture",
    tagline:
      "កសាងកម្មវិធី Web កម្រិត Enterprise ប្រកបដោយ High Performance, Edge SSR, Server Actions និង Clean Architecture។",
    image: "/images/courses/nextjs-fullstack.jpg",
    category: "web-dev",
    categoryKh: "Web Architecture",
    rating: 4.95,
    reviewsCount: 84,
    studentsCount: 220,
    durationHours: 40,
    chapterCount: 10,
    lectureCount: 36,
    levelRange: "មធ្យម → កម្រិតវិជ្ជាជីវៈ",
    audience: "Frontend/Full-Stack Developers ដែលចង់ឈានទៅកម្រិត Senior",
    price: "$89",
    originalPrice: "$150",
    badge: "Featured",
    gradient: "from-sky-500/10 via-blue-500/5 to-cyan-500/10",
    accentColor: "#0284c7",
    iconName: "code",
    updatedDate: "មករា ២០២៦",
    language: "ភាសាខ្មែរ (Khmer)",
    learningOutcomes: [
      "ស្ទាត់ជំនាញ Next.js 16 App Router, Turbopack, និង React 19 Server Components",
      "យល់ច្បាស់ពី Streaming SSR, Suspense Boundaries និង Zero-Bundle Waterfalls",
      "ស្ថាបត្យកម្ម Modular Clean Architecture និង State Management ទំនើប",
      "ការតភ្ជាប់ Database (PostgreSQL, Prisma) និង Caching ជាមួយ Redis",
      "Deploy លើ Vercel, AWS ECS ជាមួយ CI/CD Pipeline ស្វ័យប្រវត្តិ",
    ],
    prerequisites: [
      { icon: "code", label: "មានចំណេះដឹងមូលដ្ឋាន JavaScript & React" },
      { icon: "laptop", label: "កុំព្យូទ័រដែលមានដំឡើង Node.js និង Git" },
    ],
    curriculum: [
      {
        slug: "nextjs16-edge-rsc-architecture",
        title: "ជំពូកទី ១៖ ស្ថាបត្យកម្ម Next.js 16 Edge & React 19 RSC",
        hours: 4,
        lectures: 4,
        summary: "យល់ដឹងពីមូលដ្ឋាន Server Components vs Client Components និងការដំណើរការលើ Edge Runtime។",
        activities: ["Setup Turbopack", "វិភាគ Rendering Performance", "បំបាត់ Client Bundles ដែលមិនចាំបាច់"],
      },
      {
        slug: "routing-layouts-server-actions",
        title: "ជំពូកទី ២៖ Routing, Layouts & Server Actions",
        hours: 5,
        lectures: 4,
        summary: "គ្រប់គ្រង Nested Layouts, Parallel Routes, Intercepting Routes និង Type-safe Server Actions។",
        activities: ["អនុវត្ត Server Actions ជាមួយ Zod validation", "បង្កើត Optimistic UI Updates"],
      },
      {
        slug: "database-integration-redis-caching",
        title: "ជំពូកទី ៣៖ Database Integration & Redis Caching",
        hours: 5,
        lectures: 4,
        summary: "ការតភ្ជាប់ PostgreSQL ដោយ Prisma ORM និងការកំណត់ Cache Strategy តាម Edge។",
        activities: ["រៀបចំ Database Schema", "Implement Redis distributed caching"],
      },
    ],
    aiTools: [
      { name: "Next.js 16", role: "Framework ស្នូលសម្រាប់ Full-Stack Web" },
      { name: "Tailwind CSS v4", role: "CSS Engine ល្បឿនលឿន" },
      { name: "TypeScript", role: "Type-safety កម្រិត Enterprise" },
    ],
    portfolioOutcomes: [
      { icon: "app-window", title: "Enterprise SaaS Platform" },
      { icon: "file-text", title: "Full-Stack API Documentation" },
    ],
    reviews: [
      {
        id: "rev-101",
        name: "សុខ សុភ័ក្ត្រ",
        role: "Full-Stack Developer នៅក្រុមហ៊ុនបច្ចេកវិទ្យា",
        rating: 5,
        date: "៣ សប្តាហ៍មុន",
        comment: "វគ្គនេះជួយឱ្យខ្ញុំយល់ច្បាស់ពី Server Components និងរបៀប Optimize Performance ដល់កម្រិតកំពូល!",
      },
    ],
  },
  {
    slug: "react-native-cross-platform",
    title: "React Native & Expo: កសាង Mobile Apps 60 FPS",
    tagline:
      "អភិវឌ្ឍកម្មវិធីទូរស័ព្ទ iOS និង Android ដែលមាន Native Performance, Offline-First Sync និង UI ស្រស់ស្អាត។",
    image: "/images/courses/react-native.jpg",
    category: "mobile-dev",
    categoryKh: "Mobile Apps",
    rating: 4.88,
    reviewsCount: 62,
    studentsCount: 180,
    durationHours: 35,
    chapterCount: 8,
    lectureCount: 28,
    levelRange: "មូលដ្ឋាន → មធ្យម",
    audience: "អ្នកដែលចង់ចេះបង្កើត App ទូរស័ព្ទលក់លើ App Store & Play Store",
    price: "$79",
    originalPrice: "$130",
    badge: "Hot & New",
    gradient: "from-indigo-500/10 via-violet-500/5 to-purple-500/10",
    accentColor: "#6366f1",
    iconName: "smartphone",
    updatedDate: "កុម្ភៈ ២០២៦",
    language: "ភាសាខ្មែរ (Khmer)",
    learningOutcomes: [
      "បង្កើត Mobile App សម្រាប់ iOS និង Android ពី Codebase តែមួយ",
      "ប្រើប្រាស់ Expo SDK 52 ទំនើប និង Native Modules",
      "រចនា Animations រលូន 60 FPS ជាមួយ Reanimated 3",
      "ស្ថាបត្យកម្ម Offline-First Data Storage ជាមួយ WatermelonDB / SQLite",
      "Deploy កម្មវិធីឡើង Apple App Store & Google Play Store",
    ],
    prerequisites: [
      { icon: "code", label: "ចំណេះដឹងមូលដ្ឋាន JavaScript/TypeScript" },
      { icon: "laptop", label: "កុំព្យូទ័រ Mac ឬ Windows និងទូរស័ព្ទសម្រាប់តេស្ត" },
    ],
    curriculum: [
      {
        slug: "expo-sdk-mobile-navigation",
        title: "ជំពូកទី ១៖ មូលដ្ឋាន Expo SDK និង Mobile Navigation",
        hours: 4,
        lectures: 4,
        summary: "ស្គាល់ Expo Router, Native Stack, Bottom Tabs និង Gesture Handlers។",
        activities: ["Setup Expo Project", "បង្កើត Responsive Navigation Stack"],
      },
      {
        slug: "native-animations-60fps",
        title: "ជំពូកទី ២៖ Native Animations 60 FPS",
        hours: 5,
        lectures: 4,
        summary: "បង្កើតបទពិសោធន៍រលូនតាមរយៈ React Native Reanimated និង Skia Graphics។",
        activities: ["បង្កើត Interactive Gesture Cards", "Micro-interactions ពេល Scroll"],
      },
    ],
    aiTools: [
      { name: "React Native", role: "Framework បង្កើត Native Apps" },
      { name: "Expo", role: "Ecosystem និង Native Tooling" },
    ],
    portfolioOutcomes: [
      { icon: "app-window", title: "Complete iOS & Android App" },
    ],
    reviews: [
      {
        id: "rev-201",
        name: "វ៉ាន់ វណ្ណា",
        role: "Mobile App Engineer",
        rating: 5,
        date: "១ ខែមុន",
        comment: "រៀនចប់អាចបង្កើត App ដាក់លើទូរស័ព្ទប្រើប្រាស់បានភ្លាមៗ ច្បាស់លាស់ល្អណាស់!",
      },
    ],
  },
  {
    slug: "vibe-coding-with-gemini",
    title: "Vibe Coding & AI Agents: សាងសង់ Software ដោយ Prompt",
    tagline:
      "ស្វែងយល់ពីបដិវត្តន៍ Vibe Coding — បង្កើត Full Products, MVP និង AI Agents ដោយប្រើប្រាស់ Gemini និង Antigravity។",
    image: "/images/courses/vibe-coding.jpg",
    category: "ai-agents",
    categoryKh: "Vibe Coding & Agents",
    rating: 4.98,
    reviewsCount: 95,
    studentsCount: 290,
    durationHours: 25,
    chapterCount: 6,
    lectureCount: 20,
    levelRange: "គ្រប់កម្រិត",
    audience: "Developers, Designers, Founders និងអ្នកស្រឡាញ់ AI",
    price: "$69",
    originalPrice: "$110",
    badge: "Bestseller",
    gradient: "from-emerald-500/10 via-teal-500/5 to-green-500/10",
    accentColor: "#10b981",
    iconName: "bot",
    updatedDate: "កុម្ភៈ ២០២៦",
    language: "ភាសាខ្មែរ (Khmer)",
    learningOutcomes: [
      "យល់ដឹងពីទស្សនវិជ្ជា Vibe Coding និងរបៀបសហការជាមួយ AI Coding Agents",
      "ប្រើប្រាស់ Google Antigravity និង Claude Code សម្រាប់បង្កើត Project ពី Scratch",
      "បច្ចេកទេស Context Engineering, Multi-agent workflows, និង Spec-Driven Development",
      "កសាង Full-Stack Web Application ពេញលេញក្នុងរយៈពេលត្រឹមតែប៉ុន្មានម៉ោង",
    ],
    prerequisites: [
      { icon: "laptop", label: "កុំព្យូទ័រ និងគណនី Gemini / Antigravity" },
      { icon: "monitor", label: "មិនចាំបាច់មានបទពិសោធន៍សរសេរកូដស៊ីជម្រៅឡើយ" },
    ],
    curriculum: [
      {
        slug: "what-is-vibe-coding",
        title: "ជំពូកទី ១៖ អ្វីទៅជា Vibe Coding?",
        hours: 3,
        lectures: 3,
        summary: "ស្វែងយល់ពីការផ្លាស់ប្តូរនៃពិភពវិស្វកម្មសូហ្វវែរ និងរបៀបដែល AI ជួយបង្កើត Software។",
        activities: ["Setup Development Environment", "អនុវត្ត First Vibe Prompt"],
      },
      {
        slug: "multi-agent-coding-workflows",
        title: "ជំពូកទី ២៖ Multi-Agent Coding Workflows",
        hours: 5,
        lectures: 4,
        summary: "ប្រើប្រាស់ Planner, Coder, និង Reviewer subagents ដើម្បីបង្កើតស្ថាបត្យកម្មកូដស្អាត។",
        activities: ["បង្កើត Subagent ផ្ទាល់ខ្លួន", "Debugging កូដដោយ AI"],
      },
    ],
    aiTools: [
      { name: "Google Antigravity", role: "AI Agentic Development Assistant" },
      { name: "Gemini 2.5 Flash", role: "Reasoning & Coding LLM" },
    ],
    portfolioOutcomes: [
      { icon: "app-window", title: "Live Deployed MVP Project" },
    ],
    reviews: [
      {
        id: "rev-301",
        name: "ហេង សុវណ្ណ",
        role: "Startup Founder",
        rating: 5,
        date: "២ សប្តាហ៍មុន",
        comment: "វគ្គនេះបើកភ្នែកខ្ញុំតែម្តង! ឥឡូវខ្ញុំអាចបង្កើត MVP ដោយខ្លួនឯងយ៉ាងលឿនដោយមិនបាច់រង់ចាំច្រើនខែ។",
      },
    ],
  },
];

export const featuredCourse = allCourses[0];
export const learningOutcomes = featuredCourse.learningOutcomes;
export const prerequisites = featuredCourse.prerequisites;
export const curriculum = featuredCourse.curriculum;
export const aiTools = featuredCourse.aiTools;
export const portfolioOutcomes = featuredCourse.portfolioOutcomes;

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}

export function getChapterBySlug(
  courseSlug: string,
  chapterSlug: string,
): { course: Course; chapter: Chapter; index: number } | undefined {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  const index = course.curriculum.findIndex((c) => c.slug === chapterSlug);
  if (index === -1) return undefined;
  return { course, chapter: course.curriculum[index], index };
}

export const googleFormEmbedUrl: string | null =
  "https://docs.google.com/forms/d/e/1FAIpQLSd5jXokEqRtPB30mkk-E96G_3DfargWN7-RONYcZXAfeJsHrg/viewform?embedded=true";

export const enrollmentFields = [
  { label: "ឈ្មោះពេញ (Full Name)" },
  { label: "លេខទូរស័ព្ទ / Telegram" },
  { label: "អ៊ីមែល (Email Address)" },
  { label: "កម្រិតសិក្សា ឬជំនាញបច្ចុប្បន្ន" },
];
