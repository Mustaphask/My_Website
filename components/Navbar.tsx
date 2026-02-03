"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "Philosophy", href: "/#values" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleHash = () => setActiveHash(window.location.hash || "");
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isLinkActive = (link: { href: string }) => {
    if (link.href.startsWith("/#")) {
      const hash = link.href.slice(1);
      return pathname === "/" && activeHash === hash;
    }
    return pathname === link.href || pathname.startsWith(link.href + "/");
  };

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
        <Link href="/" className="navbar-brand">
          <span className="navbar-mark" aria-hidden />
          {" MUSTAFA"}
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`navbar-link ${isLinkActive(link) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />
          <Link href="/#contact" className="navbar-cta hidden sm:inline-flex">
            Connect
          </Link>
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
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="pt-4 flex items-center justify-center gap-4">
              <ThemeToggle />
              <Link
                href="/#contact"
                className="mobile-menu-link text-[var(--turquoise)]"
                onClick={closeMobile}
              >
                Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
