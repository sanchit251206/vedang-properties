import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/data/site";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category")?.toLowerCase();
  const tag = searchParams.get("tag")?.toLowerCase();
  const q = searchParams.get("q")?.toLowerCase();

  let filtered = [...articles];

  if (category) {
    filtered = filtered.filter((item) =>
      item.category.toLowerCase().includes(category)
    );
  }

  if (tag) {
    filtered = filtered.filter((item) =>
      item.tags.some((t) => t.toLowerCase().includes(tag))
    );
  }

  if (q) {
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    articles: filtered.map((item) => ({
      slug: item.slug,
      category: item.category,
      title: item.title,
      excerpt: item.excerpt,
      date: item.date,
      readTime: item.readTime,
      image: item.image,
      tags: item.tags,
      sectionsCount: item.sections.length,
    })),
  });
}
