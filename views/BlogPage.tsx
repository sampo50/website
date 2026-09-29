import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function BlogPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const page = dict.blogPage;
  const contactHref = localizeHref(locale, "/contact");

  return (
    <>
      <PageHero headline={page.headline} subheadline={page.subheadline} />

      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {page.themesLabel}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {page.themes.map((theme) => (
            <li
              key={theme}
              className="rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink"
            >
              {theme}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-muted">{page.empty}</p>
        <Link href={contactHref} className="btn-primary mt-8 inline-flex">
          {dict.cta.header}
        </Link>
      </Section>
    </>
  );
}
