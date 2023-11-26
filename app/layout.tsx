import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GraphQLProvider from "./lib/provider";
import "./globals.css";
import Navbar from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        <GraphQLProvider>{children}</GraphQLProvider>
      </body>
    </html>
  );
}
