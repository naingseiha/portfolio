import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHeader } from "@/components/courses/CourseHeader";
import { LearningOutcomes } from "@/components/courses/LearningOutcomes";
import { Prerequisites } from "@/components/courses/Prerequisites";
import { Curriculum } from "@/components/courses/Curriculum";
import { AiTools } from "@/components/courses/AiTools";
import { PortfolioOutcomes } from "@/components/courses/PortfolioOutcomes";
import { InstructorSection } from "@/components/courses/InstructorSection";
import { ReviewsList } from "@/components/courses/ReviewsList";
import { CourseDetailSidebar } from "@/components/courses/CourseDetailSidebar";
import { Enrollment } from "@/components/courses/Enrollment";
import { allCourses, getCourseBySlug } from "@/lib/courses";

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | វគ្គបណ្តុះបណ្តាល`,
    description: course.tagline,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Titanium Hero Header */}
      <CourseHeader course={course} />

      {/* Main 2-Column Responsive Layout */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_390px] items-start">
          {/* Left Column: Learning Content, Curriculum, Prerequisites, AI Tools, Instructor, Reviews, Enrollment */}
          <div className="flex flex-col gap-2 min-w-0">
            <LearningOutcomes outcomes={course.learningOutcomes} />
            <Curriculum chapters={course.curriculum} courseSlug={course.slug} />
            <Prerequisites prerequisites={course.prerequisites} />
            {course.aiTools && course.aiTools.length > 0 && (
              <AiTools aiTools={course.aiTools} />
            )}
            {course.portfolioOutcomes && course.portfolioOutcomes.length > 0 && (
              <PortfolioOutcomes portfolioOutcomes={course.portfolioOutcomes} />
            )}
            <InstructorSection />
            <ReviewsList
              reviews={course.reviews}
              rating={course.rating}
              reviewsCount={course.reviewsCount}
            />
            <Enrollment course={course} />
          </div>

          {/* Right Column: Sticky Pricing & Action Sidebar */}
          <div className="order-first lg:order-last">
            <CourseDetailSidebar course={course} />
          </div>
        </div>
      </main>
    </div>
  );
}
