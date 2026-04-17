import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Fonts ─────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
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

/* ── Metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://zarqacards.pk"),

  title: {
    default: "ZarqaCards — Premium Wedding Invitation Cards Pakistan",
    template: "%s | ZarqaCards",
  },
  description:
    "Handcrafted premium invitation cards for weddings, mehndi, walima, aqeeqa and every special occasion. Custom designs, 3-day turnaround. Based in Rawalpindi, Pakistan.",
  keywords: [
    "wedding invitations Pakistan",
    "mehndi cards Rawalpindi",
    "walima invitation design",
    "aqeeqa cards",
    "premium wedding stationery Pakistan",
    "custom invitation cards",
    "shadi cards Rawalpindi",
    "zarqa cards",
    "luxury invitation design",
  ],
  authors: [{ name: "ZarqaCards", url: "https://zarqacards.pk" }],
  creator: "ZarqaCards",
  publisher: "ZarqaCards",

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://zarqacards.pk",
    siteName: "ZarqaCards",
    title: "ZarqaCards — Premium Wedding Invitation Cards Pakistan",
    description:
      "Handcrafted premium invitation cards for weddings, mehndi, walima & every special occasion. Based in Rawalpindi, Pakistan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZarqaCards — Premium Wedding Invitation Cards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZarqaCards — Premium Wedding Invitation Cards",
    description:
      "Handcrafted premium invitation cards for weddings & every special occasion. Rawalpindi, Pakistan.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },

  alternates: {
    canonical: "https://zarqacards.pk",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2A1208",
};

/* ── JSON-LD Structured Data ───────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZarqaCards",
  description:
    "Premium wedding invitation card design studio based in Rawalpindi, Pakistan. Specialising in wedding suites, mehndi, walima and aqeeqa cards.",
  url: "https://zarqacards.pk",
  logo: "https://zarqacards.pk/logo.png",
  image: "https://zarqacards.pk/og-image.png",
  telephone: "+923038705165",
  email: "hello@zarqacards.pk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6007,
    longitude: 73.0679,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/zarqacards.offical/",
    "https://wa.me/923038705165",
  ],
  priceRange: "Rs. 2,500 – Rs. 9,000+",
  servesCuisine: undefined,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Invitation Card Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Invitations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mehndi Cards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Walima Cards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aqeeqa Cards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Invitation Designs" } },
    ],
  },
};

/* ── Root Layout ───────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${nastaliq.variable} h-full`}
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
