import type { Metadata } from "next";
import { HomePage } from "@/views/HomePage";
import { getDictionary } from "@/lib/dictionaries";
import { SITE } from "@/lib/site";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: { absolute: dict.meta.titleDefault },
  description: dict.meta.description,
  openGraph: {
    title: dict.meta.titleDefault,
    description: dict.meta.description,
    locale: dict.meta.locale,
    url: `${SITE.domain}/en/`,
  },
  alternates: {
    canonical: "/en/",
    languages: { fi: "/", en: "/en/" },
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
