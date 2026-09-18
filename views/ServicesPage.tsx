import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PackageCard } from "@/components/PackageCard";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { packagesFor } from "@/lib/site";

export function ServicesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const packages = packagesFor(locale).map((pkg) => ({
    ...pkg,
    href: localizeHref(locale, "/contact"),
  }));
  const contactHref = localizeHref(locale, "/contact");
  const page = dict.servicesPage;

  const rows = packages.map((pkg) => ({
    package: pkg.title,
    bestWhen: pkg.tagline,
    includes: pkg.includes.join("; "),
    model: pkg.price.includes("/kk") || pkg.price.toLowerCase().includes("/ month")
      ? page.modelMonthly
      : page.modelOneOff,
    href: contactHref,
  }));

  return (
    <>
      <PageHero
        headline={dict.home.hero.subheadline}
        subheadline={`${dict.home.hero.body} ${dict.home.hero.trustLine}`}
        primaryCta={{ label: dict.cta.primary, href: contactHref }}
      />

      <Section>
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.comparisonHeadline}
        </h2>
        <div className="mt-8">
          <ComparisonTable rows={rows} labels={page.table} />
        </div>
      </Section>

      <CTASection
        headline={page.ctaHeadline}
        text={page.ctaText}
        buttonLabel={dict.cta.primary}
        href={contactHref}
      />
    </>
  );
}
