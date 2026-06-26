"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Etusivu" },
  { href: "/about", label: "Tietoa" },
  { href: "/contact", label: "Yhteystiedot" },
];

const serviceLinks = [
  { href: "/services", label: "Kaikki palvelut" },
  { href: "/revenue-audit", label: "Revenue Audit" },
  { href: "/fractional-revenue-manager", label: "Fractional Revenue Manager" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group">
          <span className="font-serif text-lg text-ink">{SITE.name}</span>
          <span className="mt-0.5 block text-xs text-muted group-hover:text-ink">
            {SITE.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group/services">
            <span className="cursor-default text-sm font-medium text-muted">
              Palvelut ▾
            </span>
            <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-[240px] rounded-md border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover/services:visible group-hover/services:opacity-100">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2 text-sm text-ink hover:bg-canvas"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="btn-primary text-sm">
            Varaa kartoituspuhelu
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md border border-border px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          Valikko
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
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
            {serviceLinks.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm text-muted"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn-primary mt-2 w-full text-center"
                onClick={() => setOpen(false)}
              >
                Varaa kartoituspuhelu
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
