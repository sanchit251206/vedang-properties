import type { MetadataRoute } from "next";
import { areaGuides } from "@/data/areas";
import { listings } from "@/data/listings";
import { serviceGuides } from "@/data/services";
import { articles } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

// lastModified is only set where a real date is known (articles). Setting every
// URL to "now" on each build tells crawlers everything changed, which weakens
// the signal. Omitting it is valid and honest.
const articleDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/faqs"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/listings"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: articleDate(articles[0]?.date ?? ""),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/terms"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/disclaimer"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...listings.map((listing) => ({
      url: absoluteUrl(`/listings/${listing.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...areaGuides.map((area) => ({
      url: absoluteUrl(`/areas/${area.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceGuides.map((service) => ({
      url: absoluteUrl(`/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: articleDate(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
