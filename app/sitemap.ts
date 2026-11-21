import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ethiopian-trend-discovery.vercel.app";
  return [{ url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 }];
}
