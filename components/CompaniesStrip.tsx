"use client";

import { motion } from "framer-motion";
import { companies } from "@/lib/data";

export function CompaniesStrip() {
  return (
    <div className="companies-strip">
      <motion.p
        className="companies-title"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        A few of the places I&apos;ve worked
      </motion.p>
      <div className="companies-list">
        {companies.map((name, i) => (
          <motion.span
            key={name}
            className="companies-item"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
