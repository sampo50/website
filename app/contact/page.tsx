import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Varaa kartoituspuhelu Sami Olavuon kanssa — Revenue Audit tai Fractional Revenue Manager majoitus- ja serviced living -yrityksille.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Varaa kartoituspuhelu"
        subheadline="Kerro yrityksestäsi, portfoliostasi ja nykyisestä revenue management -tilanteesta. Käydään läpi, sopiiko Revenue Audit vai Fractional Revenue Manager -palvelu."
      />

      <Section>
        <div className="mx-auto max-w-xl">
          <ContactForm />
          <p className="mt-8 text-center text-sm text-muted">
            Tai lähetä sähköpostia:{" "}
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
