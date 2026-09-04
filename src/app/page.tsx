import { Hero } from "@/components/home/Hero";
import { Expertise } from "@/components/home/Expertise";
import { Approach } from "@/components/home/Approach";
import { FeaturedCourse } from "@/components/home/FeaturedCourse";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Approach />
      <FeaturedCourse />
      <AboutTeaser />
      <CallToAction />
    </>
  );
}
