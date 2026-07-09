import Link from "next/link";
import type { Package } from "@/lib/site";

type PackageCardProps = Package;

export function PackageCard({
  title,
  positioning,
  description,
  price,
  cta,
  href,
  highlighted,
}: PackageCardProps) {
  if (highlighted) {
    return (
      <article className="relative flex flex-col rounded-lg border-2 border-navy bg-white p-6 shadow-md">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Kasvuhakuisille
        </p>
        <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm font-medium text-ink/80">{positioning}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>
        <p className="mt-6 text-lg font-semibold text-navy">{price}</p>
        <Link href={href} className="btn-primary mt-6 self-start">
          {cta}
        </Link>
      </article>
    );
  }

  return (
    <article className="card flex flex-col">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm font-medium text-ink/80">{positioning}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <p className="mt-6 text-lg font-semibold text-accent">{price}</p>
      <Link href={href} className="btn-secondary mt-6 self-start">
        {cta}
      </Link>
    </article>
  );
}
