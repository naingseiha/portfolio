import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHeader } from "@/components/courses/CourseHeader";
import { LearningOutcomes } from "@/components/courses/LearningOutcomes";
import { Prerequisites } from "@/components/courses/Prerequisites";
import { Curriculum } from "@/components/courses/Curriculum";
import { AiTools } from "@/components/courses/AiTools";
import { PortfolioOutcomes } from "@/components/courses/PortfolioOutcomes";
import { Enrollment } from "@/components/courses/Enrollment";
import { featuredCourse } from "@/lib/courses";

export function generateStaticParams() {
  return [{ slug: featuredCourse.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== featuredCourse.slug) return {};
  return { title: `${featuredCourse.title} | វគ្គបណ្តុះបណ្តាល` };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== featuredCourse.slug) notFound();

  return (
    <>
      <CourseHeader />
      <LearningOutcomes />
      <Prerequisites />
      <Curriculum />
      <AiTools />
      <PortfolioOutcomes />
      <Enrollment />
    </>
  );
}
