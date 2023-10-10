import Header from "@src/presentation/layouts/Header";
import "@src/presentation/styles/main.scss";
import type { Metadata } from "next";
import { dir } from "i18next";
import { i18n } from "../../../../i18n.config";
import { cookies } from "next/headers";

// TODO: i18n
export const metadata: Metadata = {
  title: "Coding Flavour",
  description: "Welcome to the Coding Flavour team website",
};

// export async function generateStaticParams() {
//   return i18n.locales.map((lang) => ({ lang }))
// }

const RootLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) => {
  console.log("RootLayout");
  console.log("RootLayout - lang", lang);

  return (
    <html lang="en">
      <body>
        <Header params={{ lang }} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
