import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SecureWithQuan | Cybersecurity Consulting for Small Businesses",
  description:
    "Plain-English cybersecurity advisory for small businesses. Risk checkups, network and wireless reviews, staff training, and policy guidance. Flat-rate pricing, no long-term contracts. Book a free 30-minute consultation.",
  keywords: [
    "small business cybersecurity",
    "cybersecurity consultant",
    "cybersecurity risk assessment",
    "small business security",
    "phishing training",
    "wireless security",
    "cybersecurity policy",
  ],
  authors: [{ name: "SecureWithQuan LLC" }],
  creator: "SecureWithQuan LLC",
  metadataBase: new URL("https://securewithquan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SecureWithQuan | Cybersecurity Consulting for Small Businesses",
    description:
      "Plain-English cybersecurity advisory for small businesses. Flat-rate engagements, no long-term contracts. Book a free 30-minute consultation.",
    url: "https://securewithquan.com",
    siteName: "SecureWithQuan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureWithQuan | Cybersecurity Consulting for Small Businesses",
    description:
      "Plain-English cybersecurity advisory for small businesses. Book a free 30-minute consultation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-paper-50 text-ink-900">
        {children}
      </body>
    </html>
  );
}
