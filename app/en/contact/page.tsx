import type { Metadata } from "next";
import { ContactPage } from "@/views/ContactPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.contactPage.metaTitle,
  description: dict.contactPage.metaDescription,
  alternates: {
    canonical: "/en/contact/",
    languages: { fi: "/contact/", en: "/en/contact/" },
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
