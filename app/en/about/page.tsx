import type { Metadata } from "next";
import { AboutPage } from "@/views/AboutPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.aboutPage.metaTitle,
  description: dict.aboutPage.metaDescription,
  alternates: {
    canonical: "/en/about/",
    languages: { fi: "/about/", en: "/en/about/" },
  },
};

export default function Page() {
  return <AboutPage locale="en" />;
}
