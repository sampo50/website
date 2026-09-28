import type { Metadata } from "next";
import { RevenueAuditPage } from "@/views/RevenueAuditPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.revenueAuditPage.metaTitle,
  description: dict.revenueAuditPage.metaDescription,
  alternates: {
    canonical: "/en/services/revenue-audit/",
    languages: {
      fi: "/services/revenue-audit/",
      en: "/en/services/revenue-audit/",
    },
  },
};

export default function Page() {
  return <RevenueAuditPage locale="en" />;
}
