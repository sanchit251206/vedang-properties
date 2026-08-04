import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { LeadForm } from "@/components/LeadForm";
import { ListingsExplorer } from "@/components/ListingsExplorer";
import { areaGuides } from "@/data/areas";
import { listings } from "@/data/listings";
import { contact, featuredArticles } from "@/data/site";
import { coreSeoKeywords } from "@/data/seo";

const whatsappText =
  "Hello Vedang Properties, I want help comparing property options in Mohali.";

export const metadata: Metadata = {
  title: "Property Consultants in Mohali",
  description:
    "Vedang Properties is a Mohali property consultant for residential homes, plots, commercial property, seller enquiries, and site-visit guidance across Aerocity, IT City, Kharar, Zirakpur, and New Chandigarh.",
  alternates: {
    canonical: "/",
  },
  keywords: coreSeoKeywords,
};

const propertyTypes = [
  {
    title: "Buy a home",
    copy: "Apartments, builder floors, villas, and ready-to-move family homes.",
    href: "/residential-property-mohali",
    icon: HomeIcon,
  },
  {
    title: "Plots and land",
    copy: "Residential plots, investment land, and location-led options.",
    href: "/plot-dealer-mohali",
    icon: PlotIcon,
  },
  {
    title: "Commercial",
    copy: "SCO, showroom, office, and rental yield focused opportunities.",
    href: "/commercial-property-mohali",
    icon: BuildingIcon,
  },
  {
    title: "Sell property",
    copy: "Owner leads, buyer matching, site visits, and documentation support.",
    href: "/sell-property-mohali",
    icon: KeyIcon,
  },
];

const processSteps = [
  {
    title: "Understand the requirement",
    copy: "Location, budget, property type, usage, possession preference, and documentation comfort are clarified first.",
  },
  {
    title: "Compare practical options",
    copy: "Instead of pushing random properties, the focus is on access, surroundings, budget fit, and visit-worthy choices.",
  },
  {
    title: "Arrange visit and follow-up",
    copy: "Site visits, owner or project coordination, negotiation points, and next-step documentation are handled carefully.",
  },
];

const googleProfileActions = [
  {
    title: "Get directions",
    copy: "Open the Aerocity office route in Google Maps.",
    href: contact.googleDirectionsUrl,
    icon: MapPinIcon,
  },
  {
    title: "Read Google reviews",
    copy: "Check Vedang Properties on Google before you call.",
    href: contact.googleMapsUrl,
    icon: StarIcon,
  },
  {
    title: "Review on Google",
    copy: "Share feedback after a completed visit or consultation.",
    href: contact.googleMapsUrl,
    icon: EditIcon,
  },
];

export default function Home() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-slate-950">
      <HeroSection whatsappHref={whatsappHref} />

      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b85f45]">
              Vedang Properties, Mohali
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#10383a] md:text-5xl">
              Local property guidance from Aerocity for serious buyers, sellers,
              and investors.
            </h2>
          </div>
          <div className="grid gap-5 text-slate-700">
            <p className="text-lg leading-8">
              Vedang Properties works as a local property consultant in Mohali
              for people who want clarity before they spend time on site
              visits. The focus is simple: understand the requirement, compare
              sensible options, and help the client move forward with better
              local context.
            </p>
            <p className="leading-7">
              If you are comparing property consultants in Mohali or searching
              for the best property dealers in Mohali, this site keeps the
              decision practical. From residential homes and plots to commercial
              spaces and resale enquiries, location, budget, access, paperwork,
              and future use are discussed before a visit is arranged.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-[#f7f3e8] p-4">
                <p className="text-sm font-semibold uppercase text-[#b85f45]">
                  Office
                </p>
                <p className="mt-2 font-semibold text-[#10383a]">
                  {contact.addressShort}
                </p>
              </div>
              <div className="rounded-lg bg-[#e8f0ea] p-4">
                <p className="text-sm font-semibold uppercase text-[#4f7f66]">
                  Call
                </p>
                <a
                  href={`tel:${contact.tel}`}
                  className="mt-2 block font-semibold text-[#10383a]"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="google-profile" className="reveal bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b85f45]">
              Google Business Profile
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#10383a] md:text-4xl">
              Easy directions, reviews, and contact from one place
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Visitors can open the Vedang Properties Google profile for
              directions, reviews, and the office location before starting a
              property conversation.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {googleProfileActions.map((action) => {
                const Icon = action.icon;

                return (
                  <a
                    key={action.title}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d6a74e] hover:shadow-lg hover:shadow-slate-950/10"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#10383a] text-white transition group-hover:bg-[#d6a74e] group-hover:text-[#10383a]">
                      <Icon />
                    </span>
                    <span className="mt-4 block text-base font-semibold text-[#10383a]">
                      {action.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {action.copy}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
            <div className="relative aspect-[16/9] bg-slate-100">
              <iframe
                title="Vedang Properties Google map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  contact.googleMapsQuery,
                )}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-[#b85f45]">
                  Office address
                </p>
                <p className="mt-1 font-semibold leading-7 text-[#10383a]">
                  {contact.addressFull}
                </p>
              </div>
              <a
                href={contact.googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#10383a] px-4 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
              >
                <MapPinIcon />
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="property-types" className="reveal bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            kicker="What we handle"
            title="Property help for buyers, sellers, and investors"
            copy="Start with the exact requirement. Vedang Properties will shortlist options, arrange visits, and help you compare the practical details before you decide."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#10383a] text-white">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-[#10383a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.copy}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex h-10 items-center rounded-md border border-[#10383a] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
                  >
                    Explore service
                    <ArrowIcon />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="mt-6">
            <Link
              href="/property-consultant-mohali"
              className="inline-flex h-11 items-center rounded-md bg-[#10383a] px-5 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
            >
              See the full property consultant service
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section id="listings" className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Current property options"
              title="Browse flats, plots, and land available for enquiry"
              copy="Review the supplied property details, shortlist suitable options, and open each listing for location context and the checks to complete before a visit."
            />
            <Link
              href="/listings"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#10383a] px-5 text-base font-semibold text-white transition hover:bg-[#0c2b2d]"
            >
              Open listings page
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10">
            <ListingsExplorer listings={listings} />
          </div>

          <p className="mt-6 rounded-lg bg-[#f7f3e8] p-4 text-sm leading-6 text-slate-600">
            Availability, price, exact location and documentation are confirmed
            on enquiry. Listing artwork is illustrative and does not replace a
            property inspection.
          </p>
        </div>
      </section>

      <section id="areas" className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Locality maps"
              title="Coverage across Mohali, Aerocity, IT City, and Tricity corridors"
              copy="Each area is compared by access, budget fit, daily convenience, and the buyer's purpose. These maps help visitors quickly understand the local focus."
            />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#b85f45] px-5 text-base font-semibold text-white transition hover:bg-[#984a35] focus:outline-none focus:ring-4 focus:ring-[#b85f45]/25"
            >
              <MessageIcon />
              Discuss an area
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {areaGuides.map((area) => (
              <article
                key={area.title}
                className="reveal overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <iframe
                    title={`${area.title} map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      area.mapQuery,
                    )}&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-[#b85f45]">
                    Area guide
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-[#10383a]">
                    {area.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {area.copy}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href={`/areas/${area.slug}`}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#10383a] px-4 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
                    >
                      Read area guide
                      <ArrowIcon />
                    </Link>
                    <a
                      href={area.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#10383a] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
                    >
                      Google Maps
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal bg-[#10383a] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.9fr] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#d6a74e]">
              How it works
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
              A clearer process before you commit time to visits
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">
              Property conversations move faster when the basics are clear from
              the start. The process is designed to reduce confusion, compare
              options properly, and keep the next step practical.
            </p>

            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="reveal flex gap-4 rounded-lg border border-white/15 bg-white/8 p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#d6a74e] font-semibold text-[#10383a]">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">
                      {step.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-white/70">
                      {step.copy}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="reveal rounded-lg bg-white p-6 text-slate-950">
              <p className="text-sm font-semibold uppercase text-[#b85f45]">
                Buyer support
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#10383a]">
                Site visits, location comparison, and documentation help
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                A buyer can move from requirement to shortlist to visit request
                without waiting for a callback form to disappear into nowhere.
              </p>
            </div>
            <div className="reveal rounded-lg bg-[#e8f0ea] p-6 text-slate-950">
              <p className="text-sm font-semibold uppercase text-[#4f7f66]">
                Owner leads
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#10383a]">
                Sellers can share property details directly
              </h3>
              <p className="mt-4 leading-7 text-slate-700">
                The same lead system can collect owner enquiries for resale,
                rental, and commercial property requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="reveal bg-[#f7f3e8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Articles and news"
              title="Useful Mohali property notes, without hype"
              copy="Practical buyer education, owner checklists, and official-source reminders for people comparing Mohali and Tricity property options."
            />
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#10383a] px-5 text-base font-semibold text-white transition hover:bg-[#0c2b2d] focus:outline-none focus:ring-4 focus:ring-[#10383a]/25"
            >
              View all articles
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="reveal overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase text-[#b85f45]">
                    <span>{article.category}</span>
                    <span className="text-slate-300">/</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-[#10383a]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-5 inline-flex h-10 items-center gap-2 rounded-md border border-[#10383a] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
                  >
                    Read article
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="reveal bg-[#102f33] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-[#d6a74e]">
              Contact
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold md:text-4xl">
              Tell us your requirement and get a shortlist
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/75">
              Share location, budget, and property type. Vedang Properties can
              respond with suitable options and arrange a visit.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${contact.tel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-base font-semibold text-[#10383a] transition hover:bg-[#efe5c8]"
              >
                <PhoneIcon />
                Call {contact.phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d6a74e] px-5 text-base font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
              >
                <MessageIcon />
                WhatsApp now
              </a>
              <a
                href={contact.googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <MapPinIcon />
                Directions
              </a>
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <StarIcon />
                Google reviews
              </a>
            </div>
          </div>

          <LeadForm whatsappNumber={contact.whatsapp} />
        </div>
      </section>
    </main>
  );
}

function HeroSection({ whatsappHref }: { whatsappHref: string }) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#102f33] text-white">
      <Image
        src="/images/gallery-home.jpg"
        alt="Modern residential property exterior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#061c1f]/58" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,28,31,0.96),rgba(6,28,31,0.74),rgba(6,28,31,0.28))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(6,28,31,0.96),rgba(6,28,31,0))]" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col px-5 md:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 py-5">
          <BrandLockup />

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex">
            <a className="transition hover:text-white" href="#listings">
              Listings
            </a>
            <a className="transition hover:text-white" href="#property-types">
              Services
            </a>
            <a className="transition hover:text-white" href="#areas">
              Areas
            </a>
            <a className="transition hover:text-white" href="#google-profile">
              Reviews
            </a>
            <a className="transition hover:text-white" href="#blog">
              Blog
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${contact.tel}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <PhoneIcon />
              Call now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d6a74e] px-4 text-sm font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
            >
              <MessageIcon />
              WhatsApp
            </a>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:py-12">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md bg-white/12 px-3 py-2 text-sm font-semibold text-[#f2d68c] ring-1 ring-white/15">
              Property guidance across Mohali and Tricity
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Find property options in Mohali with clear local guidance
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Vedang Properties helps buyers, sellers, and investors compare
              homes, plots, commercial spaces, and site-visit ready options
              across Aerocity, IT City, Kharar, Zirakpur, and New Chandigarh.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d6a74e] px-5 text-base font-semibold text-[#102f33] transition hover:bg-[#e0b862] focus:outline-none focus:ring-4 focus:ring-[#d6a74e]/25"
              >
                <MessageIcon />
                Get property shortlist
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/35 px-5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <CalendarIcon />
                Book site visit
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["Call", "direct phone support"],
                ["Mohali", "and Tricity focus"],
                ["4", "property categories"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-lg bg-white/10 p-4">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm leading-5 text-white/68">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:self-center">
            <LeadForm whatsappNumber={contact.whatsapp} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-[#b85f45]">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-[#10383a] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{copy}</p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function HomeIcon() {
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
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function PlotIcon() {
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
      <path d="M3 6 9 3l6 3 6-3v15l-6 3-6-3-6 3V6Z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </svg>
  );
}

function BuildingIcon() {
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
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h1" />
      <path d="M14 7h1" />
      <path d="M9 11h1" />
      <path d="M14 11h1" />
      <path d="M9 15h1" />
      <path d="M14 15h1" />
    </svg>
  );
}

function KeyIcon() {
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
      <circle cx="7.5" cy="14.5" r="4.5" />
      <path d="M11 11 21 1" />
      <path d="m16 6 2 2" />
      <path d="m19 3 2 2" />
    </svg>
  );
}
