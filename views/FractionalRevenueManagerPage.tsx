import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { TierCard } from "@/components/TierCard";
import { CTASection } from "@/components/CTASection";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function FractionalRevenueManagerPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const page = dict.fractionalPage;
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
          <p>{page.intro2}</p>
          <p>{page.intro3}</p>
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
          title={page.includesTitle}
          areas={dict.home.solutionAreas.map((a) => ({
            title: a.title,
            bullets: [...a.bullets],
          }))}
        />
        <p className="mt-6 text-sm text-muted">{page.includesNote}</p>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.impactHeading}
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          <p>{page.impact}</p>
          <p>{page.impact2}</p>
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.whyNowHeading}
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          <p>{page.whyNow}</p>
          <p>{page.whyNow2}</p>
        </div>
      </Section>

      <Section alt id="packages">
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.tiersHeading}
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {page.tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} includes={[...tier.includes]} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.outcomeHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{page.outcome}</p>
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
