import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
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
        <div className="mx-auto max-w-xl">
          <ContactActions />
        </div>
      </Section>
    </>
  );
}
