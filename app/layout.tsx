import type { Metadata } from "next";
import { mulish } from "./fonts";
import "./globals.css";
import Navbar from "./components/Menu";
import Provider from "./lib/provider";

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
    <html lang="pl" suppressHydrationWarning>
      <body className={mulish.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
