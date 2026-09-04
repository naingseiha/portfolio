"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { ShimmerButton } from "@/components/motion/ShimmerButton";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 pb-2 transition-all duration-300 sm:px-6">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-black/10 bg-surface-glass shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-black/5 bg-surface-glass/80 backdrop-blur-md"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base font-bold text-foreground transition-transform hover:scale-[1.02]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xs shadow-primary/25 transition-transform duration-300 group-hover:rotate-6">
            <Code2 size={16} />
          </span>
          <span className="tracking-tight text-foreground font-semibold">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-foreground/75 hover:text-foreground hover:bg-black/5"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-primary-soft/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <ShimmerButton href={siteConfig.cta.href} variant="primary" className="!py-2 !px-4 !text-xs">
            <span>{siteConfig.cta.label}</span>
            <ArrowUpRight size={13} />
          </ShimmerButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "បិទម៉ឺនុយ" : "បើកម៉ឺនុយ"}
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-subtle md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-black/10 bg-surface/95 p-5 shadow-2xl shadow-black/10 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {siteConfig.navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href.startsWith("/#")
                    ? false
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary-soft text-primary font-semibold"
                        : "text-foreground/80 hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <ShimmerButton
                  href={siteConfig.cta.href}
                  variant="primary"
                  className="w-full !py-3 !text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{siteConfig.cta.label}</span>
                  <ArrowUpRight size={16} />
                </ShimmerButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

