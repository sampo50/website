import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PACKAGES, SITE_INTRO, CTA } from "@/lib/site";

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
        primaryCta={{ label: CTA.primary, href: "/#yhteystiedot" }}
      />

      <Section>
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
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
        buttonLabel={CTA.primary}
      />
    </>
  );
}
