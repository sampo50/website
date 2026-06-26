import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import {
  SERVICE_PATHS,
  METHOD_STEPS,
  CLIENT_TYPES,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fractional revenue management, revenue strategy and AI-assisted commercial tooling for hospitality and serviced living operators.",
};

const engagementIncludes = [
  "Revenue strategy and pricing ownership",
  "Channel mix and distribution decisions",
  "Forecasting, budgeting and scenario planning",
  "Dashboard and reporting maintenance",
  "RMS, PMS and channel manager workflows",
  "AI-assisted pricing and demand analysis",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Fractional revenue management for hospitality operators"
        subheadline="I work with a small number of clients as a fractional revenue manager or advisor — delivering strategy, pricing, tooling, forecasts and practical AI solutions."
        primaryCta={{ label: "Book a call", href: "/contact" }}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.title} {...s} detailed />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">What engagements cover</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Whether fractional or advisory, the work focuses on building and
          maintaining a commercial system that improves revenue performance over
          time — not one-off recommendations.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {engagementIncludes.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink">How engagements work</h2>
        <div className="mt-8">
          <ProcessSteps steps={METHOD_STEPS} />
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">Best fit for</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {CLIENT_TYPES.map((type) => (
            <li
              key={type}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink"
            >
              {type}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          I work with 3–5 clients at a time to ensure real ownership and
          continuity. Engagements are scoped based on portfolio size, data
          availability and the level of hands-on support needed.
        </p>
      </Section>

      <CTASection
        headline="Interested in working together?"
        text="Book a short call to discuss your concept, current revenue setup and what kind of support would make the biggest difference."
        buttonLabel="Book a call"
      />
    </>
  );
}
