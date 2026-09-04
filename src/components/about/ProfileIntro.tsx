import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
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
    <section className="bg-gradient-to-b from-primary-soft/60 to-background">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <FadeIn className="mx-auto w-full max-w-xs">
          <TiltCard>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10 ring-1 ring-black/5">
              <Image
                src="/images/profile.jpg"
                alt={siteConfig.name}
                fill
                sizes="(min-width: 768px) 320px, 280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
            </div>
          </TiltCard>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col items-start gap-5 text-left">
          <h1 className="text-4xl text-foreground sm:text-5xl">អំពីខ្ញុំ</h1>

          <p className="text-lg leading-relaxed text-muted">
            អ្នកអភិវឌ្ឍន៍កម្មវិធី (Full-Stack Developer) និងជាអតីតគ្រូបង្រៀន ICT —
            ចាប់ផ្តើមពីថ្នាក់រៀននៅកម្ពុជា រហូតដល់គម្រោង freelance អន្តរជាតិ។
            បច្ចុប្បន្ន រួមបញ្ចូលបទពិសោធន៍ទាំងពីរ ដើម្បីលើកកម្ពស់ចំណេះដឹង AI
            ជូនដល់គ្រូបង្រៀន។
          </p>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {siteConfig.contact.location}
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail size={16} />
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground/70 transition-colors hover:bg-primary-soft hover:text-primary"
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
