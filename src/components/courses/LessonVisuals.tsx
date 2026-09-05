import Image from "next/image";
import {
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  FileQuestion,
  Languages,
  Lightbulb,
  ListChecks,
  MessageSquareText,
  Palette,
  PencilRuler,
  Presentation,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TableProperties,
  Type,
  UserRoundCheck,
  Wand2,
} from "lucide-react";

const toolStyles: Record<string, string> = {
  ChatGPT: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Gemini: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Claude: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
  DeepSeek: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Kimi: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Qwen: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
  Grok: "bg-slate-500/10 text-slate-700 dark:text-slate-300",
};

function ToolMap() {
  const tools = ["ChatGPT", "Gemini", "Claude", "DeepSeek", "Kimi", "Qwen", "Grok"];
  return (
    <figure className="lesson-visual bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.13),transparent_62%)]">
      <div className="mb-5 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
          <BrainCircuit size={27} />
        </span>
        <p className="mt-3 text-sm font-extrabold text-foreground">ការងារមួយ · ជ្រើសរើស AI ដែលសមស្រប · គ្រូជាអ្នកសម្រេចចុងក្រោយ</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {tools.map((tool) => (
          <span key={tool} className={`rounded-xl px-3.5 py-2 text-xs font-extrabold ${toolStyles[tool]}`}>
            {tool}
          </span>
        ))}
      </div>
      <figcaption>Prompt ល្អមួយអាចសាកល្បងលើ AI ច្រើន ហើយប្រៀបធៀបចម្លើយបាន។</figcaption>
    </figure>
  );
}

function ToolComparison() {
  const items = [
    ["ChatGPT", "រៀបចំគំនិត និងសន្ទនាកែលម្អការងារ"],
    ["Gemini", "សាកល្បងជាមួយការងារ និងឯកសារប្រចាំថ្ងៃ"],
    ["Claude", "អាន រៀបចំ និងកែលម្អអត្ថបទវែង"],
    ["DeepSeek", "សាកល្បងការគិតជាជំហាន និងបញ្ហា STEM"],
    ["Kimi", "សាកល្បងសង្ខេបឯកសារ និងបរិបទវែង"],
    ["Qwen", "ជាជម្រើសបន្ថែមសម្រាប់ភាសា និងការវិភាគ"],
    ["Grok", "សាកល្បងប្រធានបទទូទៅ និងការប្រៀបធៀបចម្លើយ"],
  ];
  return (
    <figure className="lesson-visual">
      <div className="mb-4 flex items-center gap-3">
        <SearchCheck className="text-primary" size={22} />
        <div>
          <p className="text-sm font-extrabold text-foreground">ផែនទីជ្រើសរើស AI សម្រាប់ការសាកល្បង</p>
          <p className="text-xs text-muted">មុខងារអាចផ្លាស់ប្តូរ—សូមវាយតម្លៃតាមលទ្ធផលពិត មិនមែនតាមឈ្មោះ brand។</p>
        </div>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {items.map(([name, use]) => (
          <div key={name} className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-surface p-3.5 dark:border-white/[0.08]">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${toolStyles[name]}`}>
              {name.slice(0, 1)}
            </span>
            <div>
              <p className="text-xs font-extrabold text-foreground">{name}</p>
              <p className="mt-0.5 text-xs leading-5 text-foreground-secondary">{use}</p>
            </div>
          </div>
        ))}
      </div>
      <figcaption>ចាប់ផ្តើមពី ១–២ ឧបករណ៍ដែលងាយចូលប្រើ រួចប្រើ prompt ដូចគ្នាដើម្បីប្រៀបធៀប។</figcaption>
    </figure>
  );
}

function SafetyFlow() {
  const steps = [
    [Sparkles, "បង្កើត", "សុំ AI បង្កើតសេចក្តីព្រាង"],
    [SearchCheck, "ពិនិត្យ", "ផ្ទៀងផ្ទាត់ការពិត និងប្រភព"],
    [PencilRuler, "កែសម្រួល", "សម្របតាមសិស្ស និងបរិបទ"],
    [UserRoundCheck, "ប្រើប្រាស់", "គ្រូទទួលខុសត្រូវចុងក្រោយ"],
  ] as const;
  return (
    <figure className="lesson-visual">
      <div className="grid gap-2 sm:grid-cols-4">
        {steps.map(([Icon, title, text], index) => (
          <div key={title} className="relative rounded-2xl bg-surface p-4 text-center ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon size={19} /></span>
            <p className="mt-2 text-xs font-extrabold text-foreground">{index + 1}. {title}</p>
            <p className="mt-1 text-[11px] leading-5 text-muted">{text}</p>
          </div>
        ))}
      </div>
      <figcaption>AI មិនមែនជាជំហានចុងក្រោយទេ—ការពិនិត្យរបស់គ្រូគឺជាផ្នែកសំខាន់បំផុត។</figcaption>
    </figure>
  );
}

function RctfDiagram() {
  const parts = [
    ["R", "Role", "ឱ្យ AI ដើរតួជាអ្នកណា?", "bg-blue-500"],
    ["C", "Context", "តើសិស្ស និងមេរៀនមានបរិបទអ្វី?", "bg-cyan-500"],
    ["T", "Task", "ចង់ឱ្យ AI ធ្វើអ្វីជាក់លាក់?", "bg-violet-500"],
    ["F", "Format", "ចង់បានលទ្ធផលជាទម្រង់អ្វី?", "bg-amber-500"],
  ];
  return (
    <figure className="lesson-visual overflow-hidden">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {parts.map(([letter, title, question, color]) => (
          <div key={letter} className="rounded-2xl bg-surface p-4 ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-black text-white ${color}`}>{letter}</span>
            <p className="mt-3 text-sm font-black text-foreground">{title}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{question}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl bg-[#07162f] px-4 py-3 text-center text-xs font-bold text-sky-100">
        R + C + T + F + លក្ខខណ្ឌត្រួតពិនិត្យ = Prompt ដែលអាចយកទៅប្រើបាន
      </div>
      <figcaption>បើលទ្ធផលមិនទាន់ល្អ កែបរិបទ ឬទម្រង់—មិនចាំបាច់ចាប់ផ្តើមសន្ទនាថ្មីទេ។</figcaption>
    </figure>
  );
}

function PracticeMap() {
  const items = [
    [BookOpenCheck, "កិច្ចតែងការ"],
    [FileQuestion, "សំណួរ និងវិញ្ញាសា"],
    [Languages, "សម្រួលភាសា"],
    [ListChecks, "Rubric វាយតម្លៃ"],
    [MessageSquareText, "សារទៅអាណាព្យាបាល"],
    [Lightbulb, "សកម្មភាពក្នុងថ្នាក់"],
  ] as const;
  return (
    <figure className="lesson-visual">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {items.map(([Icon, text]) => (
          <div key={text} className="flex min-h-24 flex-col items-center justify-center rounded-2xl bg-surface p-3 text-center ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
            <Icon size={21} className="text-primary" />
            <p className="mt-2 text-xs font-bold leading-5 text-foreground">{text}</p>
          </div>
        ))}
      </div>
      <figcaption>ជ្រើសការងារពិតមួយដែលចំណាយពេលច្រើន ហើយសាកល្បង prompt មួយខាងក្រោម។</figcaption>
    </figure>
  );
}

function CompletionCheck() {
  return (
    <figure className="lesson-visual bg-emerald-500/[0.05]">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white"><ShieldCheck size={24} /></span>
        <div>
          <p className="text-sm font-extrabold text-foreground">មុនចប់ជំពូក សូមប្រាកដថាអ្នកអាចធ្វើបាន ៣ យ៉ាង</p>
          <div className="mt-3 grid gap-2 text-xs text-foreground-secondary sm:grid-cols-3">
            {["សរសេរ Prompt តាម R-C-T-F", "ពិនិត្យភាពត្រឹមត្រូវ និងឯកជនភាព", "កែចម្លើយ AI ឱ្យសមនឹងសិស្ស"].map((item) => (
              <span key={item} className="flex gap-2 rounded-xl bg-surface p-3 ring-1 ring-emerald-500/10"><CheckCircle2 size={16} className="shrink-0 text-emerald-600" />{item}</span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

function LessonPlanReference() {
  const pages = [
    {
      src: "/images/courses/ai-for-teachers/chapter-3/physics-lesson-plan-overview.png",
      title: "ទំព័រ ១ · ក្បាលកិច្ចតែងការ",
      note: "ព័ត៌មានទូទៅ វត្ថុបំណង សម្ភារៈ និងគោលវិធីបង្រៀន",
    },
    {
      src: "/images/courses/ai-for-teachers/chapter-3/physics-lesson-plan-activity-1.png",
      title: "ទំព័រ ២ · តារាងសកម្មភាព",
      note: "សកម្មភាពគ្រូ ខ្លឹមសារមេរៀន និងសកម្មភាពសិស្ស",
    },
    {
      src: "/images/courses/ai-for-teachers/chapter-3/physics-lesson-plan-activity-2.png",
      title: "ទំព័រ ៥ · ខ្លឹមសារ និងលំហាត់",
      note: "រូបភាពពន្យល់ ការពង្រឹងពុទ្ធិ និងការវាយតម្លៃ",
    },
  ];

  return (
    <figure className="lesson-visual">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><TableProperties size={21} /></span>
        <div>
          <p className="text-sm font-extrabold text-foreground">មើលទម្រង់កិច្ចតែងការពិត មុនសុំឱ្យ AI បំពេញ</p>
          <p className="mt-1 text-xs leading-5 text-muted">រូបខាងក្រោមដកស្រង់ពីឯកសារ «កិច្ចតែងការរូបវិទ្យា ថ្នាក់ទី១២» ដែលបានផ្តល់សម្រាប់វគ្គនេះ។ ចុចលើរូបដើម្បីពង្រីក។</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {pages.map((page) => (
          <a key={page.src} href={page.src} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-black/[0.07] bg-surface transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg dark:border-white/[0.08]">
            <div className="relative aspect-[0.707/1] overflow-hidden bg-white">
              <Image src={page.src} alt={page.title} fill sizes="(min-width: 640px) 25vw, 80vw" className="object-cover object-top transition duration-300 group-hover:scale-[1.02]" />
            </div>
            <div className="border-t border-black/[0.06] p-3 dark:border-white/[0.08]">
              <p className="text-xs font-extrabold text-foreground">{page.title}</p>
              <p className="mt-1 text-[11px] leading-5 text-muted">{page.note}</p>
            </div>
          </a>
        ))}
      </div>
      <figcaption>សារៈសំខាន់៖ AI ត្រូវរក្សាចំនួនជួរឈរ ពាក្យបច្ចេកទេស និងលំដាប់ដំណាក់កាលតាម Template ដើម—មិនមែនបង្កើត format ថ្មី។</figcaption>
    </figure>
  );
}

function ProductionWorkflow() {
  const steps = [
    ["១", "ភ្ជាប់ប្រភព", "ទំព័រសៀវភៅ + Template ផ្លូវការ"],
    ["២", "ចាក់សោ Format", "ឱ្យ AI ស្រង់ក្បាល និងជួរឈរសិន"],
    ["៣", "បង្កើតសេចក្តីព្រាង", "បំពេញខ្លឹមសារតាមគោលបំណង"],
    ["៤", "Audit ដោយគ្រូ", "ពិនិត្យពេល រូបមន្ត ភាសា និងការវាយតម្លៃ"],
  ];
  return (
    <figure className="lesson-visual bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(99,102,241,0.05))]">
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([number, title, note]) => (
          <div key={number} className="rounded-2xl bg-surface p-4 ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-black text-white">{number}</span>
            <p className="mt-3 text-xs font-extrabold text-foreground">{title}</p>
            <p className="mt-1 text-[11px] leading-5 text-muted">{note}</p>
          </div>
        ))}
      </div>
      <figcaption>លំហូរនេះជួយកាត់បន្ថយការបាត់ format និងការបង្កើតខ្លឹមសារដែលមិនមានក្នុងប្រភព។</figcaption>
    </figure>
  );
}

function ReportWorkflow() {
  return (
    <figure className="lesson-visual">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        {["ទិន្នន័យសរុបដែលលាក់អត្តសញ្ញាណ", "AI បង្កើតសេចក្តីព្រាង", "គ្រូផ្ទៀងផ្ទាត់ និងអនុម័ត"].map((item, index) => (
          <div key={item} className="contents">
            <div className="rounded-2xl bg-surface p-4 text-center text-xs font-bold leading-5 text-foreground ring-1 ring-black/[0.06] dark:ring-white/[0.08]">{item}</div>
            {index < 2 && <span className="hidden text-center font-black text-primary sm:block">→</span>}
          </div>
        ))}
      </div>
      <figcaption>របាយការណ៍ល្អបំបែក «អ្វីដែលទិន្នន័យបង្ហាញ» ចេញពី «ការបកស្រាយរបស់គ្រូ» និងមិនបង្កើតមូលហេតុដោយគ្មានភស្តុតាង។</figcaption>
    </figure>
  );
}

function TwoStepWorkflow() {
  const steps = [
    [Wand2, "Claude / Kimi", "រៀបចំគំនិត និងរចនាសម្ព័ន្ធស៊ីជម្រៅ"],
    [Presentation, "Gemini", "បំលែងជាស្លាយ Google Slides ស្រេច"],
  ] as const;
  return (
    <figure className="lesson-visual bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(99,102,241,0.05))]">
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        {steps.map(([Icon, title, note], index) => (
          <div key={title} className="contents">
            <div className="rounded-2xl bg-surface p-4 text-center ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={21} />
              </span>
              <p className="mt-2 text-sm font-black text-foreground">{title}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{note}</p>
            </div>
            {index === 0 && <span className="hidden text-center text-xl font-black text-primary sm:block">→</span>}
          </div>
        ))}
      </div>
      <figcaption>Prompt ខ្លីតែមួយបន្ទាត់ចេញផ្ទាល់ទៅ Gemini ច្រើនតែឱ្យលទ្ធផលរាក់—បំបែកជា ២ជំហានផ្តល់ខ្លឹមសារស៊ីជម្រៅជាង។</figcaption>
    </figure>
  );
}

function SlideDesignPrinciples() {
  const colorParts = [
    ["៦០%", "ផ្ទៃខាងក្រោយ", "bg-slate-200 dark:bg-slate-700"],
    ["៣០%", "រចនាសម្ព័ន្ធ/អត្ថបទ", "bg-blue-600"],
    ["១០%", "ចំណុចសំខាន់", "bg-amber-500"],
  ] as const;
  return (
    <figure className="lesson-visual">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-surface p-4 ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
          <div className="mb-2 flex items-center gap-2">
            <Type size={18} className="text-primary" />
            <p className="text-xs font-extrabold text-foreground">ក្បួន ៦x៦</p>
          </div>
          <p className="text-xs leading-5 text-muted">អតិបរមា ៦ បន្ទាត់ក្នុងមួយស្លាយ · ៦ ពាក្យក្នុងមួយបន្ទាត់ · «តិច តែខ្លឹម»</p>
        </div>
        <div className="rounded-2xl bg-surface p-4 ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
          <div className="mb-2 flex items-center gap-2">
            <Palette size={18} className="text-primary" />
            <p className="text-xs font-extrabold text-foreground">ច្បាប់ពណ៌ ៦០-៣០-១០</p>
          </div>
          <div className="flex h-3 overflow-hidden rounded-full">
            {colorParts.map(([pct, , color]) => (
              <span key={pct} className={color} style={{ width: pct }} />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
            {colorParts.map(([pct, label]) => (
              <span key={label}>{pct} {label}</span>
            ))}
          </div>
        </div>
      </div>
      <figcaption>Font ណែនាំ៖ Kantumruy Pro ឬ Battambang · អត្ថបទតួសេចក្តីមិនតូចជាង 20pt។</figcaption>
    </figure>
  );
}

function HandsOnTimeline() {
  const steps = [
    ["១", "ជ្រើសរើសប្រធានបទ", "១០ នាទី"],
    ["២", "រៀបចំមាតិកា", "៣០ នាទី"],
    ["៣", "ផលិតស្លាយ", "៤០ នាទី"],
    ["៤", "កែសម្រួល", "៤០ នាទី"],
    ["៥", "បង្ហាញ", "៣០ នាទី"],
  ];
  return (
    <figure className="lesson-visual">
      <div className="grid gap-2.5 sm:grid-cols-5">
        {steps.map(([number, title, time]) => (
          <div key={number} className="rounded-2xl bg-surface p-3.5 text-center ring-1 ring-black/[0.06] dark:ring-white/[0.08]">
            <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-black text-white">{number}</span>
            <p className="mt-2 text-xs font-extrabold leading-5 text-foreground">{title}</p>
            <p className="mt-1 text-[11px] text-muted">{time}</p>
          </div>
        ))}
      </div>
      <figcaption>សរុប ២ ម៉ោង ៣០ នាទី ចាប់ពីជ្រើសមេរៀន រហូតដល់សំណុំស្លាយត្រៀមបង្ហាញ។</figcaption>
    </figure>
  );
}

function WrapUpSummary() {
  return (
    <figure className="lesson-visual bg-emerald-500/[0.05]">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white"><ShieldCheck size={24} /></span>
        <div>
          <p className="text-sm font-extrabold text-foreground">មុនចប់ជំពូក សូមប្រាកដថាអ្នកអាចធ្វើបាន ៣ យ៉ាង</p>
          <div className="mt-3 grid gap-2 text-xs text-foreground-secondary sm:grid-cols-3">
            {["បង្កើតស្លាយពី Workflow ២ជំហាន", "អនុវត្តគោលការណ៍រចនា ៦x៦/៦០-៣០-១០", "រៀបចំ Theme ដងតែម្តងសម្រាប់ប្រើឡើងវិញ"].map((item) => (
              <span key={item} className="flex gap-2 rounded-xl bg-surface p-3 ring-1 ring-emerald-500/10"><CheckCircle2 size={16} className="shrink-0 text-emerald-600" />{item}</span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

export function LessonVisual({ sectionId }: { sectionId: string }) {
  if (sectionId === "lesson-1-1") return <ToolMap />;
  if (sectionId === "lesson-1-2") return <ToolComparison />;
  if (sectionId === "lesson-1-3") return <SafetyFlow />;
  if (sectionId === "lesson-1-4") return <RctfDiagram />;
  if (sectionId === "lesson-1-5") return <PracticeMap />;
  if (sectionId === "lesson-1-6") return <CompletionCheck />;
  if (sectionId === "lesson-3-1") return <LessonPlanReference />;
  if (sectionId === "lesson-3-2") return <ProductionWorkflow />;
  if (sectionId === "lesson-3-3") return <ReportWorkflow />;
  if (sectionId === "lesson-2-1") return <TwoStepWorkflow />;
  if (sectionId === "lesson-2-2") return <SlideDesignPrinciples />;
  if (sectionId === "lesson-2-3") return <HandsOnTimeline />;
  if (sectionId === "lesson-2-4") return <WrapUpSummary />;
  return null;
}
