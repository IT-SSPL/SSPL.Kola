import type { Metadata } from "next";
import { mulish } from "./fonts";
import NavBar from "./components/NavBar";
import Provider from "./lib/provider";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Koła Naukowe PŁ",
    template: "%s | Koła Naukowe PŁ",
  },
  robots: "index, follow",
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
  description:
    "Dowiedz się więcej o Kołach Naukowych na Politechnice Łódzkiej. Odkrywajcie razem fascynujący świat nauki, innowacji i eksperymentów. Bądź częścią społeczności studenckiej, która pasjonuje się rozwijaniem wiedzy technicznej i naukowej. Dołącz do naszego Koła Naukowego i wspólnie podbijajmy granice naukowej odkrywczości.",
  keywords:
    "koła naukowe, politechnika łódzka, politechnika, łódź, studenci, nauka, innowacje, eksperymenty, społeczność studencka, rozwój, wiedza, technika, nauka, odkrywczość, koła naukowe politechniki łódzkiej, koła naukowe łódź, koła naukowe politechnika łódzka, koła naukowe politechnika",
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
          <div className="mx-6 sm:mx-10 md:mx-20 lg:mx-24 3xl:mx-40">
            <NavBar />
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
