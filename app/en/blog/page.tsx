import type { Metadata } from "next";
import { BlogPage } from "@/views/BlogPage";
import { getDictionary } from "@/lib/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.blogPage.metaTitle,
  description: dict.blogPage.metaDescription,
  alternates: {
    canonical: "/en/blog/",
    languages: { fi: "/blog/", en: "/en/blog/" },
  },
};

export default function Page() {
  return <BlogPage locale="en" />;
}
