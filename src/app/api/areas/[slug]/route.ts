import { NextRequest, NextResponse } from "next/server";
import { areaGuides } from "@/data/areas";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, { params }: RouteProps) {
  const { slug } = await params;
  const area = areaGuides.find((item) => item.slug === slug);

  if (!area) {
    return NextResponse.json(
      { success: false, error: `Area guide with slug '${slug}' not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    area,
  });
}
