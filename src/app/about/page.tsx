import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "About Us | Property Consultants in Mohali | Vedang Properties",
  description:
    "Learn about Vedang Properties, a premier real estate consultancy in Aerocity, Mohali. Discover our ground-reality advisory approach, local market expertise, and client commitment.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Ground-Reality Clarity",
    description:
      "We cut through marketing hype. We evaluate properties based on practical livability, road access, paperwork comfort, real costs, and neighbourhood development.",
    icon: CompassIcon,
  },
  {
    title: "Zero-Pressure Advisory",
    description:
      "We do not push random inventories. We listen to your family or business requirement first, curate shortlist options, and let you decide with total peace of mind.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Document Due Diligence",
    description:
      "We encourage complete verification of GMADA approvals, Punjab RERA compliance, title chains, and municipal records before any token or contract.",
    icon: DocumentIcon,
  },
  {
    title: "End-to-End Coordination",
    description:
      "From initial requirement discussion and guided site visits to owner negotiation and documentation handover, we assist at every step.",
    icon: HandshakeIcon,
  },
];

const milestones = [
  {
    figure: "100%",
    label: "Local Tricity Focus",
    subtext: "Deep expertise in Mohali, Aerocity, IT City, Kharar & Zirakpur.",
  },
  {
    figure: "171",
    label: "Aerocity Office Hub",
    subtext: "MCC-2, GMADA Aerocity office for in-person consultations.",
  },
  {
    figure: "4+",
    label: "Property Verticals",
    subtext: "Residential homes, plots, commercial spaces, and seller listings.",
  },
  {
    figure: "5.0 ★",
    label: "Google Verified Profile",
    subtext: "Transparent client feedback and direct directions on Google Maps.",
  },
];

export default function AboutPage() {
  const pageUrl = absoluteUrl("/about");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#aboutpage`,
        url: pageUrl,
        name: "About Vedang Properties - Real Estate Consultants in Mohali",
        description:
          "About Vedang Properties, a trusted property consultancy based in Aerocity, Mohali, offering residential, commercial, and plot advisory.",
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
            name: "About Us",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#10383a] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#d6a74e] ring-1 ring-white/15">
              About Vedang Properties
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Local property guidance built on trust, transparency, and facts.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Based in GMADA Aerocity, Mohali, Vedang Properties helps families,
              businesses, and investors navigate the Tricity real estate market
              with clear ground realities and unbiased advice.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d6a74e] px-6 text-base font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
              >
                Visit our office
              </Link>
              <a
                href={`tel:${contact.tel}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-6 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Call {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Milestones */}
      <section className="relative z-10 -mt-8 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-black/10 bg-white p-6 shadow-md shadow-slate-950/5"
            >
              <p className="text-3xl font-bold text-[#10383a]">{item.figure}</p>
              <p className="mt-1 font-semibold text-slate-900">{item.label}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b85f45]">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#10383a] md:text-4xl">
              A real estate consultancy that puts your requirements first.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              <p>
                The real estate market in Mohali is expanding rapidly with the
                growth of the International Airport corridor, IT City, GMADA
                Aerocity, PR7 Airport Road, Kharar, Zirakpur, and New Chandigarh.
                However, finding genuine property options often comes with
                exaggerated claims, unclear legal status, and aggressive sales
                pitches.
              </p>
              <p>
                <strong>Vedang Properties</strong> was founded to provide a cleaner,
                more grounded advisory experience. We believe that buying a home,
                investing in a commercial showroom, or acquiring a residential
                plot is a major financial milestone that requires calm,
                fact-based decision-making.
              </p>
              <p>
                We do not treat properties as mere numbers on a catalogue. We
                personally inspect locations, assess connectivity routes at
                different times of day, evaluate usable space versus super area,
                and clarify ownership and approval documentation before arranging
                visits.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-slate-100 shadow-xl">
            <Image
              src="/images/gallery-home.jpg"
              alt="Vedang Properties Mohali residential exterior visual"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10383a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-wider text-[#d6a74e]">
                Ground-Reality Insights
              </p>
              <p className="mt-1 text-lg font-semibold">
                Serving buyers & sellers across SAS Nagar Mohali & Tricity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#b85f45]">
              Our Core Principles
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10383a] md:text-4xl">
              Why buyers and owners choose Vedang Properties
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We uphold strict standards of honesty, privacy, and thoroughness
              in every client interaction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-xl border border-slate-200 bg-[#f7f3e8]/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6a74e] hover:bg-white hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#10383a] text-white">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#10383a]">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office & Visit CTA */}
      <section className="bg-[#102f33] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#d6a74e]">
              In-Person Consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Visit our office in GMADA Aerocity, Mohali
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              You are always welcome to drop by our office for a face-to-face
              discussion over tea. We can review locality maps, compare sector
              layouts, and plan your site visit itinerary.
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>
                <strong>Address:</strong> {contact.addressFull}
              </p>
              <p>
                <strong>Timings:</strong> Monday – Saturday: 9:30 AM – 7:30 PM
              </p>
              <p>
                <strong>Phone:</strong> {contact.phoneDisplay}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d6a74e] px-5 text-sm font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
              >
                Get Google Directions
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact details
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">
              Areas We Actively Cover
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Compare property opportunities across major Tricity growth
              corridors:
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                { name: "GMADA Aerocity", href: "/areas/aerocity-mohali" },
                { name: "IT City Mohali", href: "/areas/it-city-mohali" },
                { name: "Airport Road (PR7)", href: "/areas/airport-road-mohali" },
                { name: "Kharar & Sector 126", href: "/areas/kharar" },
                { name: "Zirakpur Corridors", href: "/areas/zirakpur" },
                { name: "New Chandigarh", href: "/areas/new-chandigarh" },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="flex items-center gap-2 rounded-md bg-white/10 p-3 font-medium text-white transition hover:bg-[#d6a74e] hover:text-[#102f33]"
                >
                  <span>→</span>
                  <span>{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function CompassIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L14 11" />
      <path d="m13 7-2-2a1 1 0 0 0-1.4 0L3 11.6a2 2 0 0 0 0 2.8l1.6 1.6a2 2 0 0 0 2.8 0L10 13" />
    </svg>
  );
}
