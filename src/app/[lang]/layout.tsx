import { getDictionary } from "@src/data/locales/dict/dict";
import { StaticParams } from "@src/data/Models/Page";
import Footer from "@src/presentation/layouts/Footer";
import Header from "@src/presentation/layouts/Header";
import "@src/presentation/styles/main.scss";
import type { Metadata } from "next";

// TODO: i18n
export const metadata: Metadata = {
  title: "Coding Flavour",
  description: "Welcome to the Coding Flavour team website",
};

type RootPage = {
  children: React.ReactNode;
} & StaticParams

const RootLayout: React.FC<RootPage> = async ({
  children,
  params
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const common = dict.common;

  return (
    <html lang={lang}>
      <body>
        <Header dict={common} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
