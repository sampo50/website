import type { Locale } from "@/lib/i18n";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";

export const SITE = {
  name: "Sami Olavuo",
  domain: "https://samiolavuo.com",
  tagline: "Fractional Revenue Manager",
  email: "sami.olavuo@gmail.com",
  linkedIn: "https://www.linkedin.com/in/sami-olavuo",
  phone: "+358400450773",
} as const;

export function mailtoHref(subject: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}

export const telHref = `tel:${SITE.phone}` as const;

type MailtoSubjectKey = keyof Dictionary["contact"]["mailtoSubjects"];

export function contactMailto(locale: Locale, subjectKey?: MailtoSubjectKey) {
  const dict = getDictionary(locale);
  const subject = subjectKey
    ? dict.contact.mailtoSubjects[subjectKey]
    : dict.contact.mailtoSubjectDefault;
  return mailtoHref(subject);
}

export function packagesFor(locale: Locale) {
  const dict = getDictionary(locale);
  return dict.packages.map((pkg) => {
    const subjectKey: MailtoSubjectKey =
      pkg.title === "Revenue Audit"
        ? "audit"
        : pkg.title === "Revenue Control"
          ? "control"
          : "growth";

    return {
      title: pkg.title,
      positioning: pkg.positioning,
      description: pkg.description,
      price: pkg.price,
      cta: pkg.cta,
      highlighted: pkg.highlighted,
      badge: "badge" in pkg ? pkg.badge : undefined,
      href: contactMailto(locale, subjectKey),
    };
  });
}
