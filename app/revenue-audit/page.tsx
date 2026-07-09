import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { AnalysisList } from "@/components/AnalysisList";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { CTASection } from "@/components/CTASection";
import { REVENUE_AUDIT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Revenue Audit",
  description:
    "Kertaluonteinen analyysi hotellin tai serviced living -kohteen hinnoittelusta, kanavista, segmenteista ja tulospotentiaalista.",
};

export default function RevenueAuditPage() {
  return (
    <>
      <PageHero
        eyebrow={REVENUE_AUDIT.eyebrow}
        headline={REVENUE_AUDIT.headline}
        subheadline={REVENUE_AUDIT.subheadline}
        primaryCta={{
          label: REVENUE_AUDIT.primaryCta,
          href: "/contact",
        }}
        secondaryCta={{
          label: REVENUE_AUDIT.secondaryCta,
          href: "/contact",
        }}
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          <p>{REVENUE_AUDIT.intro}</p>
          <p>{REVENUE_AUDIT.fitIntro}</p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Kenelle tämä sopii?
        </h2>
        <p className="mt-4 text-muted">
          Revenue Audit sopii yritykselle, joka:
        </p>
        <ul className="mt-6 space-y-3">
          {REVENUE_AUDIT.fitFor.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <ServiceAreaList
          title="Mitä auditissa käydään läpi?"
          areas={REVENUE_AUDIT.areas}
        />
      </Section>

      <Section alt>
        <AnalysisList title="Lopputulos — mitä saat" items={REVENUE_AUDIT.deliverables} />
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Hyödyt yritykselle
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{REVENUE_AUDIT.benefits}</p>
        <p className="mt-8 text-lg font-semibold text-accent">
          {REVENUE_AUDIT.price}
        </p>
        <p className="mt-2 text-sm text-muted">{REVENUE_AUDIT.priceNote}</p>
      </Section>

      <CTASection
        headline="Aloita Revenue Auditilla"
        text="Auditoinnin jälkeen tiedät, missä nykyinen tulospotentiaali vuotaa, mitkä päätökset vaikuttavat nopeimmin ja kannattaako jatkuva fractional revenue management ottaa käyttöön."
        buttonLabel="Varaa 30 minuutin revenue-kartoitus"
        secondaryButtonLabel={REVENUE_AUDIT.secondaryCta}
      />
    </>
  );
}
