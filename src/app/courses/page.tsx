import type { Metadata } from "next";
import { CoursesCatalog } from "@/components/courses/CoursesCatalog";

export const metadata: Metadata = {
  title: "វគ្គបណ្តុះបណ្តាលជំនាញ | ណាំង សីហា",
  description:
    "កម្មវិធីបណ្តុះបណ្តាល AI សម្រាប់គ្រូបង្រៀន, Next.js 16 Web Architecture, React Native Mobile Development និង Vibe Coding។",
};

export default function CoursesPage() {
  return <CoursesCatalog />;
}
