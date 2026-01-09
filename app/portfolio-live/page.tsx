import type { Metadata } from "next";
import { PortfolioHero } from "@/components/portfolio-hero";
import { PortfolioShowcase } from "@/components/portfolio-showcase";
import { InteractiveDemo } from "@/components/interactive-demo";

export const metadata: Metadata = {
  title: "Portfolio | Blunova",
  description: "Explore our live projects and interactive demos. See our work in action.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHero />
      <PortfolioShowcase />
      <InteractiveDemo />
    </div>
  );
}