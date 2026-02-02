"use client";

import { motion } from "framer-motion";
import { proofStrip } from "@/lib/data";

export function ProofStrip() {
  return (
    <section
      id="proof"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-border bg-muted/30 scroll-mt-20"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="proof-heading"
          className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-10 md:mb-12 text-center"
        >
          Multi-stakeholder Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {proofStrip.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
                {item.label}
              </p>
              <p className="text-foreground font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
