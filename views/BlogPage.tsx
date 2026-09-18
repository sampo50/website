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
        <p className="max-w-2xl text-muted">{page.empty}</p>
        <Link href={contactHref} className="btn-primary mt-8 inline-flex">
          {dict.cta.header}
        </Link>
      </Section>
    </>
  );
}
