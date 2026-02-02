"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { experienceSnapshot } from "@/lib/data";

export function ExperienceSnapshot() {
  const { now, previously } = experienceSnapshot;

  return (
    <Section id="experience" title="Now & previously">
      <div className="space-y-16 md:space-y-20">
        {/* Now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-l-2 border-foreground pl-6 md:pl-8"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Now
          </p>
          <h3 className="text-xl font-semibold text-foreground">{now.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{now.subtitle}</p>
          <p className="text-foreground/90 mt-3 leading-relaxed max-w-2xl">
            {now.line}
          </p>
        </motion.div>

        {/* Previously */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
            Previously
          </p>
          <ul className="space-y-8 md:space-y-10" role="list">
            {previously.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-l-2 border-border pl-6 md:pl-8"
              >
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">{item.subtitle}</p>
                <p className="text-foreground/85 mt-2 leading-relaxed max-w-2xl text-sm">
                  {item.line}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
