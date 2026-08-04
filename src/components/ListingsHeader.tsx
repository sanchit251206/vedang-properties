import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { contact } from "@/data/site";

export function ListingsHeader() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hello Vedang Properties, I want help with a property listing.",
  )}`;

  return (
    <header className="bg-[#102f33] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8">
        <BrandLockup />

        <nav
          aria-label="Listings navigation"
          className="order-3 flex w-full items-center gap-5 overflow-x-auto border-t border-white/10 pt-4 text-sm font-medium text-white/80 md:order-2 md:w-auto md:border-0 md:pt-0"
        >
          <Link className="shrink-0 transition hover:text-white" href="/">
            Home
          </Link>
          <Link
            className="shrink-0 transition hover:text-white"
            href="/listings"
          >
            All listings
          </Link>
          <Link
            className="shrink-0 transition hover:text-white"
            href="/#areas"
          >
            Areas
          </Link>
          <Link
            className="shrink-0 transition hover:text-white"
            href="/#contact"
          >
            Contact
          </Link>
        </nav>

        <div className="order-2 flex gap-2 md:order-3">
          <a
            href={`tel:${contact.tel}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-3 text-sm font-semibold transition hover:bg-white/10 sm:px-4"
          >
            Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#d6a74e] px-3 text-sm font-semibold text-[#102f33] transition hover:bg-[#e0b862] sm:px-4"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

