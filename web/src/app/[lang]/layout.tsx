import { getDictionary } from "@src/data/locales/dict/dict";
import Footer from "@src/presentation/layouts/Footer";
import Header from "@src/presentation/layouts/Header";
import "@src/presentation/styles/main.scss";
import type { Metadata } from "next";

// TODO: i18n
export const metadata: Metadata = {
  title: "Coding Flavour",
  description: "Welcome to the Coding Flavour team website",
};

const RootLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) => {
  const dict = await getDictionary(lang);
  const common = await dict.common;
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
