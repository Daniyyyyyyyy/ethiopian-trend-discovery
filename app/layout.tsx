import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://ethiopian-trend-discovery.vercel.app"),
  title: { default: "Ethiopian Trends — Discover Your Next Audience", template: "%s | Ethiopian Trends" },
  description: "Discover Ethiopian TikTok trends, sounds and creative formats. Understand the context, explore creator stories and recreate trends in your own style.",
  openGraph: { title: "Ethiopian Trends — Discover Your Next Audience", description: "Your next audience might be somewhere you haven’t looked yet. Explore the trends and creative moments moving across Ethiopia.", type: "website", siteName: "Ethiopian Trends" },
  twitter: { card: "summary_large_image", title: "Ethiopian Trends — Discover Your Next Audience", description: "Explore Ethiopian TikTok trends and make them your own." },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
