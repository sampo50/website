import type { FractionalTier } from "@/lib/site";

type TierCardProps = FractionalTier;

export function TierCard({ name, description, includes, price }: TierCardProps) {
  return (
    <article className="card flex flex-col">
      <h3 className="text-lg font-semibold text-ink">{name}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <ul className="mt-4 flex flex-1 list-disc flex-col gap-2 pl-5">
        {includes.map((item) => (
          <li key={item} className="text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm font-semibold text-accent">{price}</p>
    </article>
  );
}
