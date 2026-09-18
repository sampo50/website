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
    ? "relative flex h-full min-w-0 flex-col rounded-lg border-2 border-navy bg-white p-5 shadow-md lg:p-6"
    : "flex h-full min-w-0 flex-col rounded-lg border border-border bg-white p-5 shadow-sm lg:p-6";
  const priceClass = highlighted
    ? "text-base font-semibold text-navy lg:text-lg"
    : "text-base font-semibold text-accent lg:text-lg";
  const ctaClass = highlighted
    ? "btn-primary mt-5 w-full justify-center self-stretch text-center lg:mt-6"
    : "btn-secondary mt-5 w-full justify-center self-stretch text-center lg:mt-6";

  return (
    <article className={shellClass}>
      {badge && (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {badge}
        </p>
      )}
      <h3
        className={`${badge ? "mt-2" : ""} font-serif text-xl font-normal text-ink`}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm font-medium leading-snug text-ink/80">{tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink">
        {includesLabel}
      </p>
      <ul className="mt-2.5 flex-1 space-y-1.5">
        {includes.map((item) => (
          <li key={item} className="flex gap-2 text-[0.8125rem] leading-snug text-ink">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-border pt-5">
        <p className={priceClass}>{price}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted">{terms}</p>

        <a href={href} className={ctaClass}>
          {cta}
        </a>

        {footnote && (
          <p className="mt-3 text-xs leading-relaxed text-muted">{footnote}</p>
        )}
      </div>
    </article>
  );
}
