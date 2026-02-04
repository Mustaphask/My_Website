 "use client";

 import { motion } from "framer-motion";

 const technicalSkills = [
   { name: "Next.js & React", strength: 0.45 },
   { name: "Node.js & NestJS APIs", strength: 0.4 },
   { name: "Prisma + MySQL Databases", strength: 0.4 },
   { name: "ERP & Accounting Systems Development", strength: 0.45 },
   { name: "Flutter Mobile App Development", strength: 0.35 },
   { name: "REST API Integration & Swagger", strength: 0.4 },
   { name: "GitHub Deployment & Version Control", strength: 0.45 },
   { name: "UI/UX Product Design Systems", strength: 0.4 },
   { name: "Digital Transformation & AI Solutions", strength: 0.45 },
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

 export function TechnicalSkillsHistogram() {
   return (
     <section
       id="technical-skills"
       className="section section-dark"
       aria-labelledby="technical-skills-heading"
     >
       <div className="section-container">
         <motion.div
           className="section-header"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <span className="section-label">Technical</span>
           <h2 id="technical-skills-heading" className="section-title">
             Technical Knowledge &amp; Tools
           </h2>
         </motion.div>

         <motion.div
           className="technical-skills-grid"
           variants={container}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-10% 0px" }}
         >
           {technicalSkills.map((skill, index) => (
             <motion.div
               key={skill.name}
               className="skill-card"
               variants={item}
             >
               <div className="skill-card-name">{skill.name}</div>
               <div className="skill-card-bar">
                 <motion.div
                   className="skill-card-bar-fill"
                   initial={{ width: "0%" }}
                   whileInView={{ width: `${skill.strength * 100}%` }}
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

