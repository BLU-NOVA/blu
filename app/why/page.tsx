import type { Metadata } from "next";
import { WhyUsPageContent } from "@/components/why-us-page-content";

export const metadata: Metadata = {
  title: "Why Choose Us - Your Technology Partner",
  description:
    "Africa-born, world-class engineering partner. Senior talent, transparent delivery, observable practices. Launch your MVP in 8 weeks with 100% satisfaction guarantee.",
  keywords: [
    "why choose blunova",
    "software development partner",
    "senior developers",
    "transparent delivery",
    "MVP development",
    "startup partner",
  ],
  alternates: {
    canonical: "/why",
  },
  openGraph: {
    title: "Why Choose Blunova - Your Technology Partner",
    description:
      "Africa-born, world-class engineering partner. Senior talent, transparent delivery, observable practices. Launch your MVP in 8 weeks.",
  },
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <WhyUsPageContent />
    </div>
  );
}
