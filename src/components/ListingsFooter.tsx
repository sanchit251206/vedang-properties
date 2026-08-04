import Link from "next/link";
import { contact } from "@/data/site";

export function ListingsFooter() {
  return (
    <footer className="bg-[#0b282b] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-8">
        <div>
          <p className="text-xl font-semibold">Vedang Properties</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
            Property shortlisting, comparisons and site-visit coordination
            across Mohali, Zirakpur and nearby Tricity corridors.
          </p>
          <p className="mt-4 text-sm text-white/80">{contact.addressFull}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-white/75">
          <Link href="/listings" className="hover:text-white">
            Listings
          </Link>
          <Link href="/#areas" className="hover:text-white">
            Areas
          </Link>
          <a href={`tel:${contact.tel}`} className="hover:text-white">
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}

