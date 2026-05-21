import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { AnalysisList } from "@/components/AnalysisList";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ecommerce Pricing Optimization",
  description:
    "Pricing and margin optimization for ecommerce and portfolio businesses balancing price, volume, inventory, campaigns and margin.",
};

const analysis = [
  "Category-level margin",
  "Product-level price performance",
  "Campaign and discount logic",
  "Competitor price positioning",
  "Stock and inventory impact",
  "Price-volume trade-offs",
  "Country or channel differences",
  "Dashboard and reporting needs",
];

const deliverables = [
  "Category Pricing Review",
  "Margin Leakage Map",
  "Campaign Pricing Recommendations",
  "Competitor Positioning View",
  "Pricing Dashboard Specification",
  "90-Day Optimization Plan",
];

const fit = [
  "Ecommerce businesses",
  "Retailers",
  "Marketplace sellers",
  "Portfolio and category-led businesses",
];

export default function EcommercePage() {
  return (
    <>
      <PageHero
        eyebrow="Ecommerce"
        headline="Pricing & Margin Optimization Sprint for Ecommerce Businesses"
        subheadline="Improve margin and revenue performance across product categories, campaigns, inventory and competitor pricing."
        primaryCta={{
          label: "Book an Ecommerce Pricing Review",
          href: "/contact",
        }}
      />

      <Section>
        <h2 className="font-serif text-2xl text-ink">
          Ecommerce pricing easily becomes reactive.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Teams often match competitors, run campaigns, clear stock or protect
          margin without a clear decision model. The result is avoidable margin
          leakage and inconsistent commercial decisions.
        </p>
      </Section>

      <Section alt>
        <AnalysisList title="What the sprint reviews" items={analysis} />
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
        headline="Book an Ecommerce Pricing Review"
        text="Define a clearer pricing and margin decision model for your categories and campaigns."
        buttonLabel="Book an Ecommerce Pricing Review"
      />
    </>
  );
}
