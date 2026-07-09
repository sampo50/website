import Link from "next/link";
import { SITE, NAV_ANCHORS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg text-ink">{SITE.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {SITE.role}
            </p>
            <p className="mt-4 text-sm text-muted">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ANCHORS.map((l) => (
              <li key={l.href}>
                <Link
                  href={`/${l.href}`}
                  className="text-sm text-muted hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#yhteystiedot"
                className="text-sm text-muted hover:text-ink"
              >
                Yhteystiedot
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-sm text-muted">
          © {year} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
