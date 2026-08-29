import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/data/site";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, { params }: RouteProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return NextResponse.json(
      { success: false, error: `Article with slug '${slug}' not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    article,
  });
}
