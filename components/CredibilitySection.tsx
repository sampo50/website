import { CREDIBILITY } from "@/lib/site";

export function CredibilitySection() {
  const initials = CREDIBILITY.profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div>
      <p className="section-label">Kokemus</p>
      <h2 className="section-title mt-3">{CREDIBILITY.headline}</h2>
      <p className="mt-4 max-w-2xl text-muted">{CREDIBILITY.body}</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <aside className="card border-navy/10 bg-canvas">
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-white text-sm font-semibold text-navy"
              aria-hidden
            >
              {initials}
            </div>
            <div>
              <p className="font-serif text-lg text-ink">
                {CREDIBILITY.profile.name}
              </p>
              <p className="mt-1 text-sm text-muted">
                {CREDIBILITY.profile.role}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {CREDIBILITY.profile.tagline}
          </p>
        </aside>

        <ul className="grid gap-3 sm:grid-cols-2">
          {CREDIBILITY.bullets.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
