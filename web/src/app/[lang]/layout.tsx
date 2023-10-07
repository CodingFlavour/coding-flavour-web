import Header from "@/presentation/layouts/Header";
import "@/presentation/styles/main.scss";
import type { Metadata } from "next";
import { dir } from 'i18next'
import { i18n } from "../../../../i18n.config";

// TODO: i18n
export const metadata: Metadata = {
  title: "Coding Flavour",
  description: "Welcome to the Coding Flavour team website",
};

export async function generateStaticParams() {
  console.log("generateStaticParams");
  return i18n.locales.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: {
    lang
  }
}: {
  children: React.ReactNode;
  params: { lang: string}
}) {
  console.log("lang", lang);
  return (
    <html lang="en">
      <body>
        <Header params={{lang}} />
        {children}
      </body>
    </html>
  );
}
