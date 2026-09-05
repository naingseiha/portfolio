import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "src/content/courses");

export interface LessonSection {
  id: string;
  number?: string;
  title: string;
  duration?: string;
  body: string;
}

export interface ParsedLesson {
  intro: string;
  sections: LessonSection[];
}

export function getLessonMarkdown(courseSlug: string, chapterSlug: string): string | null {
  const filePath = path.join(CONTENT_ROOT, courseSlug, `${chapterSlug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

const SECTION_RE = /<!--\s*section\s+([^>]*?)-->([\s\S]*?)<!--\s*\/section\s*-->/g;
const ATTR_RE = /(\w+)="([^"]*)"/g;

function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  let match: RegExpExecArray | null;
  ATTR_RE.lastIndex = 0;
  while ((match = ATTR_RE.exec(raw))) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

export function parseLessonSections(markdown: string): ParsedLesson {
  const sections: LessonSection[] = [];
  let firstIndex = markdown.length;

  SECTION_RE.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = SECTION_RE.exec(markdown))) {
    if (sections.length === 0) firstIndex = match.index;
    const attrs = parseAttrs(match[1]);
    sections.push({
      id: attrs.id ?? `section-${sections.length + 1}`,
      number: attrs.number,
      title: attrs.title ?? "",
      duration: attrs.duration,
      body: match[2].trim(),
    });
  }

  return { intro: markdown.slice(0, firstIndex).trim(), sections };
}
