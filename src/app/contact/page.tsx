import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { MapFacade } from "@/components/MapFacade";
import { contact } from "@/data/site";
import { absoluteUrl, coreSeoKeywords } from "@/data/seo";

export const metadata: Metadata = {
  title: "Contact Us & Aerocity Office Directions | Vedang Properties Mohali",
  description:
    "Contact Vedang Properties in Aerocity, Mohali. Call +91 82646 30736, chat on WhatsApp, get Google Maps directions, or submit your property requirement.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    ...coreSeoKeywords,
    "contact Vedang Properties",
    "property dealer Aerocity Mohali phone number",
    "Vedang Properties Mohali office address",
    "real estate office Aerocity",
  ],
};

const contactFaqs = [
  {
    q: "How quickly does Vedang Properties respond to inquiries?",
    a: "We respond to WhatsApp and form inquiries promptly within business hours (typically within 15–30 minutes) to understand your requirement and share relevant options.",
  },
  {
    q: "Can I walk into your Aerocity office without an appointment?",
    a: "Yes, you are welcome to visit our office at 171, MCC - 2, GMADA Aerocity between 9:30 AM and 8:00 PM, Monday through Saturday. Calling ahead helps ensure we are immediately available for your specific property type.",
  },
  {
    q: "How do site visits and property shortlisting work?",
    a: "We discuss your budget, preferred location, and property type first, curate a tailored shortlist of verified options across Mohali and Tricity, and coordinate convenient site visits at your scheduled time.",
  },
  {
    q: "How do property owners submit homes or plots for sale?",
    a: "Owners can call or WhatsApp us directly with property details, photos, dimensions, and asking price, or fill out the enquiry form selecting 'Sell' as the purpose.",
  },
];

export default function ContactPage() {
  const pageUrl = absoluteUrl("/contact");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contactpage`,
        url: pageUrl,
        name: "Contact Vedang Properties Mohali",
        description:
          "Contact page for Vedang Properties. Reach our real estate team in Aerocity Mohali via phone, WhatsApp, or in-person visit.",
        mainEntity: {
          "@type": "RealEstateAgent",
          name: "Vedang Properties",
          telephone: contact.tel,
          url: absoluteUrl("/"),
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
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader variant="dark" />

      {/* Hero Banner */}
      <section className="bg-[#10383a] py-14 text-white md:py-18">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
            Get In Touch
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Contact Vedang Properties
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            Tell us about your property requirement, schedule a site visit, or
            visit our Aerocity office for ground-reality consultation.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-12 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
          {/* Left Column: Contact Methods & Map */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold text-[#10383a]">
                Direct Contact Options
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Reach us directly by phone or WhatsApp for prompt assistance.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-[#f7f3e8] p-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#10383a] text-white">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#b85f45]">
                      Phone Call
                    </p>
                    <a
                      href={`tel:${contact.tel}`}
                      className="mt-0.5 block text-lg font-semibold text-[#10383a] transition hover:text-[#b85f45]"
                    >
                      {contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-slate-500">
                      Mon – Sat: 9:30 AM to 7:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg bg-[#e8f0ea] p-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#25D366] text-white">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#285846]">
                      WhatsApp Direct
                    </p>
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 block text-lg font-semibold text-[#10383a] transition hover:text-[#285846]"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="text-xs text-slate-500">
                      Instant response & property brochures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 border border-slate-200">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#10383a] text-white">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Office Address
                    </p>
                    <p className="mt-0.5 font-semibold text-[#10383a]">
                      {contact.addressFull}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a
                        href={contact.googleDirectionsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-8 items-center gap-1.5 rounded bg-[#10383a] px-3 text-xs font-semibold text-white transition hover:bg-[#0c2b2d]"
                      >
                        Get Directions
                      </a>
                      <a
                        href={contact.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-8 items-center gap-1.5 rounded border border-slate-300 px-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        Google Reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Facade */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <MapFacade
                title="Vedang Properties Aerocity Office"
                mapQuery={contact.googleMapsQuery}
                mapUrl={contact.googleMapsUrl}
                badgeText="Aerocity Office"
                aspectRatio="aspect-[16/10]"
              />
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:self-start">
            <LeadForm whatsappNumber={contact.whatsapp} />
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#b85f45]">
              Common Questions
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#10383a]">
              Frequently asked questions about contacting us
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {contactFaqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg border border-slate-200 bg-[#f7f3e8]/30 p-5"
              >
                <h3 className="font-semibold text-[#10383a]">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="m9.5 9.5 1.3 1.3a1 1 0 0 1 0 1.4l-.4.4a6 6 0 0 0 2.9 2.9l.4-.4a1 1 0 0 1 1.4 0l1.3 1.3" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
