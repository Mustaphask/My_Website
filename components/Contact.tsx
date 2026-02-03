"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Linkedin } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/lib/data";

const contactCards = [
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneTel}`,
    icon: Phone,
    ariaLabel: "Call Mustafa Skaiki",
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    ariaLabel: "Email Mustafa Skaiki",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    ariaLabel: "Mustafa Skaiki LinkedIn profile",
  },
] as const;

export function Contact() {
  return (
    <Section id="contact" title="">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4"
          >
            Contact Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            For advisory, partnerships, or growth conversations—reach out by phone, email, or LinkedIn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactCards.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              aria-label={item.ariaLabel}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="contact-card group"
            >
              <div className="contact-card-inner">
                <item.icon
                  className="contact-card-icon"
                  aria-hidden
                />
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  {item.label}
                </p>
                <p className="contact-card-value">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
