import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SERVICE_PATHS, SITE_INTRO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Palvelut",
  description:
    "Revenue Audit ja Fractional Revenue Manager majoitus- ja serviced living -yrityksille.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline={SITE_INTRO.headline}
        subheadline={`${SITE_INTRO.text} ${SITE_INTRO.text2}`}
        primaryCta={{ label: "Varaa kartoituspuhelu", href: "/contact" }}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.title} {...s} detailed />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Mikä paketti sopii sinulle?
        </h2>
        <div className="mt-8">
          <ComparisonTable />
        </div>
      </Section>

      <CTASection
        headline="Etkö ole varma, kumpi paketti sopii?"
        text="Varaa kartoituspuhelu — käydään läpi yrityksesi tilanne ja suositellaan oikea lähestymistapa."
        buttonLabel="Varaa kartoituspuhelu"
      />
    </>
  );
}
