"use client";

import { motion } from "framer-motion";

const competencies = [
  { name: "Stakeholder & Client Engagement", strength: 0.95 },
  { name: "Business Process Optimization", strength: 0.9 },
  { name: "Operational & Growth Planning", strength: 0.9 },
  { name: "Business Development & Expansion", strength: 0.92 },
  { name: "Digital Transformation & AI Solutions", strength: 0.75 },
  { name: "ERP & Business Systems", strength: 0.9 },
  { name: "Technical Project Leadership", strength: 0.85 },
  { name: "System Architecture & Technology Awareness", strength: 0.75 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CoreCompetenciesHistogram() {
  return (
    <section
      id="core-competencies"
      className="section section-dark"
      aria-labelledby="core-competencies-heading"
    >
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Core Competencies</span>
          <h2 id="core-competencies-heading" className="section-title">
            Core Business &amp; Technical Competencies
          </h2>
        </motion.div>

        <motion.div
          className="skills-cards-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.name}
              className="skill-card"
              variants={item}
            >
              <div className="skill-card-name">{competency.name}</div>
              <div className="skill-card-bar">
                <motion.div
                  className="skill-card-bar-fill"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${competency.strength * 100}%` }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.03,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

