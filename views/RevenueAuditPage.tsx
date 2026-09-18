import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { AnalysisList } from "@/components/AnalysisList";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { CTASection } from "@/components/CTASection";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function RevenueAuditPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const page = dict.revenueAuditPage;
  const contactHref = localizeHref(locale, "/contact");

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        headline={page.headline}
        subheadline={page.subheadline}
        primaryCta={{ label: dict.cta.primary, href: contactHref }}
        secondaryCta={{ label: page.secondaryCta, href: contactHref }}
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          <p>{page.intro}</p>
          <p>{page.fitIntro}</p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.fitHeading}
        </h2>
        <p className="mt-4 text-muted">{page.fitLead}</p>
        <ul className="mt-6 space-y-3">
          {page.fitFor.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <ServiceAreaList
          title={page.areasTitle}
          areas={dict.home.solutionAreas.map((a) => ({
            title: a.title,
            bullets: [...a.bullets],
          }))}
        />
      </Section>

      <Section alt>
        <AnalysisList title={page.deliverablesTitle} items={[...page.deliverables]} />
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.benefitsHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{page.benefits}</p>
        <p className="mt-8 text-lg font-semibold text-accent">{page.price}</p>
        <p className="mt-2 text-sm text-muted">{page.priceNote}</p>
      </Section>

      <CTASection
        headline={page.ctaHeadline}
        text={page.ctaText}
        buttonLabel={dict.cta.primary}
        secondaryButtonLabel={page.secondaryCta}
        href={contactHref}
        secondaryHref={contactHref}
      />
    </>
  );
}
