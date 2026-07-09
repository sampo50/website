import Link from "next/link";
import { PackageCard } from "@/components/PackageCard";
import { Section } from "@/components/Section";
import { CredibilitySection } from "@/components/CredibilitySection";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { SolutionComparison } from "@/components/SolutionComparison";
import { ContactForm } from "@/components/ContactForm";
import {
  HERO,
  CTA,
  TARGET_CUSTOMER,
  PROBLEM_SIGNALS,
  PROBLEM_INSIGHT,
  SOLUTION,
  SOLUTION_AREAS,
  PACKAGES,
  PROCESS_STEPS,
  PROCESS_HEADING,
  FAQ_ITEMS,
  CONTACT,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-white/50 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div>
            <h1 className="max-w-2xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
              {HERO.headline}
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-snug text-ink md:text-2xl">
              {HERO.subheadline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {HERO.body}
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-ink/80 md:text-base">
              {HERO.trustLine}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#yhteystiedot" className="btn-primary">
                {CTA.primary}
              </Link>
              <Link href="#paketointi" className="btn-secondary">
                {CTA.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kenelle */}
      <Section id="kenelle">
        <p className="section-label">Kenelle</p>
        <h2 className="section-title mt-3">{TARGET_CUSTOMER.headline}</h2>
        <p className="mt-4 max-w-2xl text-muted">{TARGET_CUSTOMER.text}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TARGET_CUSTOMER.types.map((type) => (
            <li key={type} className="card text-sm font-medium text-ink">
              {type}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{TARGET_CUSTOMER.note}</p>
      </Section>

      {/* Ongelmat */}
      <Section alt id="ongelmat">
        <p className="section-label">Tilanne</p>
        <h2 className="section-title mt-3">Tunnistatko nämä merkit?</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {PROBLEM_SIGNALS.map((item) => (
            <li key={item} className="card text-sm leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-ink/80 md:text-base">
          {PROBLEM_INSIGHT}
        </p>
      </Section>

      {/* Mitä */}
      <Section id="mitä">
        <p className="section-label">Mitä</p>
        <h2 className="section-title mt-3">{SOLUTION.headline}</h2>
        <p className="mt-6 max-w-2xl text-muted">{SOLUTION.body}</p>
        <div className="mt-10">
          <SolutionComparison
            before={SOLUTION.comparison.before}
            after={SOLUTION.comparison.after}
          />
        </div>
        <div className="mt-14">
          <ServiceAreaList
            title="Mitä palvelu sisältää?"
            areas={SOLUTION_AREAS.map((area) => ({
              title: area.title,
              bullets: [...area.bullets],
            }))}
          />
        </div>
        <div className="mt-16">
          <h3 className="section-title">{PROCESS_HEADING}</h3>
          <div className="mt-8">
            <ProcessSteps steps={PROCESS_STEPS} />
          </div>
        </div>
      </Section>

      {/* Palvelut */}
      <Section alt id="palvelut">
        <p className="section-label">Palvelut</p>
        <h2 className="section-title mt-3">Palvelut</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Aloita Revenue Auditilla tai valitse jatkuva malli kohteesi tarpeen
          mukaan. Hinnat ovat suuntaa-antavia — lopullinen laajuus sovitaan
          kartoituksessa.
        </p>
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </Section>

      {/* Kokemus */}
      <Section id="kokemus">
        <CredibilitySection />
      </Section>

      {/* FAQ */}
      <Section alt id="faq">
        <p className="section-label">FAQ</p>
        <h2 className="section-title mt-3">Usein kysyttyä</h2>
        <div className="mt-8">
          <FAQ items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* Yhteystiedot */}
      <Section id="yhteystiedot">
        <div className="mx-auto max-w-5xl">
          <p className="section-label">Yhteystiedot</p>
          <h2 className="section-title mt-3">{CONTACT.heading}</h2>
          <p className="mt-4 max-w-2xl text-muted">{CONTACT.body}</p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="text-sm font-medium text-ink">Suora yhteys</p>
              <ul className="mt-4 space-y-3 text-muted">
                <li>{CONTACT.direct.email}</li>
                <li>{CONTACT.direct.phone}</li>
                <li>{CONTACT.direct.website}</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
