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
    "Revenue Audit, Revenue Control ja Revenue Growth hotelleille ja serviced living -operaattoreille.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline={SITE_INTRO.headline}
        subheadline={`${SITE_INTRO.text} ${SITE_INTRO.text2}`}
        primaryCta={{ label: "Varaa 30 minuutin revenue-kartoitus", href: "/contact" }}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
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
        text="Varaa kartoituspuhelu ja katsotaan aloitetaanko Revenue Auditilla, Revenue Controlilla vai Revenue Growth -mallilla."
        buttonLabel="Varaa 30 minuutin revenue-kartoitus"
      />
    </>
  );
}
