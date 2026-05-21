import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a Revenue Review with Sami Olavuo.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Book a Revenue Review"
        subheadline="In a 30-minute call, we will look at your business model, current pricing challenges and where revenue or margin may be leaking."
      />

      <Section>
        <div className="mx-auto max-w-xl">
          <ContactForm />
          <p className="mt-8 text-center text-sm text-muted">
            Or email directly:{" "}
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
