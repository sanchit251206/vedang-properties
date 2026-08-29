import { NextRequest, NextResponse } from "next/server";
import { getListing } from "@/data/listings";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, { params }: RouteProps) {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    return NextResponse.json(
      { success: false, error: `Listing with slug '${slug}' not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    listing,
  });
}
