import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact, officialSourceLinks } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Disclaimer & RERA Compliance Policy | Vedang Properties Mohali",
  description:
    "Official Real Estate Disclaimer and Punjab RERA Compliance Policy for Vedang Properties, Mohali. Learn about property verification, indicative pricing, and statutory guidelines.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  const pageUrl = absoluteUrl("/disclaimer");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Disclaimer & RERA Compliance Policy - Vedang Properties",
        description:
          "Real Estate Disclaimer and RERA compliance guidance from Vedang Properties, Mohali.",
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
            name: "Disclaimer & RERA",
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
            Legal & Regulatory Notice
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Disclaimer & RERA Compliance Policy
          </h1>
          <p className="mt-4 text-base leading-7 text-white/75">
            Guidance on property verification, official records, and statutory
            compliance across Mohali & Tricity.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 space-y-8 text-slate-700 leading-7">
            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                1. General Real Estate Advisory Disclaimer
              </h2>
              <p className="mt-3">
                The information, property descriptions, pricing estimates,
                locality comparisons, and market guides published on this website
                by Vedang Properties are provided for informational and educational
                purposes only.
              </p>
              <p className="mt-3">
                Vedang Properties operates as an independent real estate
                consultancy and marketing intermediary. While we strive to present
                accurate and reliable data, nothing on this website shall be
                construed as a binding contractual offer, legal guarantee,
                financial endorsement, or title certification.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                2. Punjab RERA Compliance & Project Verification
              </h2>
              <p className="mt-3">
                Under the Real Estate (Regulation and Development) Act, 2016
                (RERA) and Punjab RERA regulations:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Promoters and developers of covered commercial and residential
                  projects must register their projects with the Punjab Real
                  Estate Regulatory Authority before advertising or marketing.
                </li>
                <li>
                  Buyers are strongly encouraged to independently verify project
                  RERA registration numbers, sanctioned layout plans, phase
                  deliverables, developer track record, and escrow compliance
                  directly on the official Punjab RERA portal:{" "}
                  <a
                    href="https://rera.punjab.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    https://rera.punjab.gov.in
                  </a>
                  .
                </li>
                <li>
                  Vedang Properties does not represent or act as a developer for
                  third-party projects and advises clients to confirm all statutory
                  approvals before entering into any sale agreement.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                3. GMADA & Authority Land Due Diligence
              </h2>
              <p className="mt-3">
                For properties and plots located in GMADA sectors, Aerocity, IT
                City, and surrounding sectors in Mohali:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Allotment letters, possession letters, non-encumbrance status,
                  transfer eligibility, dues, and boundary demarcation should be
                  verified through the Greater Mohali Area Development Authority (
                  <a
                    href="https://gmada.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    gmada.gov.in
                  </a>
                  ) and PUDA citizen service portal (
                  <a
                    href="https://puda.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#10383a] underline hover:text-[#b85f45]"
                  >
                    puda.gov.in
                  </a>
                  ).
                </li>
                <li>
                  Prospective buyers must ensure that all outstanding authority
                  dues, transfer charges, and documentation formalities are accounted for in
                  their budget.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                4. Illustrative Media & Renderings
              </h2>
              <p className="mt-3">
                All visual assets—including project elevation renderings,
                photographs, floor plan diagrams, master layout graphics, and 3D
                walkthroughs—are artistic impressions and indicative
                representations. Actual on-ground finished specifications, carpet
                areas, views, fittings, and room dimensions may vary and should be
                inspected physically during site visits.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                5. No Assured Returns or Investment Guarantees
              </h2>
              <p className="mt-3">
                Real estate investments carry inherent market dynamics, liquidity
                risks, and economic variables.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Vedang Properties does not promise, warrant, or guarantee any
                  fixed capital appreciation, rental yield, tenant occupancy, or
                  resale profit.
                </li>
                <li>
                  Past performance or historical area price trends across Mohali,
                  Kharar, or Zirakpur are not a guarantee of future returns.
                </li>
                <li>
                  All investment decisions should be based on your individual
                  financial risk tolerance and professional financial advice.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 className="text-2xl font-semibold text-[#10383a]">
                6. Official Portals & Direct Resources
              </h2>
              <p className="mt-3">
                We advocate transparent real estate transactions. Please refer to
                official government and statutory portals for verified regulatory
                updates:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://rera.punjab.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 p-4 transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  <p className="font-semibold text-[#10383a]">Punjab RERA Portal</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Verify registered projects, promoter filings & agent registrations
                  </p>
                </a>
                <a
                  href="https://gmada.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 p-4 transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  <p className="font-semibold text-[#10383a]">GMADA Official Website</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Master plans, sector layout maps & e-auction notices
                  </p>
                </a>
                <a
                  href="https://puda.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 p-4 transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  <p className="font-semibold text-[#10383a]">PUDA Citizen Services</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Property transfer tracking, NOCs & authority dues
                  </p>
                </a>
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 p-4 transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  <p className="font-semibold text-[#10383a]">Vedang Properties Office</p>
                  <p className="mt-1 text-xs text-slate-600">
                    Aerocity office directions, client reviews & business details
                  </p>
                </a>
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
