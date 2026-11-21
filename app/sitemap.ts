import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ethiopian-trend-discovery-tongdahotel-4700.vercel.app";
  return [{ url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 }];
}
