"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocaleFromPath,
  otherLocale,
  switchLocalePath,
} from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const target = otherLocale(locale);
  const dict = getDictionary(locale);
  const href = switchLocalePath(pathname, target);

  return (
    <Link
      href={href}
      className="rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:border-ink/25 hover:text-ink"
      aria-label={dict.lang.switchAria}
      hrefLang={target}
    >
      {dict.lang.switchTo}
    </Link>
  );
}
