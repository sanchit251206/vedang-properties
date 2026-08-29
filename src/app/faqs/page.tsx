import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact } from "@/data/site";
import { absoluteUrl, coreSeoKeywords } from "@/data/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Mohali Real Estate | Vedang Properties",
  description:
    "Comprehensive FAQs on buying, selling, and investing in Mohali real estate. Answers regarding GMADA Aerocity, IT City, registry, stamp duty, plots, commercial SCOs, and NRIs.",
  alternates: {
    canonical: "/faqs",
  },
  keywords: [
    ...coreSeoKeywords,
    "Mohali property FAQs",
    "GMADA Aerocity plot buying questions",
    "stamp duty in Mohali Punjab",
    "NRI property buying Mohali",
    "real estate FAQs Mohali",
  ],
};

const faqCategories = [
  {
    category: "Buying Property in Mohali",
    questions: [
      {
        q: "What is the difference between GMADA allotted sectors and private builder projects?",
        a: "GMADA (Greater Mohali Area Development Authority) sectors like Aerocity, IT City, and EcoCity are planned government-developed sectors with standardized plot sizes, wide roads, and government utility infrastructure. Private builder projects consist of gated group housing societies, independent floors, and townships developed by private promoters requiring Punjab RERA registrations and municipal/GMADA sanction plans.",
      },
      {
        q: "What are the typical registry and stamp duty charges in Punjab?",
        a: "In Punjab, stamp duty on property registration generally ranges between 5% to 7% of the circle rate or sale consideration (plus applicable infrastructure cess and registration fees). Concessions are often available when properties are registered in the name of female buyers. Consult our team or a legal advisor for current exact circle rates and district revenue updates.",
      },
      {
        q: "What documents must I verify before buying a flat or builder floor?",
        a: "Key documents include: Sanctioned building plan, Completion/Occupancy Certificate (for ready homes) or Punjab RERA registration number (for under-construction projects), Title Deed trail establishing clear ownership, Non-Encumbrance Certificate (from Sub-Registrar), NOC from GMADA/Society, and utility clearance receipts.",
      },
      {
        q: "How does Vedang Properties assist home buyers?",
        a: "We assess your budget, preferred commute, room requirements, and possession timeline first. We shortlist verified options across Aerocity, IT City, Kharar, Zirakpur, and New Chandigarh, accompany you on site visits, and help identify important document checks before any financial step.",
      },
    ],
  },
  {
    category: "Plots & Land in Mohali",
    questions: [
      {
        q: "How are plots transferred in GMADA Aerocity and IT City?",
        a: "GMADA plots are transferred through the official PUDA/GMADA citizen portal. The process involves obtaining a No Due Certificate (NDC), verifying allotment letters, paying transfer fees to GMADA, and completing transfer deeds through the competent authority.",
      },
      {
        q: "What checks should I complete before buying a residential plot?",
        a: "Verify exact plot demarcation and physical boundaries on site, check approach road width, confirm whether the plot is in an approved layout, ensure there are no legal disputes or mortgage liens, and check construction timeline conditions set by the development authority.",
      },
      {
        q: "Can I get a bank loan for purchasing a residential plot in Mohali?",
        a: "Yes, major scheduled commercial banks and housing finance corporations provide plot loans for GMADA-allotted sectors and approved private layouts, subject to clear title and borrower eligibility.",
      },
    ],
  },
  {
    category: "Commercial Property & SCOs",
    questions: [
      {
        q: "What makes commercial property on PR7 Airport Road popular?",
        a: "Airport Road (PR7) serves as the primary arterial expressway connecting Mohali, Chandigarh International Airport, Zirakpur, and Patiala/Delhi highways. Commercial SCOs, retail plazas, and office spaces here benefit from high vehicular visibility, wide frontage, and growing corporate catchments.",
      },
      {
        q: "What should I evaluate before buying or leasing a showroom?",
        a: "Evaluate frontage width, dedicated customer and staff parking, floor-to-ceiling clearance, power load sanctions, fire safety approvals, maintenance costs, and whether the intended commercial trade is permitted in the building.",
      },
      {
        q: "Do you guarantee commercial rental yields or tenant lease agreements?",
        a: "No. While commercial properties in Mohali offer attractive rental demand, rental income depends on market occupancy, tenant profile, and fit-out terms. We assist in realistic market benchmarking rather than unrealistic fixed-return promises.",
      },
    ],
  },
  {
    category: "Selling Property & Owner Inquiries",
    questions: [
      {
        q: "How can property owners list their home or plot with Vedang Properties?",
        a: "Owners can submit their property details, location, asking price, photos, and contact information through our website contact form or directly via WhatsApp (+91 82646 30736). We screen genuine buyer requirements to coordinate qualified visits.",
      },
      {
        q: "How do you determine a realistic asking price for my property?",
        a: "We review recent actual transacted prices in your specific sector or society, evaluate condition, floor placement, road access, and current competing inventory to advise a competitive, realistic price range.",
      },
    ],
  },
  {
    category: "NRI Real Estate Guidance",
    questions: [
      {
        q: "Can Non-Resident Indians (NRIs) buy residential and commercial property in Mohali?",
        a: "Yes, under RBI and FEMA guidelines, NRIs and OCIs can freely purchase residential and commercial real estate in India. Funds must be routed through standard banking channels (NRE/NRO accounts). Agricultural land and farmhouses have separate regulatory restrictions.",
      },
      {
        q: "Can a transaction be executed if the NRI owner/buyer is abroad?",
        a: "Yes, transactions can be carried out through a legally executed and registered Specific Power of Attorney (POA) adjudicated in the appropriate revenue office in Punjab.",
      },
    ],
  },
];

export default function FaqsPage() {
  const pageUrl = absoluteUrl("/faqs");

  // Flatten questions for FAQPage Schema
  const allFaqs = faqCategories.flatMap((cat) => cat.questions);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faqpage`,
        url: pageUrl,
        name: "Mohali Real Estate FAQs - Vedang Properties",
        description:
          "Frequently asked questions about property buying, selling, GMADA plots, commercial spaces, and registry in Mohali.",
        mainEntity: allFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
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
            name: "FAQs Hub",
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
      <section className="bg-[#10383a] py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
            Knowledge Base
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base leading-7 text-white/80">
            Answers to common questions about buying homes, plots, commercial
            spaces, GMADA documentation, and registry procedures in Mohali.
          </p>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 space-y-12">
          {faqCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="border-b border-slate-300 pb-3">
                <h2 className="text-2xl font-bold text-[#10383a]">
                  {category.category}
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {category.questions.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#d6a74e]"
                  >
                    <h3 className="text-lg font-semibold text-[#10383a]">
                      {faq.q}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {faq.a}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* Have more questions CTA */}
          <div className="rounded-xl border border-black/10 bg-[#102f33] p-8 text-center text-white">
            <h3 className="text-2xl font-semibold">
              Have a specific question about a Mohali property?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75">
              Speak directly with our local consultants in Aerocity. We will help
              you compare choices with genuine ground facts.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${contact.tel}`}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[#d6a74e] px-5 text-sm font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
              >
                Call {contact.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Office details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
