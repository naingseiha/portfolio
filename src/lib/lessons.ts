import fs from "fs";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "src/content/courses");

export function getLessonMarkdown(courseSlug: string, chapterSlug: string): string | null {
  const filePath = path.join(CONTENT_ROOT, courseSlug, `${chapterSlug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}
