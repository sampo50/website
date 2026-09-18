type ProofSectionProps = {
  headline?: string;
  text?: string;
  bullets: string[];
};

export function ProofSection({
  headline = "Käytännön revenue managementia – ei vain suosituksia",
  text = "Olen vastannut seitsemän majoituskohteen portfolio-tason revenue managementista noin 12 miljoonan euron liiketoimintaympäristössä.",
  bullets,
}: ProofSectionProps) {
  return (
    <div>
      <p className="section-label">Kokemus</p>
      <h2 className="section-title mt-3">{headline}</h2>
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
