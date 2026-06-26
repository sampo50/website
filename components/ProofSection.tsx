type ProofSectionProps = {
  headline?: string;
  text?: string;
  bullets: string[];
};

export function ProofSection({
  headline = "Käytännön hospitality revenue management -kokemus.",
  text = "Kokemusta portfolio-tason revenue managementista, hinnoittelusta, forecastingista ja suorituskyvyn seurannasta majoitusliiketoimissa.",
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
