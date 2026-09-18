import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { ContactActions } from "@/components/ContactActions";
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
            <ContactActions />
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
