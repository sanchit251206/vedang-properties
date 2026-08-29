import { NextRequest, NextResponse } from "next/server";
import { listings } from "@/data/listings";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category")?.toLowerCase();
  const locality = searchParams.get("locality")?.toLowerCase();
  const status = searchParams.get("status")?.toLowerCase();
  const q = searchParams.get("q")?.toLowerCase();
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam, 10) : undefined;

  let filtered = [...listings];

  if (category) {
    filtered = filtered.filter((item) =>
      item.category.toLowerCase().includes(category)
    );
  }

  if (locality) {
    filtered = filtered.filter(
      (item) =>
        item.locality.toLowerCase().includes(locality) ||
        item.location.toLowerCase().includes(locality)
    );
  }

  if (status) {
    filtered = filtered.filter((item) =>
      item.status.toLowerCase().includes(status)
    );
  }

  if (q) {
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.locality.toLowerCase().includes(q)
    );
  }

  if (limit && !isNaN(limit) && limit > 0) {
    filtered = filtered.slice(0, limit);
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    listings: filtered,
  });
}
