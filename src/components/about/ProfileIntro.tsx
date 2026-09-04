import Image from "next/image";
import { Briefcase, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { TiltCard } from "@/components/motion/TiltCard";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/social-icons";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, Icon: XIcon },
];

export function ProfileIntro() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 py-8 sm:py-12 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <FadeIn className="mx-auto w-full max-w-xs">
          <TiltCard>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-surface shadow-2xl shadow-primary/10">
              <Image
                src="/images/profile.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 768px) 320px, 280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/80 p-3 backdrop-blur-md">
                <p className="text-xs font-bold text-foreground">{siteConfig.name}</p>
                <p className="text-[11px] text-muted">Senior Software Engineer &amp; AI Educator</p>
              </div>
            </div>
          </TiltCard>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col items-start gap-5 sm:gap-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-surface-glass px-3.5 py-1 text-xs font-semibold text-foreground-secondary backdrop-blur-md">
            <Briefcase size={13} className="text-primary" />
            <span>Engineer &amp; Educator Journey</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-wide text-foreground">
            អំពីខ្ញុំ
          </h1>

          <p className="text-base leading-relaxed text-muted sm:text-lg">
            ខ្ញុំជា <span className="font-semibold text-foreground">Senior Full-Stack &amp; Mobile Engineer</span> ដែលមានបទពិសោធន៍ក្នុងការកសាងប្រព័ន្ធ Web &amp; Mobile Apps កម្រិតខ្ពស់ និងស្ថាបត្យកម្ម Cloud Scalability។
          </p>
          <p className="text-sm leading-relaxed text-muted">
            ដោយផ្តើមចេញពីតួនាទីជាគ្រូបង្រៀន ICT នៅកម្ពុជា រហូតដល់ការបំពេញការងារលើគម្រោងអន្តរជាតិនៅអឺរ៉ុប ខ្ញុំបានប្តេជ្ញាចិត្តចែករំលែកបច្ចេកវិទ្យា និងជំនាញ AI ដើម្បីជួយគ្រូបង្រៀនកម្ពុជាបោះជំហានទៅមុខយ៉ាងលឿនក្នុងយុគសម័យឌីជីថល។
          </p>

          <div className="flex flex-col gap-2.5 text-xs text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-primary" />
              {siteConfig.contact.location}
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail size={15} className="text-primary" />
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5 pt-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-surface text-foreground/70 transition-all hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

