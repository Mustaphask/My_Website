"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const sortedSkills = [...skills].sort((a, b) => b.value - a.value);
const topSkills = sortedSkills.slice(0, 8);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function SkillsPoll() {
  return (
    <section id="skills" className="section section-dark" aria-labelledby="skills-heading">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 id="skills-heading" className="section-title">
            Skills
          </h2>
        </motion.div>

        <motion.div
          className="skills-cards-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {topSkills.map((skill) => (
            <motion.div key={skill.name} className="skill-card" variants={item}>
              <div className="skill-card-percent">{skill.value * 10}%</div>
              <div className="skill-card-name">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
