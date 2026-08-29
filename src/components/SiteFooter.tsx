import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { contact } from "@/data/site";
import { areaGuides } from "@/data/areas";
import { serviceGuides } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b282b] text-white">
      {/* Top Main Section */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2">
            <BrandLockup />
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
              Vedang Properties is a trusted real estate consultancy based in
              GMADA Aerocity, Mohali. We provide unbiased, ground-reality property
              shortlisting, site visit coordination, and documentation guidance
              across Mohali and Tricity.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#d6a74e]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{contact.addressFull}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[#d6a74e]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
                </svg>
                <a
                  href={`tel:${contact.tel}`}
                  className="transition hover:text-[#d6a74e]"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-[#d6a74e]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
                  <path d="m9.5 9.5 1.3 1.3a1 1 0 0 1 0 1.4l-.4.4a6 6 0 0 0 2.9 2.9l.4-.4a1 1 0 0 1 1.4 0l1.3 1.3" />
                </svg>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#d6a74e]"
                >
                  WhatsApp: +91 82646 30736
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={contact.googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-white/20 px-3 text-xs font-semibold text-white/90 transition hover:border-[#d6a74e] hover:bg-white/10 hover:text-white"
              >
                <span>Directions on Google</span>
              </a>
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-white/20 px-3 text-xs font-semibold text-white/90 transition hover:border-[#d6a74e] hover:bg-white/10 hover:text-white"
              >
                <span>Google Profile & Reviews</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
              Company & Guides
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/listings" className="transition hover:text-white">
                  Property Listings
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Articles & Checklists
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="transition hover:text-white">
                  FAQs Hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact & Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
              Our Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {serviceGuides.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="transition hover:text-white"
                  >
                    {service.kicker || service.title.split(" in Mohali")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Localities */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
              Locality Guides
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {areaGuides.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="transition hover:text-white"
                  >
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#071d1f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-white/60 sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Vedang Properties. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#d6a74e]"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-[#d6a74e]">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="transition hover:text-[#d6a74e]">
              Disclaimer & RERA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
