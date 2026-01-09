import type { Metadata } from "next";
import { PortfolioPageContent } from "@/components/portfolio-page-content";

export const metadata: Metadata = {
  title: "Portfolio - Our Work & Case Studies",
  description:
    "Explore our portfolio of successful projects across wellness, community, gaming, and property management. See how we help startups launch and scale.",
  keywords: [
    "software portfolio",
    "case studies",
    "startup projects",
    "mobile apps",
    "web applications",
    "successful launches",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio - Our Work & Case Studies | Blunova",
    description:
      "Explore our portfolio of successful projects across wellness, community, gaming, and property management. See how we help startups launch and scale.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioPageContent />
    </div>
  );
}
