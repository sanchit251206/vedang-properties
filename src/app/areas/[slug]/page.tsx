import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { MapFacade } from "@/components/MapFacade";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { areaGuides } from "@/data/areas";
import { contact } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areaGuides.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areaGuides.find((item) => item.slug === slug);

  if (!area) {
    return {};
  }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      area.title,
      `${area.shortTitle} property consultant`,
      `${area.shortTitle} property dealer`,
      `${area.shortTitle} real estate consultant`,
      "property consultants in Mohali",
    ],
    alternates: {
      canonical: `/areas/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: absoluteUrl(`/areas/${area.slug}`),
      images: [
        {
          url: absoluteUrl(area.image),
          width: 1400,
          height: 933,
          alt: area.imageAlt,
        },
      ],
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areaGuides.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Hello Vedang Properties, I want guidance about property in ${area.shortTitle}.`,
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(`/areas/${area.slug}`)}#webpage`,
        url: absoluteUrl(`/areas/${area.slug}`),
        name: area.metaTitle,
        description: area.metaDescription,
        isPartOf: { "@id": `${absoluteUrl("/")}#website` },
        about: { "@type": "Place", name: area.shortTitle },
        primaryImageOfPage: absoluteUrl(area.image),
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
            name: "Areas",
            item: absoluteUrl("/#areas"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.shortTitle,
            item: absoluteUrl(`/areas/${area.slug}`),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: area.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#102f33]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader variant="teal" />

      <section className="bg-[#10383a] pb-14 text-white md:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#d6a74e]">
              Mohali area guide
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {area.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              {area.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#d6a74e] px-5 font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
              >
                Discuss {area.shortTitle}
              </a>
              <a
                href={area.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-5 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View on Google Maps
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-white/10">
            <Image
              src={area.image}
              alt={area.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef3ed] py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
              Official references
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Verify planning, project, and approval details before acting
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Locality information can change and individual properties have their own documents. Use these official references for planning context and project checks, then obtain professional advice for a specific transaction.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {area.sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center rounded-md border border-[#10383a]/20 bg-white px-4 py-2 text-sm font-semibold text-[#10383a] transition hover:border-[#10383a] hover:bg-[#10383a] hover:text-white"
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
              Compare the location properly
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What to understand before a property visit
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {area.localContext}
            </p>

            <div className="mt-9 grid gap-4">
              {area.comparePoints.map((point) => (
                <article
                  key={point.heading}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#10383a]">
                    {point.heading}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{point.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
              Buyer checklist
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#10383a]">
              Questions worth asking
            </h2>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-slate-600">
              {area.buyerChecks.map((check) => (
                <li key={check} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b85f45]" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#10383a] px-4 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
            >
              Share my requirement
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7f3e8] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
            Detailed area notes
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
            How to compare {area.shortTitle} property with more clarity
          </h2>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {area.detailSections.map((section) => (
              <article
                key={section.heading}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#10383a]">
                  {section.heading}
                </h3>
                <div className="mt-4 grid gap-4 text-sm leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b85f45]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
                Location map
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Open {area.shortTitle} in Google Maps
              </h2>
            </div>
            <a
              href={area.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#10383a] px-4 text-sm font-semibold text-[#10383a] transition hover:bg-[#10383a] hover:text-white"
            >
              Open full map
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
            <MapFacade
              title={`${area.shortTitle} Map`}
              mapQuery={area.mapQuery}
              mapUrl={area.mapUrl}
              mapImage={area.mapImage}
              badgeText="Locality Map"
              aspectRatio="aspect-[16/7]"
            />
            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-600">
                Map area: {area.mapQuery}. Confirm the exact property address before travelling.
              </p>
              <a
                href={contact.googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#10383a] px-4 text-sm font-semibold text-white transition hover:bg-[#0c2b2d]"
              >
                Directions to Vedang Properties
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
              Frequently asked questions
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Practical answers for {area.shortTitle}
            </h2>
            <div className="mt-8 grid gap-4">
              {area.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-[#10383a] marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="h-fit rounded-lg bg-[#10383a] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#d6a74e]">
              Local property guidance
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Need help comparing options?
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Share your property type, budget, preferred location, and purpose. The first conversation can focus on fit before you spend time on visits.
            </p>
            <LeadForm whatsappNumber={contact.whatsapp} compact />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
