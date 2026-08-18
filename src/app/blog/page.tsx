import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { articles, contact, officialSourceLinks } from "@/data/site";
import { coreSeoKeywords } from "@/data/seo";

export const metadata: Metadata = {
  title: "Mohali Property Guides and Real Estate Articles",
  description:
    "Practical Mohali property guides, buyer checklists, seller notes, and area comparisons from Vedang Properties, property consultants in Mohali.",
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    ...coreSeoKeywords,
    "Mohali property guide",
    "real estate articles Mohali",
    "buyer checklist Mohali property",
    "seller checklist Mohali property",
  ],
};

const whatsappText =
  "Hello Vedang Properties, I read your property articles and want guidance for Mohali.";

export default function BlogPage() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-slate-950">
      <SiteHeader variant="dark" />

      <section className="bg-[#10383a] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase text-[#d6a74e]">
            Articles and news
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Mohali property guides from local real estate consultants
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Buyer guides, seller preparation notes, area comparisons, and
            official-update references for people comparing property dealers,
            property consultants, and real estate options across Mohali and
            Tricity.
          </p>
        </div>
      </section>

      <section className="reveal py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_320px] md:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((article) => (
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
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase text-[#b85f45]">
                    <span>{article.category}</span>
                    <span className="text-slate-300">/</span>
                    <span>{article.date}</span>
                    <span className="text-slate-300">/</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-[#10383a]">
                    {article.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#edf3ef] px-2.5 py-1 text-xs font-medium text-[#285846]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

          <aside className="h-fit rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase text-[#b85f45]">
              Official references
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#10383a]">
              Check authority updates before acting
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Public notices, authority updates, auction terms, approval status,
              and document requirements can change. Check official portals before
              acting.
            </p>
            <div className="mt-5 grid gap-2">
              {officialSourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-[#10383a] transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  {source.label}
                </a>
              ))}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">
                Vedang on Google
              </p>
              <div className="mt-3 grid gap-2">
                <a
                  href={contact.googleDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-[#10383a] transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  <MapPinIcon />
                  Get directions
                </a>
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-[#10383a] transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                >
                  <StarIcon />
                  Read Google reviews
                </a>
              </div>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#10383a] px-4 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
            >
              Discuss requirement
              <MessageIcon />
            </a>
          </aside>
        </div>
      </section>
    </main>
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </svg>
  );
}
