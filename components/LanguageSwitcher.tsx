"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  getLocaleFromPath,
  locales,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

const LABELS: Record<Locale, string> = {
  fi: "FI",
  en: "EN",
};

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-canvas px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink/25"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={locale === "fi" ? "Valitse kieli" : "Select language"}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{LABELS[locale]}</span>
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={`h-3 w-3 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={locale === "fi" ? "Kielet" : "Languages"}
          className="absolute right-0 z-50 mt-2 min-w-[4.5rem] overflow-hidden rounded-md border border-border bg-white py-1 shadow-md"
        >
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code} role="option" aria-selected={active}>
                <Link
                  href={switchLocalePath(pathname, code)}
                  hrefLang={code}
                  className={`block px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "bg-canvas text-ink"
                      : "text-muted hover:bg-canvas hover:text-ink"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {LABELS[code]}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
