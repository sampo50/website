type ServiceCardProps = {
  title: string;
  description: string;
  focus: string[];
  href: string;
  cta: string;
  price?: string;
  featured?: boolean;
};

export function ServiceCard({
  title,
  description,
  focus,
  href,
  cta,
  price,
  featured,
}: ServiceCardProps) {
  return (
    <article
      className={`card flex flex-col ${featured ? "border-navy/20 shadow-md" : ""}`}
    >
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {focus.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink">
          {focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {price && (
        <p className="mt-4 text-sm font-semibold text-accent">{price}</p>
      )}
      <a href={href} className="btn-secondary mt-6 self-start">
        {cta}
      </a>
    </article>
  );
}
