import Link from "next/link";

type ComparisonRow = {
  package: string;
  bestWhen: string;
  includes: string;
  model: string;
  href: string;
};

type ComparisonTableProps = {
  rows: ComparisonRow[];
  labels: {
    package: string;
    bestWhen: string;
    includes: string;
    model: string;
  };
};

export function ComparisonTable({ rows, labels }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 font-semibold text-ink">{labels.package}</th>
            <th className="py-3 pr-4 font-semibold text-ink">{labels.bestWhen}</th>
            <th className="py-3 pr-4 font-semibold text-ink">{labels.includes}</th>
            <th className="py-3 font-semibold text-ink">{labels.model}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.package} className="border-b border-border">
              <td className="py-4 pr-4 align-top">
                <Link
                  href={row.href}
                  className="font-semibold text-accent hover:underline"
                >
                  {row.package}
                </Link>
              </td>
              <td className="py-4 pr-4 align-top text-muted">{row.bestWhen}</td>
              <td className="py-4 pr-4 align-top text-muted">{row.includes}</td>
              <td className="py-4 align-top text-ink">{row.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
