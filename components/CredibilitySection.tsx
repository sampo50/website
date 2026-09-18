import { CREDIBILITY } from "@/lib/site";

export function CredibilitySection() {
  return (
    <div>
      <p className="section-label">Kokemus</p>
      <h2 className="section-title mt-3">{CREDIBILITY.headline}</h2>

      <div className="mt-6 max-w-2xl space-y-4 text-muted">
        <p>{CREDIBILITY.body}</p>
        <p>{CREDIBILITY.work}</p>
      </div>

      <h3 className="mt-12 font-serif text-xl text-ink md:text-2xl">
        {CREDIBILITY.meaningHeading}
      </h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {CREDIBILITY.bullets.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-ink"
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-2xl border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-ink/80 md:text-base">
        {CREDIBILITY.proof}
      </p>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        {CREDIBILITY.bridge}
      </p>

      <div className="mt-10">
        <a href={CREDIBILITY.cta.href} className="btn-primary">
          {CREDIBILITY.cta.label}
        </a>
        <p className="mt-3 max-w-md text-sm text-muted">{CREDIBILITY.cta.text}</p>
      </div>
    </div>
  );
}
