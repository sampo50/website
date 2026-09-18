"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function SkipToContent() {
  const pathname = usePathname() || "/";
  const dict = getDictionary(getLocaleFromPath(pathname));

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
    >
      {dict.meta.skipToContent}
    </a>
  );
}
