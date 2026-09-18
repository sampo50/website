import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const page = dict.aboutPage;
  const contactHref = localizeHref(locale, "/contact");

  return (
    <>
      <PageHero headline={page.headline} subheadline={page.subheadline} />

      <Section>
        <div className="max-w-2xl space-y-4 text-muted">
          {page.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {dict.home.credibility.bullets.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink"
            >
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink">{page.workingHeading}</h2>
        <ul className="mt-6 space-y-3">
          {page.workingStyle.map((w) => (
            <li key={w} className="flex gap-3 text-sm text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {w}
            </li>
          ))}
        </ul>
        <Link href={contactHref} className="btn-primary mt-10 inline-flex">
          {page.cta}
        </Link>
      </Section>
    </>
  );
}
