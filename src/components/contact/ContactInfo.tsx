import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/social-icons";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, Icon: XIcon },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-3">
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="flex items-center gap-4 rounded-2xl bg-surface p-4 transition-colors hover:bg-primary-soft/40"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Mail size={18} />
        </span>
        <span>
          <span className="block text-xs text-muted">អ៊ីមែល</span>
          <span className="text-sm font-medium text-foreground">
            {siteConfig.contact.email}
          </span>
        </span>
      </a>

      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
        className="flex items-center gap-4 rounded-2xl bg-surface p-4 transition-colors hover:bg-primary-soft/40"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Phone size={18} />
        </span>
        <span>
          <span className="block text-xs text-muted">លេខទូរស័ព្ទ</span>
          <span className="text-sm font-medium text-foreground">
            {siteConfig.contact.phone}
          </span>
        </span>
      </a>

      <div className="flex items-center gap-4 rounded-2xl bg-surface p-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
          <MapPin size={18} />
        </span>
        <span>
          <span className="block text-xs text-muted">ទីតាំង</span>
          <span className="text-sm font-medium text-foreground">
            {siteConfig.contact.location}
          </span>
        </span>
      </div>

      <div className="mt-2 flex items-center gap-3">
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
    </div>
  );
}
