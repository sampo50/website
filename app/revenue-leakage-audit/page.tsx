import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Revenue Leakage Audit",
  description:
    "A structured diagnostic to identify where revenue and margin are lost across pricing, discounts, channels, capacity, packaging and decision-making.",
};

const methodDetail = [
  {
    title: "Commercial Baseline",
    description:
      "Understand what is sold, to whom, at what price, through which channels and with what margin.",
  },
  {
    title: "Leakage Diagnosis",
    description:
      "Identify whether leakage sits in prices, discounts, channels, capacity, customer segments, packages, reporting or decision-making.",
  },
  {
    title: "Opportunity Sizing",
    description:
      "Estimate which improvements matter financially and which are easiest to implement.",
  },
  {
    title: "Decision Model",
    description:
      "Define how pricing, discounts and commercial decisions should be governed going forward.",
  },
  {
    title: "90-Day Roadmap",
    description:
      "Prioritize the next commercial moves and define ownership, timing and metrics.",
  },
];

const outputs = [
  "Revenue Leakage Map",
  "Commercial Baseline Snapshot",
  "Opportunity Sizing Matrix",
  "Pricing or Margin Recommendations",
  "90-Day Roadmap",
  "Executive Debrief",
];

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Method"
        headline="Revenue Leakage Audit"
        subheadline="A structured diagnostic to identify where revenue and margin are lost across pricing, discounts, channels, capacity, packaging and commercial decision-making."
        primaryCta={{ label: "Book a Revenue Review", href: "/contact" }}
      />

      <Section>
        <ProcessSteps steps={methodDetail} />
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">Typical outputs</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {outputs.map((o) => (
            <li
              key={o}
              className="rounded-md border border-border bg-white px-4 py-3 text-sm text-ink"
            >
              {o}
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        headline="Start with a Revenue Review"
        text="In 30 minutes, we will assess whether a full Revenue Leakage Audit is the right next step for your business."
        buttonLabel="Book a Revenue Review"
      />
    </>
  );
}
