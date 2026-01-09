import type { Metadata } from "next";
// import { motion } from "framer-motion";
// @ts-ignore
import { CareersPageContent } from "@/components/careers-page-content";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description:
    "Explore career opportunities at Blunova. Join our team of talented engineers, designers, and product experts building world-class software.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers - Join Our Team | Blunova",
    description:
      "Explore career opportunities at Blunova. Join our team of talented engineers, designers, and product experts.",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <CareersPageContent />
    </div>
  );
}
