import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { AnalysisList } from "@/components/AnalysisList";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Hospitality Revenue Performance",
  description:
    "Revenue Performance Audit for serviced apartments, aparthotels, boutique hospitality and flexible living operators.",
};

const analysis = [
  "Occupancy, ADR, RevPAR or unit revenue",
  "Pricing by season, weekday and booking window",
  "Channel mix and commission impact",
  "Direct vs OTA performance",
  "B2B and corporate demand",
  "Minimum stay and availability logic",
  "Portfolio-level performance",
  "Dashboard and reporting gaps",
];

const deliverables = [
  "Revenue Performance Snapshot",
  "Revenue Leakage Map",
  "Channel & Segment Opportunity View",
  "Pricing & Availability Recommendations",
  "90-Day Revenue Roadmap",
  "Executive Debrief",
];

const fit = [
  "Serviced apartments",
  "Aparthotels",
  "Boutique hotels",
  "Flexible living",
  "Coliving",
  "Resort and premium accommodation",
  "Coworking and flexible office operators",
];

export default function HospitalityPage() {
  return (
    <>
      <PageHero
        eyebrow="Hospitality & Flexible Living"
        headline="Revenue Performance Audit for Hospitality & Flexible Living Operators"
        subheadline="Identify where revenue is leaking across pricing, occupancy, channel mix, seasonality, B2B demand and portfolio performance."
        primaryCta={{
          label: "Book a Hospitality Revenue Review",
          href: "/contact",
        }}
      />

      <Section>
        <h2 className="font-serif text-2xl text-ink">
          Occupancy alone does not prove the business is commercially optimized.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Revenue may be leaking through underpriced peak demand, weak channel
          mix, unmanaged discounts, poor minimum-stay logic, underused B2B
          demand or slow pricing decisions.
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
          Projects typically start from €5,000 depending on scope, data
          availability and business complexity.
        </p>
      </Section>

      <CTASection
        headline="Book a Hospitality Revenue Review"
        text="Start with a focused conversation about your portfolio, channels and commercial priorities."
        buttonLabel="Book a Hospitality Revenue Review"
      />
    </>
  );
}
