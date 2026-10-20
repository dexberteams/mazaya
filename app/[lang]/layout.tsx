import { Cairo } from "next/font/google";
import "leaflet/dist/leaflet.css";
import {
  Geist,
  Geist_Mono,
  Inter,
  Manrope,
  Anek_Bangla,
} from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getDictionary } from "./dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali"],
});
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return {
    title: lang === "ar" ? "مزايا اللوجستية" : "Mazaya Logistics",
    description:
      lang === "ar"
        ? "شركة مزايا للخدمات اللوجستية"
        : "Mazaya Logistics Company",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isRTL = lang === "ar";
  const dict = await getDictionary(lang);
  return (
    <html
      lang={lang}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}
        ${manrope.variable}  ${anekBangla.variable} ${cairo.variable} h-full antialiased`}
    >
      <body
        className={`relative min-h-full flex flex-col bg-transparent ${
          isRTL ? "font-cairo" : ""
        }`}
      >
        <Navbar lang={lang} />
        <main className="relative z-0">{children}</main>
        <Footer lang={lang} t={dict.footer} />
      </body>
    </html>
  );
}
