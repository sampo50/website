import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Varaa 30 minuutin revenue-kartoitus hotellillesi tai serviced living -kohteellesi.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline={CONTACT.heading}
        subheadline={CONTACT.body}
      />

      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
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
