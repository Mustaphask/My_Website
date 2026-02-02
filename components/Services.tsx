"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" title="Signature services">
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card
              className="h-full border-border bg-card rounded-none transition-all duration-300 hover:border-foreground/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:-translate-y-0.5"
              role="article"
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
