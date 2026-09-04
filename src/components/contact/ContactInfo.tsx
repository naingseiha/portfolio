import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { GlowCard } from "@/components/motion/GlowCard";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/social-icons";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, Icon: XIcon },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <GlowCard className="p-5">
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-4 transition-colors group"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs transition-transform group-hover:scale-105">
            <Mail size={20} />
          </span>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">អ៊ីមែលផ្លូវការ</span>
            <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              {siteConfig.contact.email}
            </span>
          </div>
        </a>
      </GlowCard>

      <GlowCard className="p-5">
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
          className="flex items-center gap-4 transition-colors group"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs transition-transform group-hover:scale-105">
            <Phone size={20} />
          </span>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">លេខទូរស័ព្ទ / WhatsApp</span>
            <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              {siteConfig.contact.phone}
            </span>
          </div>
        </a>
      </GlowCard>

      <GlowCard className="p-5">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-xs">
            <MapPin size={20} />
          </span>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">ទីតាំងបច្ចុប្បន្ន</span>
            <span className="text-sm font-bold text-foreground">
              {siteConfig.contact.location}
            </span>
          </div>
        </div>
      </GlowCard>

      <GlowCard className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <Share2 size={14} className="text-primary" />
            <span>បណ្តាញសង្គម &amp; Code</span>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-surface text-foreground/70 transition-all hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

