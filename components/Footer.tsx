import Link from "next/link";
import { SITE, NAV_ANCHORS, FOOTER } from "@/lib/site";

const FOOTER_LINKS = [
  ...NAV_ANCHORS,
  { href: "#yhteystiedot", label: "Yhteystiedot" },
] as const;

const linkClassName =
  "rounded-sm text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
          <div className="max-w-md">
            <p className="font-serif text-lg text-ink">{SITE.name}</p>
            <p className="mt-1 text-sm font-medium text-ink">{SITE.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{FOOTER.line}</p>
          </div>

          <nav aria-label="Sivuston navigaatio">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={`/${item.href}`} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-border pt-8 text-sm text-muted">
          © {year} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
