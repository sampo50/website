import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ServiceAreaList } from "@/components/ServiceAreaList";
import {
  SERVICE_PATHS,
  SITE_INTRO,
  HERO_TAGLINE,
  HERO_SUBTAGLINE,
  PROOF_BULLETS,
  HERO_PROOF_STRIP,
  CLIENT_TYPES,
  PROBLEM_SIGNALS,
  SOLUTION_AREAS,
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

      <Section alt id="problems">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Tunnistatko nämä ongelmat?
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {PROBLEM_SIGNALS.map((item) => (
            <li key={item} className="card text-sm font-medium text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="solution">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Ratkaisu
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          <p>
            Toimin ulkoistettuna revenue managerina, joka tuo hotellillenne
            viikoittaisen kaupallisen rytmin.
          </p>
          <p>
            Hinnoittelu, saatavuus, rajoitukset, kampanjat, segmentit ja
            jakelukanavat ohjataan järjestelmällisesti datan, kysynnän ja
            liiketoimintatavoitteiden perusteella.
          </p>
          <p>
            Tavoite ei ole tehdä satunnaisia hintamuutoksia, vaan rakentaa
            toimintamalli, jossa johto näkee ajoissa missä kysyntä vahvistuu,
            missä ollaan jäljessä ja mitä päätöksiä seuraavaksi tarvitaan.
          </p>
        </div>
      </Section>

      <Section alt id="includes">
        <ServiceAreaList
          title="Mitä palvelu sisältää?"
          areas={SOLUTION_AREAS.map((area) => ({ ...area }))}
        />
      </Section>

      <Section id="services">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Palvelupaketit
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Aloita Revenue Auditilla tai valitse jatkuva revenue management -malli
          kohteesi tarpeen mukaan.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
          Sopii erityisesti
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Itsenäisille hotelleille, boutique-hotelleille ja serviced living
          -operaattoreille, jotka haluavat ohjata tuottoa järjestelmällisesti
          eivätkä vain reagoida liian myöhään.
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
        headline="Aloita Revenue Auditilla"
        text="Auditoinnin jälkeen tiedät, missä nykyinen tulospotentiaali vuotaa, mitkä päätökset vaikuttavat nopeimmin ja kannattaako jatkuva fractional revenue management ottaa käyttöön."
        buttonLabel="Varaa 30 minuutin revenue-kartoitus"
      />
    </>
  );
}
