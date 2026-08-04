import type { MetadataRoute } from "next";
import { areaGuides } from "@/data/areas";
import { listings } from "@/data/listings";
import { serviceGuides } from "@/data/services";
import { articles } from "@/data/site";
import { absoluteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/listings"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...listings.map((listing) => ({
      url: absoluteUrl(`/listings/${listing.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...areaGuides.map((area) => ({
      url: absoluteUrl(`/areas/${area.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceGuides.map((service) => ({
      url: absoluteUrl(`/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
