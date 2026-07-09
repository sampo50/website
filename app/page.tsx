import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProofSection } from "@/components/ProofSection";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import {
  HERO,
  CTA,
  TARGET_CUSTOMER,
  PROBLEM_SIGNALS,
  SOLUTION,
  SOLUTION_AREAS,
  SERVICE_PATHS,
  PROCESS_STEPS,
  PROOF_BULLETS,
  FAQ_ITEMS,
  SITE,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-white/50 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="section-label">{HERO.label}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {HERO.subheadline}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted">{HERO.note}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#yhteystiedot" className="btn-primary">
              {CTA.primary}
            </Link>
            <Link href="#paketointi" className="btn-secondary">
              {CTA.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Kenelle */}
      <Section id="kenelle">
        <p className="section-label">Kenelle</p>
        <h2 className="section-title mt-3">{TARGET_CUSTOMER.headline}</h2>
        <p className="mt-4 max-w-2xl text-muted">{TARGET_CUSTOMER.text}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {TARGET_CUSTOMER.types.map((type) => (
            <li
              key={type}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink"
            >
              {type}
            </li>
          ))}
        </ul>
      </Section>

      {/* Ongelmat */}
      <Section alt>
        <p className="section-label">Tilanne</p>
        <h2 className="section-title mt-3">Tunnistatko nämä ongelmat?</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {PROBLEM_SIGNALS.map((item) => (
            <li key={item} className="card text-sm leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Palvelu */}
      <Section id="palvelu">
        <p className="section-label">Palvelu</p>
        <h2 className="section-title mt-3">{SOLUTION.headline}</h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          {SOLUTION.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-14">
          <ServiceAreaList
            title="Mitä palvelu sisältää"
            areas={SOLUTION_AREAS.map((area) => ({ ...area }))}
          />
        </div>
        <div className="mt-16">
          <h3 className="font-serif text-2xl text-ink">Miten työ etenee</h3>
          <div className="mt-8">
            <ProcessSteps steps={PROCESS_STEPS} />
          </div>
        </div>
      </Section>

      {/* Paketointi */}
      <Section alt id="paketointi">
        <p className="section-label">Paketointi</p>
        <h2 className="section-title mt-3">Palvelupaketit</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Aloita Revenue Auditilla tai valitse jatkuva malli kohteesi tarpeen
          mukaan. Hinnat ovat suuntaa-antavia — lopullinen laajuus sovitaan
          kartoituksessa.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* Kokemus */}
      <Section id="kokemus">
        <ProofSection bullets={PROOF_BULLETS} />
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
        <div className="mx-auto max-w-xl">
          <p className="section-label">Yhteystiedot</p>
          <h2 className="section-title mt-3">{CTA.primary}</h2>
          <p className="mt-4 text-muted">
            Kerro hotellistasi tai kohteestasi, huonemäärästä ja nykyisestä
            revenue management -tilanteesta. Vastaan henkilökohtaisesti.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Tai sähköposti:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-accent hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
