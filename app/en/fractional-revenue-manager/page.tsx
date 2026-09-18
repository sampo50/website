import type { Metadata } from "next";
import { FractionalRevenueManagerPage } from "@/views/FractionalRevenueManagerPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.fractionalPage.metaTitle,
  description: dict.fractionalPage.metaDescription,
  alternates: {
    canonical: "/en/fractional-revenue-manager/",
    languages: {
      fi: "/fractional-revenue-manager/",
      en: "/en/fractional-revenue-manager/",
    },
  },
};

export default function Page() {
  return <FractionalRevenueManagerPage locale="en" />;
}
