type SolutionComparisonProps = {
  before: readonly string[];
  after: readonly string[];
};

export function SolutionComparison({ before, after }: SolutionComparisonProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card bg-canvas">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Ennen
        </p>
        <ul className="mt-4 space-y-3">
          {before.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="card border-navy/10 bg-navy text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
          Jälkeen
        </p>
        <ul className="mt-4 space-y-3">
          {after.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
