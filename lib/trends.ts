import { getSql } from "@/lib/db";

export type Trend = {
  id: string; slug: string; title: string; summary: string; category: string;
  lifecycle: string; language: string | null; region: string | null;
  featured: boolean; tiktok_url?: string | null;
};

export async function getPublishedTrends(): Promise<Trend[]> {
  const sql = getSql();
  if (!sql) return [];
  try {
    return await sql`SELECT t.id, t.slug, t.title, t.summary, t.category, t.lifecycle,
      t.language, t.region, t.featured, v.tiktok_url
      FROM trends t
      LEFT JOIN trend_videos v ON v.trend_id = t.id AND v.is_primary = true
      WHERE t.status = 'published'
        AND EXISTS (SELECT 1 FROM blueprints b WHERE b.trend_id = t.id AND b.published = true)
      ORDER BY t.featured DESC, t.last_verified DESC NULLS LAST
      LIMIT 30` as unknown as Trend[];
  } catch (error) {
    console.error("Could not load published trends", error);
    return [];
  }
}
