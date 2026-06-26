import Link from "next/link";
import { SITE } from "@/lib/site";

const links = [
  { href: "/services", label: "Palvelut" },
  { href: "/revenue-audit", label: "Revenue Audit" },
  { href: "/fractional-revenue-manager", label: "Fractional Revenue Manager" },
  { href: "/about", label: "Tietoa" },
  { href: "/contact", label: "Yhteystiedot" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-lg text-ink">{SITE.name}</p>
            <p className="mt-1 text-sm text-muted">{SITE.tagline}</p>
            <p className="mt-4 text-sm text-muted">
              <a href={SITE.domain} className="hover:text-accent">
                samiolavuo.com
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-sm text-muted">
          © {year} {SITE.name}. {SITE.tagline}.
        </p>
      </div>
    </footer>
  );
}
