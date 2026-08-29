import { NextResponse } from "next/server";
import { areaGuides } from "@/data/areas";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: areaGuides.length,
    areas: areaGuides.map((area) => ({
      slug: area.slug,
      title: area.title,
      shortTitle: area.shortTitle,
      copy: area.copy,
      intro: area.intro,
      localContext: area.localContext,
      mapQuery: area.mapQuery,
      mapUrl: area.mapUrl,
      comparePointsCount: area.comparePoints.length,
      buyerChecksCount: area.buyerChecks.length,
      faqsCount: area.faqs.length,
    })),
  });
}
