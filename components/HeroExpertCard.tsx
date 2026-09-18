import { SITE } from "@/lib/site";

type HeroExpertCardProps = {
  role?: string;
  description: string;
  bullets: string[];
};

export function HeroExpertCard({
  role = "Fractional Revenue Manager",
  description,
  bullets,
}: HeroExpertCardProps) {
  const initials = SITE.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <aside className="rounded-xl border border-white/10 bg-navy p-6 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold"
          aria-hidden
        >
          {initials}
        </div>
        <div>
          <p className="font-serif text-xl text-white">{SITE.name}</p>
          <p className="mt-1 text-sm text-white/70">{role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-white/80">{description}</p>
      <ul className="mt-5 space-y-2">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-white/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
