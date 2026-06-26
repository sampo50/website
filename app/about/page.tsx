import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PROOF_BULLETS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sami Olavuo provides fractional revenue management and advisory for hospitality and serviced living operators.",
};

const workingStyle = [
  "Commercial impact before complexity",
  "Practical recommendations over theoretical models",
  "Clear ownership, metrics and next steps",
  "Data-informed, not tool-dependent",
  "Built for operators who need ongoing revenue leadership",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="Fractional revenue management for hospitality operators."
        subheadline="I help accommodation and serviced living concepts improve revenue performance through pricing, forecasting, tooling and structured commercial decision-making."
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          <p>
            My background is in portfolio-level revenue management, pricing
            strategy and forecasting for capacity-based hospitality businesses.
            I have owned revenue performance across multi-asset portfolios —
            from pricing and channel mix to reporting, forecasting and
            management decision-making.
          </p>
          <p>
            Today I work with a small number of operators as a fractional
            revenue manager or advisor. The focus is on building and maintaining
            the commercial systems that drive revenue — not delivering
            one-off audits and moving on.
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
        <h2 className="font-serif text-2xl text-ink">How I work</h2>
        <ul className="mt-6 space-y-3">
          {workingStyle.map((w) => (
            <li key={w} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {w}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn-primary mt-10 inline-flex">
          Book a call
        </Link>
      </Section>
    </>
  );
}
