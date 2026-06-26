type ProofSectionProps = {
  headline?: string;
  text?: string;
  bullets: string[];
};

export function ProofSection({
  headline = "Built on hands-on hospitality revenue management.",
  text = "Experience across portfolio-level revenue management, pricing strategy, forecasting and performance tracking for capacity-based accommodation businesses.",
  bullets,
}: ProofSectionProps) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-normal text-ink md:text-4xl">
        {headline}
      </h2>
      <p className="mt-4 max-w-2xl text-muted">{text}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {bullets.map((b) => (
          <li
            key={b}
            className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
