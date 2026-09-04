"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ShimmerButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "glass";
}

export function ShimmerButton({
  href,
  onClick,
  children,
  className = "",
  variant = "primary",
}: ShimmerButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30",
    secondary:
      "bg-surface text-foreground border border-border hover:border-primary/40 hover:bg-surface-subtle shadow-xs",
    glass:
      "bg-surface-glass text-foreground border border-black/5 backdrop-blur-md hover:bg-white/90 shadow-sm",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Light sweep shimmer */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
        aria-hidden
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}
