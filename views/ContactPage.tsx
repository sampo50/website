import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactActions } from "@/components/ContactActions";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        headline={dict.contact.heading}
        subheadline={dict.contact.body}
      />

      <Section>
        <div className="mx-auto max-w-xl">
          <ContactActions />
        </div>
      </Section>
    </>
  );
}
