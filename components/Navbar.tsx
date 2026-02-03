"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Testimonials", href: "#values" },
  { label: "Blog", href: "#skills" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#services");

  useEffect(() => {
    const handleHash = () => setActiveHash(window.location.hash || "#services");
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#hero" className="navbar-brand">
          <span className="navbar-mark" aria-hidden />
          {` ${"Mustafa".toUpperCase()}`}
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar-link ${activeHash === link.href ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />
          <a href="#contact" className="navbar-cta hidden sm:inline-flex">
            Connect
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-6 right-6 p-2 mobile-menu-close"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="mobile-menu-link"
                onClick={closeMobile}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="pt-4 flex items-center justify-center gap-4">
              <ThemeToggle />
              <motion.a
                href="#contact"
                className="mobile-menu-link text-[var(--turquoise)]"
                onClick={closeMobile}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
