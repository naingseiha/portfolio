import Link from "next/link";
import { Code2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/social-icons";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, Icon: XIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/5 bg-surface/50 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand & Mission */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-base font-bold text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs">
              <Code2 size={16} />
            </span>
            <span className="font-semibold">{siteConfig.name}</span>
          </Link>
          <p className="max-w-sm text-xs leading-relaxed text-muted">
            {siteConfig.role} — ផ្តោតលើការកសាងកម្មវិធីកម្រិតខ្ពស់ (Web & Mobile),
            ស្ថាបត្យកម្ម Cloud Scalability និងការបណ្តុះបណ្តាល AI សម្រាប់គ្រូបង្រៀនកម្ពុជា។
          </p>

          {/* Live Status Pill */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-3 py-1 text-[11px] font-medium text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Engineering Projects & AI Training
          </div>

          <div className="mt-1 flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-surface text-foreground/70 transition-all duration-200 hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            តំណភ្ជាប់រហ័ស
          </h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            ទំនាក់ទំនង
          </h3>
          <div className="flex flex-col gap-2 text-xs text-muted">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail size={14} />
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone size={14} />
              {siteConfig.contact.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {siteConfig.contact.location}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-[11px] text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
          <p className="flex items-center gap-1">
            រចនាឡើងប្រកបដោយភាពផ្ចិតផ្ចង់ជាមួយ Next.js 16 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

