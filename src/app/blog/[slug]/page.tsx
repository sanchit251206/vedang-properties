import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapFacade } from "@/components/MapFacade";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Vedang Properties`,
      description: article.excerpt,
      images: [absoluteUrl(article.image)],
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

  const parsedDate = new Date(article.date);
  const isoDate = !Number.isNaN(parsedDate.getTime())
    ? parsedDate.toISOString()
    : undefined;

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    whatsappText,
  )}`;

  const articleUrl = absoluteUrl(`/blog/${article.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${articleUrl}#webpage`,
          url: articleUrl,
          name: article.title,
          description: article.excerpt,
        },
        headline: article.title,
        description: article.excerpt,
        image: absoluteUrl(article.image),
        datePublished: isoDate,
        dateModified: isoDate,
        author: {
          "@type": "Organization",
          name: "Vedang Properties",
          url: absoluteUrl("/"),
        },
        publisher: {
          "@type": "Organization",
          name: "Vedang Properties",
          url: absoluteUrl("/"),
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/images/vedang-logo-mark.png"),
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        keywords: article.tags.join(", "),
        articleSection: article.category,
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
            name: "Articles",
            item: absoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
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

        <section className="py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,760px)_320px] md:px-8">
            <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#edf3ef] px-2.5 py-1 text-xs font-semibold text-[#285846]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-9">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-bold text-[#10383a]">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 leading-8 text-slate-900 text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="mt-4 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b85f45]" />
                            <span className="leading-7 text-slate-900 text-base whitespace-pre-line">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.image ? (
                      <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <Image
                            src={section.image}
                            alt={section.imageAlt || section.heading}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 760px, 100vw"
                          />
                        </div>
                        {section.imageCaption ? (
                          <p className="border-t border-slate-200/80 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">
                            {section.imageCaption}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    {section.googleProfileCard ? (
                      <div className="mt-6 rounded-lg border-2 border-[#10383a]/15 bg-gradient-to-br from-[#fbf9f4] to-[#edf3ef] p-5 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10383a] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d6a74e]">
                              <StarIcon />
                              {section.googleProfileCard.badge ||
                                "Verified Google Profile"}
                            </span>
                            <span className="text-xs font-semibold text-emerald-800">
                              ● Open All 7 Days
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-slate-500">
                            Google Business Profile
                          </span>
                        </div>

                        <div className="mt-3">
                          <h3 className="text-xl font-bold text-[#10383a]">
                            {section.googleProfileCard.businessName}
                          </h3>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="flex text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="h-4 w-4 fill-current"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs font-bold text-slate-700">
                              {section.googleProfileCard.ratingText ||
                                "5.0 ★ Rating on Google"}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-600">
                            📍 {section.googleProfileCard.address}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2.5 border-t border-slate-200/70 pt-3">
                          <a
                            href={section.googleProfileCard.profileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-[#10383a] px-3.5 text-xs font-semibold text-white transition hover:bg-[#0c2b2d]"
                          >
                            <GoogleLogoIcon />
                            Google Business Profile
                          </a>
                          {section.googleProfileCard.directionsUrl ? (
                            <a
                              href={section.googleProfileCard.directionsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 text-xs font-semibold text-[#10383a] transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                            >
                              <MapPinIcon />
                              Get Directions
                            </a>
                          ) : null}
                          {section.googleProfileCard.reviewsUrl ? (
                            <a
                              href={section.googleProfileCard.reviewsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3.5 text-xs font-semibold text-[#10383a] transition hover:border-[#d6a74e] hover:bg-[#f7f3e8]"
                            >
                              <StarIcon />
                              Read Reviews
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    {section.links && section.links.length > 0 ? (
                      <div className="mt-6 rounded-lg border border-slate-200 bg-[#faf8f2] p-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#b85f45]">
                          {section.googleProfileCard
                            ? "Direct guides & verified links:"
                            : "Verified business profile & links:"}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {section.links.map((link) =>
                            link.isExternal ? (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer nofollow"
                                className="inline-flex items-center gap-1.5 rounded-md border border-[#10383a]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#10383a] transition hover:border-[#10383a] hover:bg-[#10383a] hover:text-white"
                              >
                                {link.variant === "google" ? (
                                  <GoogleLogoIcon />
                                ) : link.variant === "direction" ? (
                                  <MapPinIcon />
                                ) : (
                                  <ExternalLinkIcon />
                                )}
                                <span>{link.label}</span>
                              </a>
                            ) : (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="inline-flex items-center gap-1.5 rounded-md border border-[#10383a]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#10383a] transition hover:border-[#10383a] hover:bg-[#10383a] hover:text-white"
                              >
                                <span>{link.label}</span>
                                <ArrowForwardIcon />
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              {article.map ? (
                <section className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-[#f7f3e8]">
                  <MapFacade
                    title={article.map.title}
                    mapQuery={article.map.query}
                    mapUrl={article.map.href}
                    badgeText="Map Context"
                    aspectRatio="aspect-[16/10]"
                  />
                  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#b85f45]">
                        Map context
                      </p>
                      <h2 className="mt-1 text-xl font-bold text-[#10383a] md:text-2xl">
                        {article.map.title}
                      </h2>
                    </div>
                    <a
                      href={article.map.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-md border-2 border-[#10383a] px-5 text-sm font-bold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
                    >
                      View on Google Maps
                      <ArrowForwardIcon />
                    </a>
                  </div>
                </section>
              ) : null}
            </div>

            <aside className="h-fit rounded-lg border border-black/10 bg-white p-5 shadow-sm">
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

      <SiteFooter />
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

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GoogleLogoIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}
