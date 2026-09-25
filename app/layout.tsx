import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr AI Studio — AI Content Production",
  description: "AI-powered content production for brands, creators and businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}