import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="border-b border-border bg-white/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{subheadline}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
