import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICE_PATHS, SERVICE_OFFERINGS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Revenue and pricing services for hospitality, B2B service and ecommerce businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Revenue and pricing services"
        subheadline="Three focused service lines built around one method: identify leakage, size the opportunity and improve commercial decision-making."
        primaryCta={{ label: "Book a Revenue Review", href: "/contact" }}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.href} {...s} detailed />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">How the services fit together</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Most work starts with a diagnostic audit. From there, support can
          continue through pricing implementation, dashboard setup, commercial
          routines or fractional revenue leadership.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {SERVICE_OFFERINGS.map((o) => (
            <li
              key={o}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-ink"
            >
              {o}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
