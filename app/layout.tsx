import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HtmlLangSetter } from "@/components/HtmlLangSetter";
import { SkipToContent } from "@/components/SkipToContent";
import { SITE } from "@/lib/site";
import { getDictionary } from "@/lib/dictionaries";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const fi = getDictionary("fi");

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: fi.meta.titleDefault,
    template: `%s | ${SITE.name}`,
  },
  description: fi.meta.description,
  openGraph: {
    title: fi.meta.titleDefault,
    description: fi.meta.description,
    url: SITE.domain,
    siteName: SITE.name,
    locale: fi.meta.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: fi.meta.titleDefault,
    description: fi.meta.description,
  },
  alternates: {
    languages: {
      fi: "/",
      en: "/en/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans">
        <HtmlLangSetter />
        <SkipToContent />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
