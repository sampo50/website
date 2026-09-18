"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath, localizeHref } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: localizeHref(locale, "/services"), label: dict.nav.services },
    { href: localizeHref(locale, "/blog"), label: dict.nav.blog },
    { href: localizeHref(locale, "/contact"), label: dict.nav.contact },
  ];

  const contactHref = localizeHref(locale, "/contact");
  const homeHref = localizeHref(locale, "/");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href={homeHref} className="group min-w-0">
          <span className="font-serif text-lg text-ink">{SITE.name}</span>
          <span className="mt-0.5 block truncate text-xs text-muted group-hover:text-ink">
            {SITE.tagline}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={dict.nav.mainNav}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-ink ${
                pathname === item.href ||
                pathname === `${item.href}/` ||
                pathname.startsWith(`${item.href}/`)
                  ? "text-ink"
                  : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link href={contactHref} className="btn-primary text-sm">
            {dict.cta.header}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-md border border-border px-3 py-2 text-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {dict.nav.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border px-6 py-4 lg:hidden"
          aria-label={dict.nav.mobileNav}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={contactHref}
                className="btn-primary mt-2 w-full text-center"
                onClick={() => setOpen(false)}
              >
                {dict.cta.header}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
