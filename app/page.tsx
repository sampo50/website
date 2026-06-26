import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import {
  SERVICE_PATHS,
  SITE_INTRO,
  HERO_TAGLINE,
  HERO_SUBTAGLINE,
  PROOF_BULLETS,
  HERO_PROOF_STRIP,
  CLIENT_TYPES,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Hospitality Revenue Performance
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
            {HERO_TAGLINE}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{HERO_SUBTAGLINE}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Varaa kartoituspuhelu
            </Link>
            <Link href="/services" className="btn-secondary">
              Tutustu palveluihin
            </Link>
          </div>
          <ul className="mt-12 grid gap-3 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_PROOF_STRIP.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section id="intro">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          {SITE_INTRO.headline}
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          <p>{SITE_INTRO.text}</p>
          <p>{SITE_INTRO.text2}</p>
          <p className="font-medium text-ink">{SITE_INTRO.goal}</p>
        </div>
      </Section>

      <Section alt id="services">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Palvelut
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Kaksi tapaa työskennellä yhdessä: kertaluonteinen Revenue Audit
          nykytilan kartoittamiseen tai jatkuva Fractional Revenue Manager
          -palvelu kuukausimallilla.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section id="comparison">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Mikä paketti sopii sinulle?
        </h2>
        <div className="mt-8">
          <ComparisonTable />
        </div>
      </Section>

      <Section alt id="clients">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Kenelle palvelut on suunnattu
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Työskentelen rajoitetun määrän majoitus- ja serviced living
          -yritysten kanssa — operaattoreita, jotka haluavat rakentaa
          järjestelmällisen revenue management -mallin eivätkä tyytyä
          ad-hoc-hinnoitteluun.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {CLIENT_TYPES.map((type) => (
            <li
              key={type}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink"
            >
              {type}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <ProofSection bullets={PROOF_BULLETS} />
      </Section>

      <CTASection
        headline="Haluatko selvittää, mikä paketti sopii yrityksellesi?"
        text="Varaa kartoituspuhelu ja käydään läpi nykytilanne, tavoitteet ja seuraavat askeleet."
        buttonLabel="Varaa kartoituspuhelu"
      />
    </>
  );
}
