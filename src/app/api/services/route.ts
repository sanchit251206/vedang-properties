import { NextResponse } from "next/server";
import { serviceGuides } from "@/data/services";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: serviceGuides.length,
    services: serviceGuides.map((service) => ({
      slug: service.slug,
      title: service.title,
      kicker: service.kicker,
      intro: service.intro,
      checks: service.checks,
      faqsCount: service.faqs.length,
      relatedAreas: service.relatedAreas,
      relatedServices: service.relatedServices,
    })),
  });
}
