import type { Metadata } from "next";
import Script from "next/script";
import { contact } from "@/data/site";
import { absoluteUrl, coreSeoKeywords, siteUrl } from "@/data/seo";
import "./globals.css";

const googleAnalyticsMeasurementId = "G-RK86ELKQ6C";

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
  address: {
    "@type": "PostalAddress",
    streetAddress: "171, MCC - 2, GMADA Aerocity",
    addressLocality: "Matran, Sahibzada Ajit Singh Nagar",
    addressRegion: "Punjab",
    postalCode: "140306",
    addressCountry: "IN",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsMeasurementId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
