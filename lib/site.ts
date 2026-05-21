export const SITE = {
  name: "Sami Olavuo",
  domain: "https://www.samiolavuo.com",
  tagline: "Revenue & Pricing Performance Consulting",
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
    title: "Hospitality & Flexible Living Revenue Performance",
    description:
      "For serviced apartments, aparthotels, boutique hospitality, flexible living and coworking operators.",
    focus: [
      "Pricing & availability",
      "Occupancy and ADR",
      "Channel mix",
      "B2B demand",
      "Seasonality",
      "Portfolio performance",
    ],
    href: "/hospitality-revenue-performance",
    cta: "Explore Hospitality Audit",
  },
  {
    title: "B2B Pricing & Profitability",
    description:
      "For B2B service businesses with unclear pricing, inconsistent discounting or weak visibility into customer-level profitability.",
    focus: [
      "Price architecture",
      "Packaging",
      "Discount logic",
      "Customer profitability",
      "Sales pricing rules",
      "Margin visibility",
    ],
    href: "/b2b-pricing-profitability",
    cta: "Explore B2B Pricing Audit",
  },
  {
    title: "Ecommerce Pricing & Margin Optimization",
    description:
      "For ecommerce and portfolio businesses balancing price, volume, inventory, campaigns and margin.",
    focus: [
      "Category pricing",
      "Campaign logic",
      "Margin control",
      "Competitor pricing",
      "Stock-based pricing",
      "Pricing dashboards",
    ],
    href: "/ecommerce-pricing-optimization",
    cta: "Explore Ecommerce Sprint",
  },
];

export const LEAKAGE_EXAMPLES = [
  "Underpriced peak demand",
  "Inconsistent discounting",
  "Weak channel mix",
  "Poor package architecture",
  "Low margin customer segments",
  "Slow pricing decisions",
];

export const METHOD_STEPS = [
  {
    title: "Commercial Baseline",
    description:
      "Understand what is sold, to whom, at what price, through which channels and at what margin.",
  },
  {
    title: "Leakage Map",
    description:
      "Identify where revenue or margin is lost across pricing, discounts, channels, capacity, packaging or reporting.",
  },
  {
    title: "Opportunity Sizing",
    description:
      "Prioritize the commercial moves with the highest financial impact and lowest execution friction.",
  },
  {
    title: "90-Day Roadmap",
    description:
      "Define what should change first, who owns it and which metrics will prove progress.",
  },
  {
    title: "Implementation Support",
    description:
      "Support pricing changes, dashboards, commercial routines and management decisions after the audit.",
  },
];

export const PROOF_BULLETS = [
  "Pricing and revenue strategy ownership for a c. €12M multi-asset portfolio",
  "c. 7% YoY improvement in key revenue KPIs",
  "€300K+ annual commercial opportunity identified",
  "Hands-on experience with Excel, Power BI, SQL, forecasting and performance tracking",
  "Work across pricing, operations, finance and senior management decision-making",
];

export const HERO_PROOF_STRIP = [
  "Portfolio-level revenue management experience",
  "Pricing, forecasting and commercial analytics",
  "Power BI, SQL, Excel and performance tracking",
  "Audit-first, implementation-oriented approach",
];

export const SERVICE_OFFERINGS = [
  "Revenue Leakage Snapshot",
  "Revenue Performance Audit",
  "Pricing & Packaging Sprint",
  "Pricing Dashboard Setup",
  "Fractional Revenue & Pricing Lead",
];
