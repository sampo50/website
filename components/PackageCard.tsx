type PackageCardProps = {
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  includesLabel: string;
  includes: readonly string[];
  price: string;
  terms: string;
  footnote?: string;
  cta: string;
  href: string;
  highlighted?: boolean;
};

export function PackageCard({
  title,
  badge,
  tagline,
  description,
  includesLabel,
  includes,
  price,
  terms,
  footnote,
  cta,
  href,
  highlighted,
}: PackageCardProps) {
  const shellClass = highlighted
    ? "relative flex h-full min-w-0 flex-col rounded-lg border-2 border-navy bg-white p-6 shadow-md"
    : "card flex h-full min-w-0 flex-col";
  const priceClass = highlighted
    ? "text-lg font-semibold text-navy"
    : "text-lg font-semibold text-accent";
  const ctaClass = highlighted ? "btn-primary mt-6 self-start" : "btn-secondary mt-6 self-start";

  return (
    <article className={shellClass}>
      {badge && (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {badge}
        </p>
      )}
      <h3 className={`${badge ? "mt-2" : ""} text-lg font-semibold text-ink`}>
        {title}
      </h3>
      <p className="mt-2 text-sm font-medium text-ink/80">{tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
        {includesLabel}
      </p>
      <ul className="mt-3 flex-1 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      <p className={`mt-6 ${priceClass}`}>{price}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted">{terms}</p>

      <a href={href} className={ctaClass}>
        {cta}
      </a>

      {footnote && (
        <p className="mt-4 text-xs leading-relaxed text-muted">{footnote}</p>
      )}
    </article>
  );
}
