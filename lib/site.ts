export const SITE = {
  name: "Sami Olavuo",
  domain: "https://samiolavuo.com",
  tagline: "Hospitality Revenue Performance",
  email: "sami.olavuo@gmail.com",
  linkedIn: "https://www.linkedin.com/in/sami-olavuo",
} as const;

export type ServicePath = {
  title: string;
  description: string;
  focus: string[];
  href: string;
  cta: string;
};

export const SERVICE_PATHS: ServicePath[] = [
  {
    title: "Fractional Revenue Manager",
    description:
      "Hands-on revenue leadership for operators who need senior pricing, distribution and forecasting ownership — without a full-time hire.",
    focus: [
      "Pricing and availability strategy",
      "Channel mix and distribution",
      "Forecasting and budget cycles",
      "Revenue reporting and KPI ownership",
      "Commercial routines and decision-making",
    ],
    href: "/contact",
    cta: "Discuss an engagement",
  },
  {
    title: "Revenue Strategy & Pricing",
    description:
      "Structured work on pricing logic, segmentation, channel performance and revenue roadmaps for hospitality and serviced living portfolios.",
    focus: [
      "Revenue performance diagnostics",
      "Seasonal and segment pricing",
      "Direct vs OTA strategy",
      "Corporate and B2B demand",
      "90-day revenue roadmaps",
    ],
    href: "/contact",
    cta: "Discuss an engagement",
  },
  {
    title: "Tools, Forecasts & AI",
    description:
      "Practical setup and maintenance of the commercial stack — dashboards, forecasting models, RMS workflows and AI-assisted pricing.",
    focus: [
      "Revenue dashboards and reporting",
      "Forecasting models and scenarios",
      "RMS, PMS and channel manager workflows",
      "Data pipelines and performance tracking",
      "AI-assisted pricing and demand signals",
    ],
    href: "/contact",
    cta: "Discuss an engagement",
  },
];

export const REVENUE_CHALLENGES = [
  "Underpriced peak demand",
  "Weak channel mix and OTA dependency",
  "Inconsistent length-of-stay pricing",
  "Unmanaged corporate and B2B rates",
  "Slow or manual pricing decisions",
  "Missing forecasting and reporting",
];

export const METHOD_STEPS = [
  {
    title: "Commercial Baseline",
    description:
      "Map occupancy, ADR, RevPAR, channel mix, segments and pricing logic across the portfolio.",
  },
  {
    title: "Revenue Diagnosis",
    description:
      "Identify where revenue is leaking — pricing, availability, channels, segments or decision-making.",
  },
  {
    title: "Strategy & Roadmap",
    description:
      "Define pricing rules, channel priorities, forecasting approach and the next commercial moves.",
  },
  {
    title: "Tools & Reporting",
    description:
      "Set up or improve dashboards, forecasting routines and the workflows that support daily decisions.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "Iterate on pricing, forecasts and performance — including AI-assisted analysis where it adds value.",
  },
];

export const PROOF_BULLETS = [
  "Revenue strategy ownership for a c. €12M multi-asset hospitality portfolio",
  "c. 7% YoY improvement in key revenue KPIs",
  "€300K+ annual commercial opportunity identified",
  "Hands-on experience with forecasting, Power BI, SQL and performance tracking",
  "Work across pricing, operations, finance and senior management",
];

export const HERO_PROOF_STRIP = [
  "Fractional revenue manager or advisor",
  "Serviced living and accommodation operators",
  "Pricing, forecasting and channel strategy",
  "Limited to a small number of clients",
];

export const SERVICE_OFFERINGS = [
  "Fractional Revenue Manager",
  "Revenue Strategy & Pricing",
  "Tools, Forecasts & AI",
];

export const CLIENT_TYPES = [
  "Serviced apartments",
  "Aparthotels",
  "Boutique hotels",
  "Serviced living",
  "Coliving",
  "Flexible living",
] as const;
