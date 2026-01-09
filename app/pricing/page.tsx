import type { Metadata } from "next";
import { PricingCalculator } from "@/components/pricing-calculator";

export const metadata: Metadata = {
  title: "Pricing | Blunova",
  description: "Get an instant estimate for your software development project with our interactive pricing calculator.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PricingCalculator />
    </div>
  );
}