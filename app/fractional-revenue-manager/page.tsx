import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { TierCard } from "@/components/TierCard";
import { CTASection } from "@/components/CTASection";
import { FRACTIONAL_RM, FRACTIONAL_TIERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fractional Revenue Manager",
  description:
    "Fractional Revenue Manager hotellille tai serviced living -operaattorille ilman kokoaikaista rekrytointia.",
};

export default function FractionalRevenueManagerPage() {
  return (
    <>
      <PageHero
        eyebrow={FRACTIONAL_RM.eyebrow}
        headline={FRACTIONAL_RM.headline}
        subheadline={FRACTIONAL_RM.subheadline}
        primaryCta={{
          label: FRACTIONAL_RM.primaryCta,
          href: "/contact",
        }}
        secondaryCta={{
          label: FRACTIONAL_RM.secondaryCta,
          href: "/contact",
        }}
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          <p>{FRACTIONAL_RM.intro}</p>
          <p>{FRACTIONAL_RM.intro2}</p>
          <p>{FRACTIONAL_RM.intro3}</p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Kenelle tämä sopii?
        </h2>
        <p className="mt-4 text-muted">
          Fractional Revenue Manager sopii yritykselle, joka:
        </p>
        <ul className="mt-6 space-y-3">
          {FRACTIONAL_RM.fitFor.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <ServiceAreaList
          title="Mitä palvelu sisältää?"
          areas={FRACTIONAL_RM.includes}
        />
        <p className="mt-6 text-sm text-muted">
          Palvelun sisältö räätälöidään yrityksen kokoon, tavoitteisiin ja
          järjestelmäympäristöön.
        </p>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Strateginen ja kaupallinen vaikuttavuus
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          <p>{FRACTIONAL_RM.impact}</p>
          <p>{FRACTIONAL_RM.impact2}</p>
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Miksi tämä on ajankohtaista juuri nyt?
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          <p>{FRACTIONAL_RM.whyNow}</p>
          <p>{FRACTIONAL_RM.whyNow2}</p>
        </div>
      </Section>

      <Section alt id="packages">
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Palvelutasot
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {FRACTIONAL_TIERS.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">Lopputulos</h2>
        <p className="mt-4 max-w-2xl text-muted">{FRACTIONAL_RM.outcome}</p>
      </Section>

      <CTASection
        headline={FRACTIONAL_RM.primaryCta}
        text="Varaa kartoituspuhelu ja käydään läpi, sopiiko hotellillesi paremmin Revenue Control vai Revenue Growth."
        buttonLabel="Varaa 30 minuutin revenue-kartoitus"
        secondaryButtonLabel={FRACTIONAL_RM.secondaryCta}
      />
    </>
  );
}
