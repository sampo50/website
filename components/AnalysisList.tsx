type AnalysisListProps = {
  title: string;
  items: string[];
};

export function AnalysisList({ title, items }: AnalysisListProps) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-white px-4 py-3 text-sm text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
