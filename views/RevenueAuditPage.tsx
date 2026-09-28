import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { SITE, contactMailto, telHref } from "@/lib/site";

export function RevenueAuditPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const page = dict.revenueAuditPage;
  const contactHref = localizeHref(locale, "/contact");
  const servicesHref = localizeHref(locale, "/services");

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        headline={page.headline}
        subheadline={page.subheadline}
        primaryCta={{ label: page.cta.button, href: contactMailto(locale, "audit") }}
        secondaryCta={{ label: dict.nav.services, href: servicesHref }}
      />

      <Section>
        <div className="max-w-3xl">
          <p className="text-muted">{page.lead}</p>
          <p className="mt-5 text-lg font-semibold text-accent">
            <span className="text-sm font-medium uppercase tracking-[0.12em] text-muted">
              {page.priceLabel}
            </span>
            <span className="mt-1 block">{page.price}</span>
          </p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.whatIs.heading}
        </h2>
        <div className="mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          {page.whatIs.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.analyse.heading}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">{page.analyse.intro}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {page.analyse.areas.map((area) => (
            <details
              key={area.title}
              className="group rounded-lg border border-border bg-white"
            >
              <summary className="cursor-pointer list-none px-4 py-3 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ink">{area.title}</span>
                  <span
                    aria-hidden
                    className="text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <ul className="space-y-1.5 border-t border-border px-4 py-3">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-snug text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.receive.heading}
        </h2>
        <ol className="mt-6 space-y-4">
          {page.receive.items.map((item, index) => (
            <li
              key={item.title}
              className="rounded-lg border border-border bg-white px-4 py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              {"bullets" in item && item.bullets && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-md border border-border bg-canvas px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.examples.heading}
        </h2>
        <p className="mt-3 text-sm text-muted">{page.examples.intro}</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {page.examples.items.map((item) => (
            <li
              key={item}
              className="flex gap-2 rounded-md border border-border bg-white px-3 py-2.5 text-sm leading-snug text-ink"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{page.examples.outro}</p>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.data.heading}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted">{page.data.minimumIntro}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {page.data.minimumItems.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted">{page.data.deeperIntro}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {page.data.deeperItems.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-sm text-muted">{page.data.note}</p>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.process.heading}
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {page.process.steps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-border bg-white p-4">
              <p className="text-xs font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.who.heading}
        </h2>
        <p className="mt-3 text-sm text-muted">{page.who.intro}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {page.who.types.map((type) => (
            <li
              key={type}
              className="rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink"
            >
              {type}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
          {page.who.note}
        </p>
      </Section>

      <Section>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.investment.heading}
        </h2>
        <div className="mt-6 max-w-xl rounded-lg border-2 border-navy bg-white p-6">
          <p className="font-serif text-xl text-ink">{page.investment.title}</p>
          <p className="mt-2 text-2xl font-semibold text-navy">
            {page.investment.price}
          </p>
          <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink">
            {page.investment.includesLabel}
          </p>
          <ul className="mt-3 space-y-1.5">
            {page.investment.includes.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-medium text-muted">
            {page.investment.note}
          </p>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {page.after.heading}
        </h2>
        <div className="mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          {page.after.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <section className="bg-accent py-14 text-white md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-normal md:text-4xl">
            {page.cta.heading}
          </h2>
          <p className="mt-4 text-white/85">{page.cta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={contactMailto(locale, "audit")}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-canvas"
            >
              {page.cta.button}
            </a>
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {dict.nav.contact}
            </Link>
          </div>
          <div className="mt-6 space-y-1 text-sm text-white/80">
            <p>
              <a href={contactMailto(locale, "audit")} className="hover:text-white">
                {SITE.email}
              </a>
            </p>
            <p>
              <a href={telHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
