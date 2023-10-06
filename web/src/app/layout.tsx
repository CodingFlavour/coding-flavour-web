import Header from "@/presentation/layouts/Header";
import "@/presentation/styles/main.scss";
import type { Metadata } from "next";

// TODO: i18n
export const metadata: Metadata = {
  title: "Coding Flavour",
  description: "Welcome to the Coding Flavour team website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
