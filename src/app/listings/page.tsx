import type { Metadata } from "next";
import Link from "next/link";
import { ListingsExplorer } from "@/components/ListingsExplorer";
import { ListingsFooter } from "@/components/ListingsFooter";
import { ListingsHeader } from "@/components/ListingsHeader";
import { listings } from "@/data/listings";
import { contact } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Property Listings in Mohali & Tricity",
  description:
    "Browse current flats, residential plots, commercial office spaces, and land listings from Vedang Properties across Mohali, Aerocity, IT City, Zirakpur, Banur, and Rajpura.",
  alternates: { canonical: "/listings" },
  openGraph: {
    title: "Property Listings in Mohali & Tricity | Vedang Properties",
    description:
      "Current flats, plots, commercial offices, and land options with practical details, location context and direct enquiry support.",
    url: "/listings",
    images: [absoluteUrl("/images/listings/aerocity-e-block-300-sqyd-plot.png")],
  },
};

export default function ListingsPage() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hello Vedang Properties, please help me compare your current property listings.",
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Property Listings in Mohali and Tricity",
    url: absoluteUrl("/listings"),
    description:
      "Current property options presented by Vedang Properties for direct enquiry and verification.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: listings.length,
      itemListElement: listings.map((listing, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: listing.title,
        url: absoluteUrl(`/listings/${listing.slug}`),
      })),
    },
  };

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ListingsHeader />

      <section className="overflow-hidden bg-[#10383a] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d6a74e]">
              Current property options
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Listings with the details you need before a site visit
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Compare available flats, plots and land across Zirakpur, Mohali
              and the Rajpura region. Each listing clearly separates supplied
              information from details that still need confirmation.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/8 p-5">
            <p className="text-4xl font-semibold text-[#d6a74e]">
              {listings.length}
            </p>
            <p className="mt-1 font-semibold">property options listed</p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Prices and availability are reconfirmed when you enquire.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#d6a74e] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#e0b862]"
            >
              Request a shortlist
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#b85f45]">
                Browse listings
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#10383a] md:text-4xl">
                Find a property by type or readiness
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Open any listing for its full description, nearby connectivity,
                map context and verification checklist.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#10383a] px-5 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
            >
              Share your requirement
            </Link>
          </div>

          <ListingsExplorer listings={listings} />
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {[
            [
              "Availability",
              "A property may be sold, held or repriced. We reconfirm availability and commercial terms before arranging a visit.",
            ],
            [
              "Location",
              "Map views provide locality context. The exact flat, plot or land pin and boundaries must be confirmed separately.",
            ],
            [
              "Verification",
              "Images are branded listing graphics. Buyers should inspect the site and obtain independent legal and financial review.",
            ],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-xl bg-[#f7f3e8] p-5">
              <h2 className="text-lg font-semibold text-[#10383a]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#b85f45] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Not sure which option fits?
            </h2>
            <p className="mt-2 text-white/80">
              Share your budget, preferred location and property type for a
              focused comparison.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${contact.tel}`}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-5 font-semibold transition hover:bg-white/10"
            >
              Call {contact.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#10383a] px-5 font-semibold transition hover:bg-[#0c2b2d]"
            >
              WhatsApp requirement
            </a>
          </div>
        </div>
      </section>

      <ListingsFooter />
    </main>
  );
}

