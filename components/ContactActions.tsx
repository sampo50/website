"use client";

import { usePathname } from "next/navigation";
import { SITE, telHref, contactMailto } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import { getLocaleFromPath } from "@/lib/i18n";

type ContactActionsProps = {
  className?: string;
};

export function ContactActions({ className = "" }: ContactActionsProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);

  return (
    <div className={className}>
      <dl className="space-y-6">
        <div>
          <dt className="text-sm font-medium text-ink">{dict.contact.emailLabel}</dt>
          <dd className="mt-1">
            <a
              href={contactMailto(locale)}
              className="text-lg text-ink transition-colors hover:text-accent md:text-xl"
            >
              {SITE.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-ink">{dict.contact.phoneLabel}</dt>
          <dd className="mt-1">
            <a
              href={telHref}
              className="text-lg text-ink transition-colors hover:text-accent md:text-xl"
            >
              {SITE.phone}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
