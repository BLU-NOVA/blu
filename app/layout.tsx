import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AIChatbot } from "@/components/ai-chatbot";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blunovatech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blunova - Build & Launch Your Product Faster",
    template: "%s | Blunova",
  },
  description:
    "We help founders build products and scale teams. Full-stack development, design, product expertise, and talent placement — all in one partnership. Launch your MVP in 8 weeks.",
  keywords: [
    "software development",
    "full-stack development",
    "MVP development",
    "startup development",
    "mobile app development",
    "web development",
    "AI development",
    "machine learning",
    "cloud services",
    "DevOps",
    "UI/UX design",
    "product management",
    "QA testing",
    "penetration testing",
    "security audits",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Python",
    "AWS",
    "talent placement",
    "staff augmentation",
    "Kenya",
    "Nairobi",
    "Africa",
  ],
  authors: [{ name: "Blunova", url: siteUrl }],
  creator: "Blunova",
  publisher: "Blunova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Blunova",
    title: "Blunova - Build & Launch Your Product Faster",
    description:
      "We help founders build products and scale teams. Full-stack development, design, product expertise, and talent placement — all in one partnership.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blunova - Build & Launch Your Product Faster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blunova - Build & Launch Your Product Faster",
    description:
      "We help founders build products and scale teams. Full-stack development, design, product expertise, and talent placement — all in one partnership.",
    images: ["/og-image.png"],
    creator: "@blunova",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Blunova",
    url: siteUrl,
    logo: `${siteUrl}/blu.png`,
    description:
      "We help founders build products and scale teams. Full-stack development, design, product expertise, and talent placement — all in one partnership.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254795512357",
        contactType: "sales",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+254740545704",
        contactType: "sales",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Software Development",
      "Mobile App Development",
      "Web Development",
      "AI & Machine Learning",
      "Cloud & DevOps",
      "UI/UX Design",
      "QA & Testing",
      "Security & Pentesting",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <AIChatbot />
        <Analytics />
      </body>
    </html>
  );
}
