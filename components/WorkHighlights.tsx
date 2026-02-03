"use client";

import { motion } from "framer-motion";
import { selectedWork } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export function WorkHighlights() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 id="work-heading" className="section-title">
            Selected Work
          </h2>
        </motion.div>

        <motion.div
          className="work-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {selectedWork.map((work, index) => (
            <motion.article key={index} className="work-card" variants={item}>
              <p className="work-context">{work.context}</p>
              <h3 className="work-role">{work.role}</h3>
              <div className="work-deliverables">
                {work.delivered.slice(0, 3).map((d, i) => (
                  <p key={i} className="work-deliverable">
                    {d}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
