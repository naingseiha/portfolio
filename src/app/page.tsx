import { Hero } from "@/components/home/Hero";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { Expertise } from "@/components/home/Expertise";
import { FeaturedCourse } from "@/components/home/FeaturedCourse";
import { Approach } from "@/components/home/Approach";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsShowcase />
      <Expertise />
      <FeaturedCourse />
      <Approach />
      <AboutTeaser />
      <CallToAction />
    </>
  );
}

