import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";
import {
  SERVICE_PATHS,
  LEAKAGE_EXAMPLES,
  METHOD_STEPS,
  PROOF_BULLETS,
  HERO_PROOF_STRIP,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Revenue & Pricing Performance Consulting
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
            Find and fix revenue leakage in pricing, margins and commercial
            decision-making.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Sami Olavuo helps hospitality, B2B service and ecommerce businesses
            improve revenue performance through pricing, packaging, channel mix
            and data-driven commercial decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book a Revenue Review
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
          <ul className="mt-12 grid gap-3 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_PROOF_STRIP.map((item) => (
              <li key={item} className="text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section id="problem">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Revenue is often leaking before it shows up in the P&L.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Revenue leakage rarely comes from one obvious issue. It often sits in
          outdated price logic, unmanaged discounts, weak channel mix, poor
          segmentation, underused capacity, unclear packages or slow commercial
          decision-making.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEAKAGE_EXAMPLES.map((ex) => (
            <li key={ex} className="card text-sm font-medium text-ink">
              {ex}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt id="services">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          One method. Three commercial contexts.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          The same core discipline applies across different business models:
          understand the baseline, identify leakage, size the opportunity and
          define the next commercial moves.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </Section>

      <Section id="method">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          A practical audit-first approach.
        </h2>
        <div className="mt-10">
          <ProcessSteps steps={METHOD_STEPS} />
        </div>
        <p className="mt-8">
          <Link href="/revenue-leakage-audit" className="text-sm font-semibold text-accent hover:underline">
            Learn about the Revenue Leakage Audit →
          </Link>
        </p>
      </Section>

      <Section alt>
        <ProofSection bullets={PROOF_BULLETS} />
      </Section>

      <CTASection
        headline="Not sure where revenue is leaking?"
        text="Start with a focused Revenue Review. In 30 minutes, we will look at your business model, current pricing challenges and where revenue or margin may be leaking."
        buttonLabel="Book a Revenue Review"
      />
    </>
  );
}
