"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <motion.span
          className="hero-label"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="hero-label-dot" aria-hidden />
          {profile.headline}
        </motion.span>

        <motion.h1
          id="hero-heading"
          className="hero-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          I Assess Business Gaps and Build{" "}
          <span className="hero-accent">Digital Solutions</span> That Scale Your{" "}
          <span className="hero-accent">Growth</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a href="#work" className="hero-cta">
            Portfolio
          </a>
          <a href="#contact" className="hero-cta-outline">
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-image-wrap"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="hero-dots" aria-hidden />
        <div className="hero-avatar">
          <div className="hero-avatar-inner">
            <Image
              src={profile.avatarSrc}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 900px) 80vw, 40vw"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
