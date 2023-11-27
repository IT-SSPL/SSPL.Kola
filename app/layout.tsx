import type { Metadata } from "next";
import { mulish } from "./fonts";
import GraphQLProvider from "./lib/provider";
import "./globals.css";
import Navbar from "./components/Menu";

export const metadata: Metadata = {
  title: "Koła Naukowe",
  description: "Koła naukowe Politechniki Łódzkiej",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={mulish.className}>
        <Navbar />
        <GraphQLProvider>{children}</GraphQLProvider>
      </body>
    </html>
  );
}
