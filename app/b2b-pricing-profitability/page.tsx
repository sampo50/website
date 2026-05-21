import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { AnalysisList } from "@/components/AnalysisList";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "B2B Pricing & Profitability",
  description:
    "Pricing and profitability audit for B2B service businesses with unclear pricing, discounting, packaging or customer-level profitability.",
};

const analysis = [
  "Current price list and price architecture",
  "Discounting behaviour",
  "Customer and segment profitability",
  "Package structure",
  "Quote logic",
  "Sales approval rules",
  "Cost-to-serve",
  "Renewal and indexation logic",
  "Upsell and expansion pricing",
];

const deliverables = [
  "Pricing Architecture Review",
  "Discount Leakage Map",
  "Customer Profitability View",
  "Packaging Recommendations",
  "Sales Pricing Rules",
  "90-Day Pricing Roadmap",
];

const fit = [
  "Professional services",
  "Training and coaching companies",
  "Technical services",
  "B2B SaaS",
  "Rental services",
  "Facility services",
  "Project-based service businesses",
];

export default function B2BPage() {
  return (
    <>
      <PageHero
        eyebrow="B2B Services"
        headline="Pricing & Profitability Audit for B2B Service Businesses"
        subheadline="Fix unclear pricing, inconsistent discounts, weak packaging and poor visibility into customer-level profitability."
        primaryCta={{ label: "Book a B2B Pricing Review", href: "/contact" }}
      />

      <Section>
        <h2 className="font-serif text-2xl text-ink">
          B2B companies often grow revenue while silently losing margin.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Pricing is often based on legacy rates, negotiation habits, inconsistent
          discounts or underdefined service packages. The result is margin
          leakage that is hard to see from revenue alone.
        </p>
      </Section>

      <Section alt>
        <AnalysisList title="What the audit reviews" items={analysis} />
      </Section>

      <Section>
        <AnalysisList title="What you receive" items={deliverables} />
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">Best fit for</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {fit.map((f) => (
            <li
              key={f}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink"
            >
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm font-medium text-muted">
          Projects typically start from €4,000 depending on scope, data
          availability and business complexity.
        </p>
      </Section>

      <CTASection
        headline="Book a B2B Pricing Review"
        text="Clarify where pricing, discounts and customer profitability are leaking margin."
        buttonLabel="Book a B2B Pricing Review"
      />
    </>
  );
}
