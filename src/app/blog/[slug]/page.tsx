import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandLockup } from "@/components/BrandLockup";
import { articles, contact } from "@/data/site";
import { absoluteUrl, coreSeoKeywords } from "@/data/seo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const whatsappText =
  "Hello Vedang Properties, I read your article and want property guidance in Mohali.";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    keywords: [
      ...coreSeoKeywords,
      ...article.tags,
      article.title,
      "Mohali real estate guide",
    ],
    openGraph: {
      title: `${article.title} | Vedang Properties`,
      description: article.excerpt,
      type: "article",
      url: `/blog/${article.slug}`,
      images: [
        {
          url: absoluteUrl(article.image),
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-slate-950">
      <header className="bg-[#102f33] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8">
          <BrandLockup />

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <HomeIcon />
              Home
            </Link>
            <a
              href={`tel:${contact.tel}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <PhoneIcon />
              Call {contact.phoneDisplay}
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
        </div>
      </header>

      <article>
        <section className="bg-[#10383a] py-14 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_420px] md:px-8">
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f2d68c] transition hover:text-white"
              >
                <ArrowBackIcon />
                Back to articles
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase text-[#d6a74e]">
                <span>{article.category}</span>
                <span className="text-white/30">/</span>
                <span>{article.date}</span>
                <span className="text-white/30">/</span>
                <span>{article.readTime}</span>
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                {article.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {article.excerpt}
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="reveal py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,760px)_320px] md:px-8">
            <div className="reveal rounded-lg border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#edf3ef] px-2.5 py-1 text-xs font-medium text-[#285846]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-9">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-semibold text-[#10383a]">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 leading-8 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="mt-4 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b85f45]" />
                            <span className="leading-7 text-slate-700">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              {article.map ? (
                <section className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-[#f7f3e8]">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <iframe
                      title={article.map.title}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        article.map.query,
                      )}&output=embed`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase text-[#b85f45]">
                        Map context
                      </p>
                      <h2 className="mt-1 text-2xl font-semibold text-[#10383a]">
                        {article.map.title}
                      </h2>
                    </div>
                    <a
                      href={article.map.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#10383a] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
                    >
                      View on Google Maps
                      <ArrowForwardIcon />
                    </a>
                  </div>
                </section>
              ) : null}
            </div>

            <aside className="reveal h-fit rounded-lg border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase text-[#b85f45]">
                Careful guidance
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#10383a]">
                Need help applying this to a real property?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share your location, budget, and property type. We can help
                shortlist options and tell you what to verify before a visit.
              </p>

              {article.sources ? (
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Official references
                  </p>
                  <div className="mt-3 grid gap-2">
                    {article.sources.map((source) => (
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
                </div>
              ) : null}

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
                WhatsApp Vedang Properties
                <MessageIcon />
              </a>
              <a
                href={`tel:${contact.tel}`}
                className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[#10383a] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
              >
                Call {contact.phoneDisplay}
                <PhoneIcon />
              </a>
            </aside>
          </div>
        </section>
      </article>
    </main>
  );
}

function ArrowBackIcon() {
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
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function HomeIcon() {
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
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
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

function ArrowForwardIcon() {
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

function PhoneIcon() {
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
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}
