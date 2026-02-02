"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { selectedWork } from "@/lib/data";

export function SelectedWork() {
  return (
    <Section id="work" title="Selected work">
      <div className="space-y-8 md:space-y-10">
        {selectedWork.map((work, i) => (
          <motion.article
            key={work.context}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Card className="border-border bg-card rounded-none overflow-hidden transition-all duration-300 hover:border-foreground/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:scale-[1.01] hover:-translate-y-0.5">
              <CardHeader className="pb-2">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {work.context}
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-1">{work.role}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm font-medium text-muted-foreground mb-3">What I delivered</p>
                <ul className="space-y-2" role="list">
                  {work.delivered.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground/90 leading-relaxed flex gap-2"
                    >
                      <span className="text-muted-foreground shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
