import { NextRequest, NextResponse } from "next/server";
import { serviceGuides } from "@/data/services";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, { params }: RouteProps) {
  const { slug } = await params;
  const service = serviceGuides.find((item) => item.slug === slug);

  if (!service) {
    return NextResponse.json(
      { success: false, error: `Service guide with slug '${slug}' not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    service,
  });
}
