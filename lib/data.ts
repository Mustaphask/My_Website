// ——— Profile ———
export const profile = {
  name: "Mustafa Skaiki",
  /** Display name for header / hero */
  displayName: "Mustafa",
  headline: "Business Developer · ERP & Digital Transformation",
  location: "Beirut, Lebanon",
  tagline:
    "I help organizations align strategy, operations, and growth through ERP advisory, partnership development, and account leadership.",
  email: "m.skaiky92@gmail.com",
  phone: "+961 3 932 304",
  phoneTel: "+9613932304",
  linkedin: "https://www.linkedin.com/in/mustafa-skaiki-9536b1164/",
  cvUrl: "/Mustafa-Skaiki-CV.pdf",
  calendlyUrl: "https://calendly.com/your-link",
  avatarSrc: "/assets/personal-pic.jpg",
} as const;

// ——— Summary (premium positioning) ———
export const summary =
  "I help organizations align strategy, operations, and growth—through ERP advisory, partnership development, and account leadership. Focused on clarity, execution, and long-term value.";

// ——— Companies / places worked (for trust strip) ———
export const companies = [
  "Brainkets",
  "Appness",
  "Qatar University",
  "Genesis Technologies",
  "American Express",
] as const;

// ——— Multi-stakeholder Leadership ———
export const proofStrip = [
  { label: "Domain Focus", value: "ERP & digital transformation" },
  { label: "Regional Exposure", value: "Lebanon, GCC, Middle East" },
  { label: "Partnership & Growth", value: "Strategic alliances & account expansion" },
] as const;

// ——— Signature Services (2) ———
export const services = [
  {
    title: "ERP Advisory & Scoping",
    description:
      "Requirements analysis, solution scoping, and process alignment for Odoo and digital operations—so implementations stay on strategy and on budget.",
  },
  {
    title: "Account Growth & Retention",
    description:
      "Account planning, upsell and cross-sell, and retention. Strong client relationships and clear communication between stakeholders and delivery teams.",
  },
] as const;

// ——— Selected work (case-style, from real roles; no invented KPIs) ———
export const selectedWork = [
  {
    context: "Brainkets Lebanon — SaaS & digital product company",
    role: "Business Operations Manager",
    delivered: [
      "Strategic leadership: company goals and department alignment with product and growth vision.",
      "Day-to-day operations across development, marketing, and sales for on-time delivery.",
      "Financial oversight: budgeting, cost control, profitability tracking.",
      "Team development: recruitment, training, performance management.",
      "Business expansion: new opportunities and key partnerships in Lebanon and the region.",
    ],
  },
  {
    context: "Appness LLC (Odoo Gold Partner) — Muscat, Oman",
    role: "Commercial Account Manager",
    delivered: [
      "Primary point of contact for key accounts; long-term relationships and satisfaction across project lifecycles.",
      "New business development: Odoo ERP solutions across Oman, GCC, and Middle East.",
      "Collaboration with technical teams on requirements and tailored Odoo proposals.",
      "Commercial proposals, negotiation, and contract closure.",
      "Account plans for upselling and cross-selling modules and services; liaison between clients and delivery.",
    ],
  },
  {
    context: "Qatar University & Genesis Technologies — Research & business development",
    role: "Research Assistant / Business Developer",
    delivered: [
      "Research on equity-based crowdfunding, regulatory compliance, and business models (Qatar & Turkey).",
      "Market research for blockchain and ERP (Odoo); pipeline via cold outreach and inbound.",
      "Presentations and demos for blockchain and Odoo; alignment of client needs with use cases and modules.",
      "Pilot coordination and feedback loops with clients and developers; proposals with product and marketing.",
    ],
  },
] as const;

// ——— Experience snapshot (now / previously, storytelling) ———
export const experienceSnapshot = {
  now: {
    title: "Brainkets Lebanon",
    subtitle: "Business Operations Manager · Present",
    line: "Leading operations and strategy for a SaaS and digital product company—goals, teams, and regional growth.",
  },
  previously: [
    { title: "Appness LLC", subtitle: "Commercial Account Manager · Oman", line: "Odoo Gold Partner. Key accounts, new business, and delivery alignment across GCC." },
    { title: "Qatar University", subtitle: "Research Assistant · Doha", line: "Crowdfunding and fintech research; regulatory and business model analysis." },
    { title: "Genesis Technologies", subtitle: "Business Developer", line: "Blockchain and Odoo pipeline, demos, and client–developer coordination." },
    { title: "American Express", subtitle: "Merchant Relationship Executive · Doha", line: "Merchant acquisition, relationship management, and payment compliance." },
    { title: "AROPE Insurance", subtitle: "Insurance Specialist · Lebanon", line: "Policies, client advice, claims support, and regulatory compliance." },
  ],
} as const;

// ——— Skills: self-assessed proficiency 1–10 (sorted highest to lowest) ———
export const skills = [
  // Business skills (high ratings)
  { name: "Relationship Building", value: 9 },
  { name: "Communication", value: 9 },
  { name: "Strategic Thinking", value: 9 },
  { name: "Sales & Negotiation", value: 9 },
  { name: "Adaptability", value: 9 },
  { name: "CRM Systems", value: 8 },
  { name: "Digital Transformation", value: 8 },
  { name: "Leadership", value: 8 },
  { name: "Project Management", value: 8 },
  { name: "Vendor Network", value: 8 },
  { name: "Analytical Skills", value: 8 },
  { name: "Problem-solving", value: 8 },
  // Technical skills (beginner/intermediate awareness)
  { name: "API & Backend Understanding (NestJS)", value: 4 },
  { name: "Databases (MySQL / Prisma)", value: 4 },
  { name: "Flutter & Mobile App Collaboration", value: 3 },
  { name: "DevOps & Deployment (Vercel/Netlify)", value: 3 },
] as const;

// Legacy export for compatibility
export const skillsChart = skills.map((s) => ({
  subject: s.name,
  value: s.value,
  fullMark: 10,
}));

// ——— Values & approach (4 premium cards; no fake testimonials) ———
export const values = [
  {
    title: "Clarity & Strategy",
    description: "Clear briefs, expectations, and updates so everyone stays aligned. Strategy that connects vision to execution and informs every decision.",
  },
  {
    title: "Execution Discipline",
    description: "Focus on delivery and follow-through—from proposal to handover and ongoing support. No dropped balls, no vague commitments.",
  },
  {
    title: "Partner-First Mindset",
    description: "Long-term partnership over short-term wins. Reliable commitments, transparent communication, and trust as the default.",
  },
  {
    title: "Innovation with Practicality",
    description: "New ideas grounded in what works. Practical adoption of tools and processes—ERP, SaaS, digital—without buzzword-driven overreach.",
  },
] as const;

// ——— Education ———
export const education = [
  {
    institution: "Lebanese International University",
    location: "Lebanon",
    degree: "MBA, Marketing",
    period: "10/2018 – 01/2021",
  },
] as const;

// ——— Languages ———
export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Proficient" },
] as const;

// ——— Certificate ———
export const certificate = { name: "Project Management", issuer: "Google" } as const;

export type Profile = typeof profile;
export type Service = (typeof services)[number];
export type SelectedWorkItem = (typeof selectedWork)[number];
export type Skill = (typeof skills)[number];
export type SkillsChartItem = (typeof skillsChart)[number];
export type ValueItem = (typeof values)[number];
export type EducationItem = (typeof education)[number];
export type LanguageItem = (typeof languages)[number];
