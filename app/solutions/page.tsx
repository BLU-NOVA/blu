import type { Metadata } from "next";
import { SolutionsPageContent } from "@/components/solutions-page-content";

export const metadata: Metadata = {
  title: "Solutions - Full-Stack Development Services",
  description:
    "End-to-end software solutions: Backend, Frontend, Mobile, AI/ML, Cloud & DevOps, Data Analytics, UX/UI Design, Product Management, QA Testing, and Security Pentesting.",
  keywords: [
    "backend development",
    "frontend development",
    "mobile app development",
    "AI development",
    "machine learning",
    "cloud services",
    "DevOps",
    "data analytics",
    "UI/UX design",
    "product management",
    "QA testing",
    "penetration testing",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions - Full-Stack Development Services | Blunova",
    description:
      "End-to-end software solutions: Backend, Frontend, Mobile, AI/ML, Cloud & DevOps, Data Analytics, UX/UI Design, Product Management, QA Testing, and Security Pentesting.",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionsPageContent />
    </div>
  );
}
