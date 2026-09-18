"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath, localizeHref } from "@/lib/i18n";

const linkClassName =
  "rounded-sm text-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  const navLinks = [
    { href: localizeHref(locale, "/services"), label: dict.nav.services },
    { href: localizeHref(locale, "/blog"), label: dict.nav.blog },
    { href: localizeHref(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-white/60 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-12">
          <div className="max-w-md">
            <p className="font-serif text-lg text-ink">{SITE.name}</p>
            <p className="mt-1 text-sm font-medium text-ink">{SITE.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {dict.footer.line}
            </p>
          </div>

          <nav aria-label={dict.nav.siteNav}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
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
