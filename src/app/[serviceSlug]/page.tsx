import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { SiteHeader } from "@/components/SiteHeader";
import { serviceGuides } from "@/data/services";
import { contact } from "@/data/site";
import { absoluteUrl, coreSeoKeywords } from "@/data/seo";

type ServicePageProps = {
  params: Promise<{ serviceSlug: string }>;
};

export function generateStaticParams() {
  return serviceGuides.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = serviceGuides.find((item) => item.slug === serviceSlug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.title,
      "property consultants in Mohali",
      "property dealers in Mohali",
      "real estate consultant in Mohali",
      ...coreSeoKeywords,
    ],
    alternates: {
      canonical: `/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/${service.slug}`),
      images: [
        {
          url: absoluteUrl(service.image),
          width: 1200,
          height: 800,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = serviceGuides.find((item) => item.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    `Hello Vedang Properties, I want help with ${service.title}.`,
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(`/${service.slug}`)}#webpage`,
        url: absoluteUrl(`/${service.slug}`),
        name: service.metaTitle,
        description: service.metaDescription,
        isPartOf: { "@id": `${absoluteUrl("/")}#website` },
        primaryImageOfPage: absoluteUrl(service.image),
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl(`/${service.slug}`)}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url: absoluteUrl(`/${service.slug}`),
        provider: { "@id": `${absoluteUrl("/")}#localbusiness` },
        areaServed: [
          "Mohali",
          "Aerocity Mohali",
          "IT City Mohali",
          "Kharar",
          "Zirakpur",
          "New Chandigarh",
        ],
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
            name: service.title,
            item: absoluteUrl(`/${service.slug}`),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-[1fr_430px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#d6a74e]">
              {service.kicker}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              {service.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#d6a74e] px-5 font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
              >
                Discuss your requirement
              </a>
              <a
                href={`tel:${contact.tel}`}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 px-5 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Call {contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="lg:self-center">
            <LeadForm whatsappNumber={contact.whatsapp} compact />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
              Practical service guide
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
              A more informed next step before you visit or decide
            </h2>
            <div className="mt-9 grid gap-8">
              {service.sections.slice(0, 2).map((section) => (
                <article key={section.heading}>
                  <h3 className="text-2xl font-semibold text-[#10383a]">
                    {section.heading}
                  </h3>
                  <div className="mt-4 grid gap-4 leading-7 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-3 text-slate-600">
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3e8] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
            Detailed guidance
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
            Questions that make the service more useful
          </h2>
          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            {service.sections.slice(2).map((section) => (
              <article
                key={section.heading}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-[#10383a]">
                  {section.heading}
                </h3>
                <div className="mt-4 grid gap-4 leading-7 text-slate-600">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
              Before the next step
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Keep these checks in the conversation
            </h2>
            <ul className="mt-8 grid gap-4 text-lg leading-8 text-slate-600">
              {service.checks.map((check) => (
                <li key={check} className="flex gap-4">
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b85f45]" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-fit rounded-lg bg-[#10383a] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#d6a74e]">
              No public live inventory
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Share the exact requirement
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Tell us whether you want to buy, sell, rent, invest, or arrange a site visit. Include the location, property type, budget, and timeline so the first conversation has useful context.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#d6a74e] px-4 text-sm font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
            >
              WhatsApp Vedang Properties
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3ed] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#b85f45]">
            Continue exploring
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Related Mohali property guides
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-[#10383a]">Areas</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {service.relatedAreas.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-md border border-[#10383a]/20 bg-white px-4 py-2 text-sm font-semibold text-[#10383a] transition hover:border-[#10383a] hover:bg-[#10383a] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#10383a]">Services</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {service.relatedServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-md border border-[#10383a]/20 bg-white px-4 py-2 text-sm font-semibold text-[#10383a] transition hover:border-[#10383a] hover:bg-[#10383a] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
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
              Practical answers before you enquire
            </h2>
            <div className="mt-8 grid gap-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-[#10383a]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="h-fit rounded-lg bg-[#10383a] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#d6a74e]">
              Quick enquiry
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Get the conversation started
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Share your name, phone number, location, budget, and property type. Your details are sent to Vedang Properties on WhatsApp.
            </p>
            <div className="mt-5">
              <LeadForm whatsappNumber={contact.whatsapp} compact />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#102f33] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>Vedang Properties - {contact.addressShort}</p>
          <Link href="/" className="font-semibold text-[#d6a74e] hover:text-[#e0b862]">
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}

