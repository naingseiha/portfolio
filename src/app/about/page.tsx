import type { Metadata } from "next";
import { ProfileIntro } from "@/components/about/ProfileIntro";
import { Skills } from "@/components/about/Skills";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "អំពីខ្ញុំ | ណាំង សីហា",
};

export default function AboutPage() {
  return (
    <>
      <ProfileIntro />
      <Skills />
      <Timeline />
    </>
  );
}
