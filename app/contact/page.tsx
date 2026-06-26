import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a call with Sami Olavuo to discuss fractional revenue management for your hospitality or serviced living concept.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Book a call"
        subheadline="Tell me about your concept, portfolio and current revenue setup. We'll discuss whether fractional revenue management or advisory support is the right fit."
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
