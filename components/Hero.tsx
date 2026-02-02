"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/** Floating geometric shapes (grayscale, subtle) */
function HeroShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <motion.div
        className="absolute top-[18%] left-[12%] w-32 h-32 rounded-full border border-foreground/[0.06] dark:border-foreground/[0.08]"
        animate={{
          y: [0, 12, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[10%] w-24 h-24 rounded-full border border-foreground/[0.05] dark:border-foreground/[0.07]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-2 h-24 bg-foreground/[0.04] dark:bg-foreground/[0.06]"
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom" }}
      />
      <motion.div
        className="absolute top-[35%] right-[18%] w-20 h-0.5 bg-foreground/[0.06] dark:bg-foreground/[0.08]"
        animate={{
          scaleX: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col lg:flex-row items-stretch px-4 pt-28 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-lines-animated opacity-70" />
      <div className="spotlight" />
      <HeroShapes />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Left: text content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 flex flex-col justify-center max-w-2xl lg:max-w-none lg:pr-8"
      >
        <motion.h1
          id="hero-heading"
          variants={item}
          className="text-hero font-semibold tracking-tight text-foreground mb-5"
        >
          Hi, I&apos;m Mustafa
        </motion.h1>
        <motion.p
          variants={item}
          className="text-hero-sub text-muted-foreground font-medium mb-2"
        >
          {profile.headline}
        </motion.p>
        <motion.p
          variants={item}
          className="text-muted-foreground text-base md:text-lg mb-8"
        >
          {profile.location}
        </motion.p>
        <motion.p
          variants={item}
          className="text-foreground/90 text-hero-sub max-w-xl leading-relaxed font-medium mb-10"
        >
          {profile.tagline}
        </motion.p>
        <motion.div variants={item}>
          <Button
            asChild
            size="lg"
            variant="default"
            className="rounded-none min-w-[180px]"
          >
            <a href="#contact" aria-label="Go to contact">
              Contact
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right: photo fills intro area */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 min-h-[320px] lg:min-h-0 lg:flex lg:items-center lg:justify-end mt-10 lg:mt-0"
      >
        <div className="relative w-full max-w-md lg:max-w-full lg:h-full min-h-[320px] lg:min-h-[70vh] mx-auto lg:mx-0">
          <Image
            src={profile.avatarSrc}
            alt={profile.name}
            fill
            className="object-cover object-center rounded-lg lg:rounded-l-2xl border border-foreground/10 shadow-xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#proof"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <i className="fa-solid fa-chevron-down text-lg animate-bounce" aria-hidden />
      </motion.a>
    </section>
  );
}
