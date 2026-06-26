import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProofSection } from "@/components/ProofSection";
import { CTASection } from "@/components/CTASection";
import {
  SERVICE_PATHS,
  REVENUE_CHALLENGES,
  METHOD_STEPS,
  PROOF_BULLETS,
  HERO_PROOF_STRIP,
  CLIENT_TYPES,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-white/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Hospitality Revenue Performance
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl lg:text-[3.25rem]">
            Fractional revenue management for hospitality and serviced living
            operators.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            I work with a small number of accommodation and serviced living
            concepts as a fractional revenue manager or strategic advisor —
            owning revenue strategy, pricing, forecasting, tooling and
            AI-assisted commercial decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book a call
            </Link>
            <Link href="/services" className="btn-secondary">
              View services
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
          Occupancy alone does not prove the business is commercially optimized.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Revenue often leaks through pricing, channel mix, segmentation and slow
          commercial decision-making — long before it shows up clearly in the
          P&L. Many operators need senior revenue leadership but not a full-time
          hire.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVENUE_CHALLENGES.map((ex) => (
            <li key={ex} className="card text-sm font-medium text-ink">
              {ex}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt id="services">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          What I do
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Engagements are built around ongoing revenue ownership or focused
          advisory work — covering strategy, pricing, tools, forecasts and
          practical AI applications.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {SERVICE_PATHS.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section id="clients">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          Who I work with
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          I take on 3–5 clients at a time — operators running serviced living,
          aparthotels, boutique hospitality and flexible accommodation concepts
          who want structured revenue performance, not ad-hoc pricing.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {CLIENT_TYPES.map((type) => (
            <li
              key={type}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink"
            >
              {type}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt id="method">
        <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
          How engagements work
        </h2>
        <div className="mt-10">
          <ProcessSteps steps={METHOD_STEPS} />
        </div>
      </Section>

      <Section>
        <ProofSection bullets={PROOF_BULLETS} />
      </Section>

      <CTASection
        headline="Looking for fractional revenue leadership?"
        text="Book a short call to discuss your portfolio, current commercial setup and whether an ongoing engagement makes sense."
        buttonLabel="Book a call"
      />
    </>
  );
}
