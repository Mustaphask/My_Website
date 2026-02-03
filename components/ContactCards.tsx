"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

const contactItems = [
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
    value: "Connect",
    href: profile.linkedin,
    icon: Linkedin,
    ariaLabel: "Mustafa Skaiki LinkedIn profile",
    external: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ContactCards() {
  return (
    <section id="contact" className="section section-dark" aria-labelledby="contact-heading">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 id="contact-heading" className="section-title">
            Contact
          </h2>
        </motion.div>

        <motion.p
          className="text-center contact-intro max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          For advisory, partnerships, or growth conversations—reach out directly.
        </motion.p>

        <motion.div
          className="contact-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactItems.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              aria-label={contact.ariaLabel}
              className="contact-card"
              variants={item}
            >
              <contact.icon className="contact-card-icon" aria-hidden />
              <span className="contact-card-label">{contact.label}</span>
              <span className="contact-card-value">{contact.value}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
