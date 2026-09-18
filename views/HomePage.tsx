import Link from "next/link";
import { PackageCard } from "@/components/PackageCard";
import { Section } from "@/components/Section";
import { CredibilitySection } from "@/components/CredibilitySection";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { SolutionComparison } from "@/components/SolutionComparison";
import { ContactActions } from "@/components/ContactActions";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { contactMailto, packagesFor } from "@/lib/site";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const packages = packagesFor(locale);
  const { home } = dict;

  return (
    <>
      <section className="border-b border-border bg-white/50 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div>
            <h1 className="max-w-2xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
              {home.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-snug text-ink md:text-2xl">
              {home.hero.subheadline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {home.hero.body}
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-ink/80 md:text-base">
              {home.hero.trustLine}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-primary">
                {dict.cta.primary}
              </Link>
              <Link
                href={localizeHref(locale, "/services")}
                className="btn-secondary"
              >
                {dict.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section id="audience">
        <p className="section-label">{home.sections.audienceLabel}</p>
        <h2 className="section-title mt-3">{home.audience.headline}</h2>
        <p className="mt-4 max-w-2xl text-muted">{home.audience.text}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {home.audience.types.map((type) => (
            <li key={type} className="card text-sm font-medium text-ink">
              {type}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{home.audience.note}</p>
      </Section>

      <Section alt id="situation">
        <p className="section-label">{home.sections.situationLabel}</p>
        <h2 className="section-title mt-3">{home.sections.situationHeadline}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {home.problems.signals.map((item) => (
            <li key={item} className="card text-sm leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-ink/80 md:text-base">
          {home.problems.insight}
        </p>
      </Section>

      <Section id="what">
        <p className="section-label">{home.sections.whatLabel}</p>
        <h2 className="section-title mt-3">{home.solution.headline}</h2>
        <p className="mt-6 max-w-2xl text-muted">{home.solution.body}</p>
        <div className="mt-10">
          <SolutionComparison
            before={home.solution.comparison.before}
            after={home.solution.comparison.after}
            beforeLabel={home.solution.comparison.beforeLabel}
            afterLabel={home.solution.comparison.afterLabel}
          />
        </div>
        <div className="mt-14">
          <ServiceAreaList
            title={home.sections.serviceIncludes}
            areas={home.solutionAreas.map((area) => ({
              title: area.title,
              bullets: [...area.bullets],
            }))}
          />
        </div>
        <div className="mt-16">
          <h3 className="section-title">{home.processHeading}</h3>
          <div className="mt-8">
            <ProcessSteps steps={[...home.processSteps]} />
          </div>
        </div>
      </Section>

      <Section alt id="services">
        <p className="section-label">{home.sections.servicesLabel}</p>
        <h2 className="section-title mt-3">{home.sections.servicesHeadline}</h2>
        <p className="mt-4 max-w-2xl text-muted">{home.sections.servicesIntro}</p>
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </Section>

      <Section id="experience">
        <CredibilitySection
          content={{
            experienceLabel: home.sections.experienceLabel,
            headline: home.credibility.headline,
            body: home.credibility.body,
            work: home.credibility.work,
            meaningHeading: home.credibility.meaningHeading,
            bullets: home.credibility.bullets,
            proof: home.credibility.proof,
            bridge: home.credibility.bridge,
            cta: {
              label: home.credibility.cta.label,
              text: home.credibility.cta.text,
              href: contactMailto(locale, "potential"),
            },
          }}
        />
      </Section>

      <Section alt id="faq">
        <p className="section-label">{home.sections.faqLabel}</p>
        <h2 className="section-title mt-3">{home.sections.faqHeadline}</h2>
        <div className="mt-8">
          <FAQ items={[...home.faq]} />
        </div>
      </Section>

      <Section id="contact">
        <div className="mx-auto max-w-5xl">
          <p className="section-label">{home.sections.contactLabel}</p>
          <h2 className="section-title mt-3">{dict.contact.heading}</h2>
          <p className="mt-4 max-w-2xl text-muted">{dict.contact.body}</p>
          <div className="mt-12 max-w-xl">
            <ContactActions />
          </div>
        </div>
      </Section>
    </>
  );
}
