import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PROOF_BULLETS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sami Olavuo works at the intersection of pricing, revenue management, commercial analytics and business performance.",
};

const workingStyle = [
  "Diagnostic before solution",
  "Commercial impact before complexity",
  "Practical recommendations over theoretical models",
  "Clear owner, metric and next step for each recommendation",
  "Data-informed, not tool-dependent",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="Revenue, pricing and commercial performance consulting."
        subheadline="Sami Olavuo works at the intersection of pricing, revenue management, commercial analytics and business performance."
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          <p>
            His background includes portfolio-level revenue management, pricing
            strategy, forecasting and performance tracking in capacity-based
            service businesses.
          </p>
          <p>
            He helps companies move from intuition-based pricing to structured
            commercial decision-making.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {PROOF_BULLETS.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink"
            >
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">How Sami works</h2>
        <ul className="mt-6 space-y-3">
          {workingStyle.map((w) => (
            <li key={w} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {w}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-10 inline-flex">
          Book a Revenue Review
        </Link>
      </Section>
    </>
  );
}
