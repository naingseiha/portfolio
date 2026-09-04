import Link from "next/link";
import { GraduationCap, Mail, Phone } from "lucide-react";
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
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <GraduationCap size={18} />
            </span>
            {siteConfig.name}
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.role} — ជួយគ្រូបង្រៀនប្រើប្រាស់ AI ដើម្បីធ្វើឲ្យការបង្រៀន
            កាន់តែមានប្រសិទ្ធភាព និងសន្សំសំចៃពេលវេលា។
          </p>
          <div className="mt-2 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground/70 transition-colors hover:bg-primary-soft hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            តំណភ្ជាប់រហ័ស
          </h3>
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            ទំនាក់ទំនង
          </h3>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail size={16} />
            {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Phone size={16} />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-muted">
          © {year} {siteConfig.name}។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
        </div>
      </div>
    </footer>
  );
}
