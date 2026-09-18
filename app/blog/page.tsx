import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blogi",
  description:
    "Artikkeleita hotellien hinnoittelusta, revenue managementista ja kaupallisesta tulosohjauksesta.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        headline="Blogi"
        subheadline="Käytännön näkökulmia hinnoitteluun, kysynnän hallintaan ja revenue managementiin hotelleille sekä serviced living -operaattoreille."
      />

      <Section>
        <p className="max-w-2xl text-muted">
          Ensimmäiset artikkelit julkaistaan pian. Jos haluat keskustella hotellisi
          revenue-tilanteesta jo nyt, varaa kartoitus.
        </p>
        <Link href="/#yhteystiedot" className="btn-primary mt-8 inline-flex">
          {CTA.header}
        </Link>
      </Section>
    </>
  );
}
