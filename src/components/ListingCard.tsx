import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/site";
import type { PropertyListing } from "@/data/listings";

export function ListingCard({ listing }: { listing: PropertyListing }) {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Hello Vedang Properties, I want details about ${listing.shortTitle} in ${listing.location}.`,
  )}`;

  const cardFacts = listing.facts
    .filter((fact) => !["Property type", "Transaction"].includes(fact.label))
    .slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10">
      <Link
        href={`/listings/${listing.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#ece7da]"
        aria-label={`View ${listing.title}`}
      >
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.025]"
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#10383a] px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {listing.category}
          </span>
          <span className="rounded-full bg-[#d6a74e] px-3 py-1 text-xs font-semibold text-[#10383a] shadow-sm">
            {listing.status}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
          {listing.transaction}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-7 text-[#10383a]">
          <Link href={`/listings/${listing.slug}`} className="hover:text-[#b85f45]">
            {listing.title}
          </Link>
        </h3>
        <p className="mt-2 flex gap-2 text-sm leading-6 text-slate-600">
          <LocationIcon />
          <span>{listing.location}</span>
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-[#f7f3e8] p-3 sm:grid-cols-3">
          {cardFacts.map((fact) => (
            <div key={fact.label} className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                {fact.label}
              </p>
              <p className="mt-1 break-words text-sm font-semibold text-[#10383a]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{listing.summary}</p>

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-3 border-t border-slate-200 pt-4">
            <div>
              <p className="text-xs font-medium text-slate-500">
                {listing.transaction.toLowerCase().includes("lease")
                  ? "Lease terms"
                  : "Asking price"}
              </p>
              <p className="mt-1 font-semibold text-[#10383a]">{listing.price}</p>
            </div>
            <p className="text-right text-xs font-medium text-[#4f7f66]">
              Details verified on enquiry
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href={`/listings/${listing.slug}`}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#10383a] px-3 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
            >
              View details
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#b85f45] px-3 text-sm font-semibold text-white transition hover:bg-[#984a35]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#b85f45]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
