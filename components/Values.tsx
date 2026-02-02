"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { values } from "@/lib/data";

export function Values() {
  return (
    <Section id="values" title="Values & Approach">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Card
              className="h-full border-border bg-card rounded-none transition-all duration-300 hover:border-foreground/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:-translate-y-0.5"
              role="article"
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
