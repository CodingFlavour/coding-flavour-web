import type { Metadata } from "next";
import "@/presentation/styles/main.scss";
import Header from "@/presentation/layouts/Header";

// TODO: Cambiar por i18n
export const metadata: Metadata = {
  title: "Coding Flavour",
  description: "Welcome to the Coding Flavour team website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Cambiar por i18n
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
