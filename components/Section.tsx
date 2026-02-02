"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Section heading (optional, for anchor + aria) */
  title?: string;
  /** Extra top/bottom padding */
  tight?: boolean;
}

export function Section({ id, children, className, title, tight }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "scroll-mt-20",
        tight ? "py-16 md:py-20 px-4 sm:px-6 lg:px-8" : "section-padding",
        className
      )}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2
            id={`${id}-heading`}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12 md:mb-16"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
