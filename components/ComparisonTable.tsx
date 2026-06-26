import Link from "next/link";
import { PACKAGE_COMPARISON } from "@/lib/site";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 font-semibold text-ink">Paketti</th>
            <th className="py-3 pr-4 font-semibold text-ink">Paras valinta, kun</th>
            <th className="py-3 pr-4 font-semibold text-ink">Sisältö</th>
            <th className="py-3 font-semibold text-ink">Malli</th>
          </tr>
        </thead>
        <tbody>
          {PACKAGE_COMPARISON.map((row) => (
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
