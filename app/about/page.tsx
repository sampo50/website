import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PROOF_BULLETS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tietoa",
  description:
    "Sami Olavuo — hospitality revenue management -konsultti majoitus- ja serviced living -yrityksille.",
};

const workingStyle = [
  "Kaupallinen vaikutus ennen monimutkaisuutta",
  "Käytännön suositukset teoreettisten mallien sijaan",
  "Selkeä vastuu, mittarit ja seuraavat askeleet",
  "Dataan perustuva, ei työkaluriippuvainen",
  "Rakennettu yrityksille, jotka tarvitsevat jatkuvaa revenue-johtajuutta",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="Hospitality revenue management -konsultti"
        subheadline="Autan majoitus- ja serviced living -yrityksiä parantamaan liikevaihtoa strategisella hinnoittelulla, forecastingilla ja AI-avusteisella päätöksenteolla."
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          <p>
            Taustani on portfolio-tason revenue managementissa, hinnoittelussa
            ja forecastingissa kapasiteettipohjaisissa majoitusliiketoimissa.
            Olen vastannut monikohdeportfolion kaupallisesta suorituskyvystä —
            hinnoittelusta ja kanavamixistä raportointiin, forecastingiin ja
            johdon päätöksentekoon.
          </p>
          <p>
            Tarjoan Revenue Audit -kertaprojektin nykytilan kartoittamiseen
            sekä Fractional Revenue Manager -palvelun yrityksille, jotka
            tarvitsevat jatkuvaa revenue management -osaamista ilman
            kokoaikaista rekrytointia.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {PROOF_BULLETS.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink"
            >
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">Miten työskentelen</h2>
        <ul className="mt-6 space-y-3">
          {workingStyle.map((w) => (
            <li key={w} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {w}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-10 inline-flex">
          Varaa kartoituspuhelu
        </Link>
      </Section>
    </>
  );
}
