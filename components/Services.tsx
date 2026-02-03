"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "ERP Advisory",
    description:
      "Strategic guidance on ERP selection, implementation roadmaps, and process optimization. Ensuring your digital operations align with business objectives.",
  },
  {
    number: "02",
    title: "Go-to-Market Strategy",
    description:
      "Market positioning, partnership development, and growth strategies. Translating product capabilities into compelling value propositions.",
  },
  {
    number: "03",
    title: "Business Partnerships",
    description:
      "Building and nurturing strategic alliances. Account management, stakeholder alignment, and long-term relationship development across regions.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Services() {
  return (
    <section id="services" className="section section-dark" aria-labelledby="services-heading">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Do</span>
          <h2 id="services-heading" className="section-title">
            Services
          </h2>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.number} className="service-card" variants={item}>
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
