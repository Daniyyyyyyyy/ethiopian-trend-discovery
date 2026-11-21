import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ethiopian-trend-discovery.vercel.app/sitemap.xml",
  };
}
