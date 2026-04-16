import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  weight: ["400"],
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZarqaCards — Premium Wedding Invitation Cards Pakistan",
  description:
    "Handcrafted premium invitation cards for weddings, mehndi, walima, aqeeqa, and every special occasion. Based in Rawalpindi, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ur"
      className={`${cormorant.variable} ${jost.variable} ${nastaliq.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--brown-deep)" }}
      >
        <Navbar />
        <ScrollReveal />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
