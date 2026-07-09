"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE, NAV_ANCHORS, CTA } from "@/lib/site";

function anchorHref(hash: string) {
  return `/${hash}`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="group min-w-0">
          <span className="font-serif text-lg text-ink">{SITE.name}</span>
          <span className="mt-0.5 block truncate text-xs text-muted group-hover:text-ink">
            {SITE.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Päänavigaatio">
          {NAV_ANCHORS.map((item) => (
            <Link
              key={item.href}
              href={onHome ? item.href : anchorHref(item.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={onHome ? "#yhteystiedot" : "/#yhteystiedot"}
            className="btn-primary text-sm"
          >
            {CTA.header}
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
          aria-label="Mobiilinavigaatio"
        >
          <ul className="flex flex-col gap-3">
            {NAV_ANCHORS.map((item) => (
              <li key={item.href}>
                <Link
                  href={onHome ? item.href : anchorHref(item.href)}
                  className="text-sm font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={onHome ? "#yhteystiedot" : "/#yhteystiedot"}
                className="btn-primary mt-2 w-full text-center"
                onClick={() => setOpen(false)}
              >
                {CTA.header}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
