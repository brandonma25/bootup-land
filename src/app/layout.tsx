import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boot Up | Daily Intelligence for Operators",
  description:
    "Boot Up turns global developments into concise daily signal cards: what happened, why it matters, what led to this, and what it connects to.",
  keywords: [
    "Boot Up",
    "daily intelligence",
    "signal cards",
    "market intelligence",
    "operator briefing",
  ],
  openGraph: {
    title: "Boot Up | Daily Intelligence for Operators",
    description:
      "Sharper daily context for founders, product leaders, investors, and ambitious professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
