import Link from "next/link";
import type { ServicePath } from "@/lib/site";

type ServiceCardProps = ServicePath & {
  detailed?: boolean;
};

export function ServiceCard({
  title,
  description,
  focus,
  href,
  cta,
  price,
  detailed,
}: ServiceCardProps) {
  return (
    <article className="card flex flex-col">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      {price && (
        <p className="mt-2 text-sm font-semibold text-accent">{price}</p>
      )}
      <p className="mt-3 text-sm text-muted">{description}</p>
      <ul className="mt-4 flex flex-1 list-disc flex-col gap-2 pl-5">
        {focus.map((item) => (
          <li key={item} className="text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
      {detailed && price && (
        <p className="mt-4 text-sm text-muted">
          Laajemmat kokonaisuudet, useat kohteet tai portfoliot hinnoitellaan
          erikseen.
        </p>
      )}
      <Link href={href} className="btn-secondary mt-6 self-start">
        {cta}
      </Link>
    </article>
  );
}
