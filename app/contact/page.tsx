import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Varaa 30 minuutin revenue-kartoitus hotellillesi tai serviced living -kohteellesi.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Varaa 30 minuutin revenue-kartoitus"
        subheadline="Kerro hotellistasi tai kohteestasi, nykyisestä revenue management -tilanteesta ja tärkeimmistä kaupallisista haasteista."
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
