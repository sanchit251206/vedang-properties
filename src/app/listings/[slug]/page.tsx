import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingCard } from "@/components/ListingCard";
import { ListingsFooter } from "@/components/ListingsFooter";
import { ListingsHeader } from "@/components/ListingsHeader";
import { MapFacade } from "@/components/MapFacade";
import { getListing, listings } from "@/data/listings";
import { contact } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

type ListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: ListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    return {};
  }

  return {
    title: `${listing.title} for Sale`,
    description: `${listing.summary} View details, nearby connectivity, map context and enquiry information from Vedang Properties.`,
    alternates: { canonical: `/listings/${listing.slug}` },
    openGraph: {
      title: `${listing.title} | Vedang Properties`,
      description: listing.summary,
      url: absoluteUrl(`/listings/${listing.slug}`),
      images: [{ url: absoluteUrl(listing.image), alt: listing.imageAlt }],
    },
  };
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Hello Vedang Properties, I want to enquire about ${listing.shortTitle} in ${listing.location}.`,
  )}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    listing.mapQuery,
  )}`;
  const relatedListings = listings
    .filter((item) => item.slug !== listing.slug)
    .sort((a, b) => {
      const aScore =
        Number(a.category === listing.category) +
        Number(a.locality === listing.locality);
      const bScore =
        Number(b.category === listing.category) +
        Number(b.locality === listing.locality);
      return bScore - aScore;
    })
    .slice(0, 3);

  const listingUrl = absoluteUrl(`/listings/${listing.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${listingUrl}#webpage`,
        url: listingUrl,
        name: listing.title,
        description: listing.summary,
        primaryImageOfPage: absoluteUrl(listing.image),
      },
      {
        "@type": "RealEstateListing",
        "@id": `${listingUrl}#listing`,
        name: listing.title,
        description: listing.summary,
        url: listingUrl,
        image: absoluteUrl(listing.image),
        category: listing.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            description: listing.priceNote || listing.price,
          },
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "RealEstateAgent",
            name: "Vedang Properties",
            url: absoluteUrl("/"),
            telephone: contact.tel,
          },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: listing.locality,
          addressRegion: "Punjab",
          addressCountry: "IN",
          streetAddress: listing.location,
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
            name: "Listings",
            item: absoluteUrl("/listings"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: listing.title,
            item: listingUrl,
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
      <ListingsHeader />

      <section className="bg-[#10383a] pb-14 text-white md:pb-20">
        <div className="mx-auto max-w-7xl px-5 pt-4 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 py-5 text-sm text-white/60"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/listings" className="hover:text-white">
              Listings
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/85">{listing.shortTitle}</span>
          </nav>

          <div className="grid items-center gap-9 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold ring-1 ring-white/15">
                  {listing.category}
                </span>
                <span className="rounded-full bg-[#d6a74e] px-3 py-1 text-sm font-semibold text-[#10383a]">
                  {listing.status}
                </span>
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                {listing.title}
              </h1>
              <p className="mt-4 text-lg text-white/75">{listing.location}</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                {listing.summary}
              </p>

              <div className="mt-7 rounded-xl border border-white/15 bg-white/8 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="text-sm text-white/60">Asking price</p>
                  <p className="mt-1 text-2xl font-semibold text-[#d6a74e]">
                    {listing.price}
                  </p>
                  <p className="mt-2 max-w-xl text-xs leading-5 text-white/55">
                    {listing.priceNote}
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-0 sm:flex sm:shrink-0">
                  <a
                    href={`tel:${contact.tel}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-4 text-sm font-semibold transition hover:bg-white/10"
                  >
                    Call now
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#d6a74e] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#e0b862]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/15 bg-[#eee8dc] shadow-2xl shadow-black/20">
              <Image
                src={listing.image}
                alt={listing.imageAlt}
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
              Property at a glance
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10383a] md:text-4xl">
              Key listing details
            </h2>
            <dl className="mt-7 grid overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-2 xl:grid-cols-3">
              {listing.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-slate-200 p-5 last:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-semibold text-[#10383a]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
                About this listing
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#10383a]">
                What buyers should know
              </h2>
              <div className="mt-5 grid gap-4 text-lg leading-8 text-slate-600">
                {listing.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:sticky lg:top-6">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
              Arrange an enquiry
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#10383a]">
              Confirm details before travelling
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Mention this property when you call or message. We will reconfirm
              availability, current terms and the correct visit location.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#b85f45] px-4 font-semibold text-white transition hover:bg-[#984a35]"
              >
                Ask on WhatsApp
              </a>
              <a
                href={`tel:${contact.tel}`}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#10383a] px-4 font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <p className="mt-5 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
              Do not send a token or advance solely on the basis of this page.
              Verify the property and transaction documents first.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
              Nearby area context
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10383a]">
              Connectivity and conveniences
            </h2>
            <ul className="mt-6 grid gap-3">
              {listing.nearby.map((place) => (
                <li
                  key={place}
                  className="flex gap-3 rounded-lg bg-[#f7f3e8] p-4 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b85f45]" />
                  <span>{place}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              These are general locality references, not guaranteed travel
              distances from the exact property.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
              Buyer verification
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10383a]">
              Check before you proceed
            </h2>
            <ol className="mt-6 grid gap-4">
              {listing.verification.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-lg border border-slate-200 p-4"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10383a] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
                Approximate map context
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#10383a] md:text-4xl">
                Explore the surrounding locality
              </h2>
            </div>
            <a
              href={mapHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#10383a] px-5 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <MapFacade
              title={`${listing.location} Context`}
              mapQuery={listing.mapQuery}
              mapUrl={mapHref}
              badgeText="Locality Map"
              aspectRatio="aspect-[16/7]"
            />
            <p className="p-5 text-sm leading-6 text-slate-600">
              This map shows approximate locality context. Ask Vedang
              Properties to confirm the exact visit point; it is not a plot
              boundary or land survey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3ed] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#b85f45]">
                More options
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#10383a]">
                Related listings
              </h2>
            </div>
            <Link
              href="/listings"
              className="hidden text-sm font-semibold text-[#10383a] underline decoration-[#d6a74e] decoration-2 underline-offset-4 sm:block"
            >
              View all listings
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedListings.map((item) => (
              <ListingCard key={item.slug} listing={item} />
            ))}
          </div>
          <Link
            href="/listings"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-[#10383a] px-5 text-sm font-semibold text-[#10383a] sm:hidden"
          >
            View all listings
          </Link>
        </div>
      </section>

      <ListingsFooter />
    </main>
  );
}

