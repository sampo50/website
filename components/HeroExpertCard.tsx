import { HERO_EXPERT_CARD } from "@/lib/site";

export function HeroExpertCard() {
  const initials = HERO_EXPERT_CARD.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <aside className="card border-navy/10 bg-navy p-6 text-white md:p-8">
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold tracking-wide text-white"
          aria-hidden
        >
          {initials}
        </div>
        <div>
          <p className="font-serif text-xl text-white">{HERO_EXPERT_CARD.name}</p>
          <p className="mt-1 text-sm text-white/70">{HERO_EXPERT_CARD.role}</p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-white/80">
        {HERO_EXPERT_CARD.description}
      </p>
      <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
        {HERO_EXPERT_CARD.bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-white/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
