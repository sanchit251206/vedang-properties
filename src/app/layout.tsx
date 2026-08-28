import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { MobileQuickBar } from "@/components/MobileQuickBar";
import { contact } from "@/data/site";
import { absoluteUrl, coreSeoKeywords, siteUrl } from "@/data/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const googleAnalyticsMeasurementId = "G-RK86ELKQ6C";

export const viewport: Viewport = {
  themeColor: "#102f33",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Vedang Properties",
  description:
    "Vedang Properties is a Mohali real estate advisory and property consultant helping buyers, sellers, and investors compare residential, plot, and commercial property options across Mohali and Tricity.",
  telephone: contact.tel,
  url: siteUrl,
  image: absoluteUrl("/images/vedang-logo-card.png"),
  logo: absoluteUrl("/images/vedang-logo-mark.png"),
  priceRange: "₹₹ - ₹₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Cheque, Bank Transfer, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "171, MCC - 2, GMADA Aerocity",
    addressLocality: "Matran, Sahibzada Ajit Singh Nagar",
    addressRegion: "Punjab",
    postalCode: "140306",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.6554",
    longitude: "76.8197",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:30",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.tel,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Punjabi"],
  },
  sameAs: Array.from(
    new Set(
      [
        contact.googleProfileUrl,
        contact.googleMapsUrl,
        contact.googleDirectionsUrl,
        `https://wa.me/${contact.whatsapp}`,
      ].filter((item): item is string => Boolean(item)),
    ),
  ),
  areaServed: [
    "Mohali",
    "Aerocity Mohali",
    "IT City Mohali",
    "Kharar",
    "Zirakpur",
    "New Chandigarh",
  ],
  knowsAbout: [
    "property consultants in Mohali",
    "property dealers in Mohali",
    "residential property in Mohali",
    "commercial property in Mohali",
    "plots in Mohali",
    "Aerocity Mohali property",
  ],
  hasMap: contact.googleMapsUrl,
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Residential property consultation in Mohali",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial property consultation in Mohali",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Plot and land consultation in Mohali",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Property Consultants in Mohali | Vedang Properties",
    template: "%s | Vedang Properties",
  },
  description:
    "Vedang Properties helps buyers, sellers, and investors compare residential, plot, and commercial property options with local property consultants in Mohali.",
  keywords: coreSeoKeywords,
  openGraph: {
    title: "Property Consultants in Mohali | Vedang Properties",
    description:
      "Local Mohali property consultants for residential, plot, commercial, buyer, seller, and investment guidance.",
    url: siteUrl,
    siteName: "Vedang Properties",
    images: [
      {
        url: absoluteUrl("/images/vedang-logo-card.png"),
        width: 1200,
        height: 630,
        alt: "Vedang Properties Mohali",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Consultants in Mohali | Vedang Properties",
    description:
      "Compare property options across Mohali, Aerocity, IT City, Kharar, Zirakpur, and New Chandigarh.",
    images: [absoluteUrl("/images/vedang-logo-card.png")],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Vedang Properties",
  description:
    "Property consultants in Mohali for residential homes, plots, commercial property, and buyer/seller guidance.",
  publisher: {
    "@id": `${siteUrl}/#localbusiness`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <body className="flex min-h-full flex-col pb-16 font-sans lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessJsonLd, websiteJsonLd]),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsMeasurementId}');
          `}
        </Script>
        {children}
        <MobileQuickBar />
      </body>
    </html>
  );
}

