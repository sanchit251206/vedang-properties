import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Vedang Properties Mohali",
  description:
    "Read the Privacy Policy of Vedang Properties. Learn how we handle your personal data, lead inquiries, communication, and rights under Indian data protection laws.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const pageUrl = absoluteUrl("/privacy-policy");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Privacy Policy - Vedang Properties",
        description:
          "Privacy policy explaining data collection, usage, user rights, and protection practices at Vedang Properties, Mohali.",
        publisher: {
          "@type": "RealEstateAgent",
          name: "Vedang Properties",
          telephone: contact.tel,
          url: absoluteUrl("/"),
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
            name: "Privacy Policy",
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

      {/* Header Banner */}
      <section className="bg-[#10383a] py-14 text-white md:py-18">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
            Legal & Compliance
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-7 text-white/75">
            Effective Date: July 2026 | Last Updated: August 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 space-y-8 text-slate-700 leading-7">
            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                1. Introduction & Overview
              </h2>
              <p className="mt-3">
                Vedang Properties (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the real
                estate consultancy and property advisory platform based at 171,
                MCC - 2, GMADA Aerocity, Sahibzada Ajit Singh Nagar (Mohali),
                Punjab 140306.
              </p>
              <p className="mt-3">
                We are committed to respecting your privacy and protecting the
                personal information you share with us. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your data when you visit
                our website, submit property enquiry forms, or contact us via phone,
                email, or WhatsApp in accordance with the Information Technology
                Act (2000), Information Technology (Reasonable Security Practices
                and Procedures and Sensitive Personal Data or Information) Rules
                2011, and the Digital Personal Data Protection Act (DPDP Act 2023).
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We collect personal information that you voluntarily provide to us
                when inquiring about real estate properties or services:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-slate-900">Contact Details:</strong> Your
                  full name, phone/mobile number, email address, and preferred mode
                  of contact.
                </li>
                <li>
                  <strong className="text-slate-900">Property Preferences:</strong>{" "}
                  Your stated requirements (buy, sell, rent, invest), budget range,
                  preferred property types (apartments, plots, builder floors,
                  commercial spaces, villas), and desired locations across Mohali,
                  Aerocity, IT City, Kharar, Zirakpur, or New Chandigarh.
                </li>
                <li>
                  <strong className="text-slate-900">Owner Listing Details:</strong>{" "}
                  If you are a property owner seeking buyer matching, details such
                  as property location, dimensions, asking price, photos, and
                  ownership status.
                </li>
                <li>
                  <strong className="text-slate-900">Technical & Usage Data:</strong>{" "}
                  IP address, browser type, device information, operating system,
                  referral URLs, page views, and browsing patterns collected
                  automatically via cookies and Google Analytics (GA4).
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information collected solely for legitimate real estate
                advisory and customer service purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Responding promptly to your property inquiries and consultation
                  requests.
                </li>
                <li>
                  Preparing customized property shortlists and scheduling site
                  visits at your convenience.
                </li>
                <li>
                  Sending relevant transactional notifications, property
                  brochures, or location details via WhatsApp or phone calls.
                </li>
                <li>
                  Facilitating preliminary coordination between interested buyers
                  and verified property owners or promoters.
                </li>
                <li>
                  Analyzing website performance, user trends, and improving our
                  online guides and resources.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                4. Zero-Spam & Information Sharing Policy
              </h2>
              <p className="mt-3">
                <strong className="text-slate-900">
                  We will never sell, rent, trade, or distribute your personal data
                  to third-party telemarketers or marketing agencies.
                </strong>
              </p>
              <p className="mt-3">
                Your information is strictly shared only in the following
                circumstances:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-slate-900">Site Visit Facilitation:</strong>{" "}
                  With your explicit consent, your contact name and preferred visit
                  timing may be shared with the relevant property owner or builder
                  representative strictly to enable physical access and gate entry.
                </li>
                <li>
                  <strong className="text-slate-900">Legal Compliance:</strong> When
                  required by applicable Indian laws, judicial proceedings, or
                  statutory authorities.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                5. Cookies and Google Analytics
              </h2>
              <p className="mt-3">
                Our website uses standard cookies and Google Analytics 4
                (Measurement ID: G-RK86ELKQ6C) to gather aggregated, non-personally
                identifiable traffic metrics. You can control or disable cookies
                through your browser settings at any time.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                6. Data Security and Retention
              </h2>
              <p className="mt-3">
                We implement industry-standard physical, electronic, and managerial
                security protocols to protect your personal information from
                unauthorized access, alteration, or disclosure. We retain your
                contact information only for as long as necessary to fulfill your
                property consultation and related service requirements.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                7. Your Data Rights
              </h2>
              <p className="mt-3">
                Under applicable Indian data protection laws, you have the right
                to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>
                  Opt out of communications or request deletion of your contact
                  details from our consultation records at any time.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                8. Grievance Officer & Contact Details
              </h2>
              <p className="mt-3">
                If you have questions regarding this Privacy Policy, wish to exercise
                your data rights, or have any grievances regarding our data
                practices, please contact our Grievance Officer:
              </p>
              <div className="mt-4 rounded-lg bg-[#f7f3e8] p-5">
                <p className="font-semibold text-[#10383a]">Vedang Properties</p>
                <p className="mt-1 text-sm text-slate-700">
                  {contact.addressFull}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <strong>Phone / WhatsApp:</strong>{" "}
                  <a
                    href={`tel:${contact.tel}`}
                    className="text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    {contact.phoneDisplay}
                  </a>
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  <strong>Google Profile:</strong>{" "}
                  <a
                    href={contact.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    Visit Google Business Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[#10383a] px-6 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
