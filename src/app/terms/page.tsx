import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Terms of Service | Vedang Properties Mohali",
  description:
    "Review the Terms of Service and Website Usage Agreement for Vedang Properties, Mohali. Understand advisory scope, due diligence requirements, and jurisdiction.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const pageUrl = absoluteUrl("/terms");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Terms of Service - Vedang Properties",
        description:
          "Terms of Service and Website Usage Agreement for Vedang Properties, real estate consultants in Mohali.",
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
            name: "Terms of Service",
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
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                Welcome to Vedang Properties. By accessing, browsing, or using this
                website, submitting enquiry forms, or engaging our property
                consultancy services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service
                (&quot;Terms&quot;) along with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#10383a] font-semibold underline hover:text-[#b85f45]"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/disclaimer"
                  className="text-[#10383a] font-semibold underline hover:text-[#b85f45]"
                >
                  Disclaimer
                </Link>
                . If you do not agree to these Terms, please do not use our website
                or services.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                2. Nature & Scope of Advisory Services
              </h2>
              <p className="mt-3">
                Vedang Properties operates as an independent real estate
                consultancy, advisory, and facilitation agency based in Aerocity,
                Mohali.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  We assist buyers, sellers, and investors in discovering,
                  comparing, and shortlisting real estate properties across SAS
                  Nagar (Mohali), GMADA Aerocity, IT City, Kharar, Zirakpur, and New
                  Chandigarh.
                </li>
                <li>
                  Unless explicitly stated otherwise in writing, Vedang
                  Properties is not the direct builder, promoter, owner, or
                  statutory authority for properties listed or discussed on this
                  website.
                </li>
                <li>
                  Our role is limited to advisory facilitation, market research,
                  and site-visit coordination. We do not guarantee property
                  appreciation, capital returns, or specific rental yields.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                3. Mandatory Buyer & Client Due Diligence
              </h2>
              <p className="mt-3 font-semibold text-slate-900">
                Independent verification is mandatory before making any financial
                commitment:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-slate-900">Legal & Title Checks:</strong>{" "}
                  Prospective buyers and tenants must conduct their own independent
                  legal, financial, and technical due diligence through qualified
                  advocates, property evaluators, or financial advisors prior to
                  paying any token amount or executing agreements.
                </li>
                <li>
                  <strong className="text-slate-900">Statutory Approvals:</strong>{" "}
                  Clients are strongly encouraged to verify project registrations,
                  approvals, layout plans, and completion certificates directly on
                  the official Punjab RERA portal (
                  <a
                    href="https://rera.punjab.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    rera.punjab.gov.in
                  </a>
                  ) or respective municipal / GMADA authorities (
                  <a
                    href="https://gmada.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    gmada.gov.in
                  </a>
                  ).
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                4. Information Accuracy & Pricing
              </h2>
              <p className="mt-3">
                While we make every reasonable effort to ensure that the
                information, pricing ranges, area guides, and listings published on
                this website are current and reliable:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  All rates, dimensions, carpet areas, inventory availability, and
                  specifications are subject to change without prior notice.
                </li>
                <li>
                  Visual renderings, floor plans, photographs, and locality maps
                  are illustrative and indicative in nature and do not constitute an
                  offer or warranty.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                5. Communications & WhatsApp Opt-In
              </h2>
              <p className="mt-3">
                By submitting your contact number or using our WhatsApp buttons, you
                consent to receive transactional calls, WhatsApp messages, property
                details, and site visit updates from Vedang Properties regarding
                your specific real estate requirements. You may opt out of future
                communications at any time by simply notifying our team.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                All original content on this website—including articles, guides,
                logos, graphic design, text, branding, and layouts—is the
                intellectual property of Vedang Properties and is protected by
                applicable copyright and intellectual property laws of India.
                Unauthorized reproduction, scraping, or commercial republication
                without prior written consent is strictly prohibited.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                7. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by applicable law, Vedang
                Properties, its proprietors, and affiliates shall not be liable for
                any direct, indirect, incidental, consequential, or punitive
                damages arising from your use of this website, reliance on
                published content, or transactions entered into between buyers,
                sellers, and developers.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                8. Governing Law & Dispute Jurisdiction
              </h2>
              <p className="mt-3">
                These Terms shall be governed by and construed in accordance with
                the laws of the Republic of India. Any disputes, claims, or legal
                proceedings arising out of or related to these Terms or our services
                shall be subject to the exclusive jurisdiction of the competent
                courts in Sahibzada Ajit Singh Nagar (Mohali), Punjab, India.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                9. Contact Information
              </h2>
              <p className="mt-3">
                For questions or clarifications regarding these Terms of Service,
                please contact:
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
