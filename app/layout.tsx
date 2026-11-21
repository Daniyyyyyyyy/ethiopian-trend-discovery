import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Ethiopian Trend Discovery", description: "Discover Ethiopian TikTok trends and recreate them with practical creator blueprints." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
