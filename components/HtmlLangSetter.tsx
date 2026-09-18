"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function HtmlLangSetter() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = getDictionary(locale).meta.htmlLang;
  }, [locale]);

  return null;
}
