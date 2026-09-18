import type { Metadata } from "next";
import { ServicesPage } from "@/views/ServicesPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.servicesPage.metaTitle,
  description: dict.servicesPage.metaDescription,
  alternates: {
    canonical: "/en/services/",
    languages: { fi: "/services/", en: "/en/services/" },
  },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
