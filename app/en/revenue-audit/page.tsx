import type { Metadata } from "next";
import { RevenueAuditPage } from "@/views/RevenueAuditPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.revenueAuditPage.metaTitle,
  description: dict.revenueAuditPage.metaDescription,
  alternates: {
    canonical: "/en/revenue-audit/",
    languages: { fi: "/revenue-audit/", en: "/en/revenue-audit/" },
  },
};

export default function Page() {
  return <RevenueAuditPage locale="en" />;
}
