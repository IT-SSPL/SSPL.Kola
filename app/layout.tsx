import type { Metadata } from "next";
import { mulish } from "./fonts";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./lib/provider";
import Footer from "./components/Footer";

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
          <div className="mx-10 md:mx-20 lg:mx-24 3xl:mx-40">
            <Navbar />
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
