export const locales = ["fi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fi";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Detect locale from a pathname (`/en/...` → en, otherwise fi). */
export function getLocaleFromPath(pathname: string): Locale {
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === "/en" || normalized.startsWith("/en/")) return "en";
  return "fi";
}

/**
 * Prefix an internal path for the given locale.
 * Leaves hash, mailto and tel hrefs unchanged.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("http")
  ) {
    return href;
  }

  const path = href.startsWith("/") ? href : `/${href}`;
  if (locale === "fi") return path === "/en" ? "/" : path.replace(/^\/en/, "") || "/";

  if (path === "/") return "/en";
  if (path.startsWith("/en")) return path;
  return `/en${path}`;
}

/** Switch the current pathname to the other locale, keeping the rest of the path. */
export function switchLocalePath(pathname: string, target: Locale): string {
  let path = pathname.replace(/\/$/, "") || "/";
  if (path.startsWith("/en")) {
    path = path.slice(3) || "/";
  }
  return localizeHref(target, path);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fi" ? "en" : "fi";
}
