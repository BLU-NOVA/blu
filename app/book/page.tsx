import type { Metadata } from "next";
import { BookingSection } from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Book a Discovery Call - Start Your Project",
  description:
    "Schedule a free 30-minute discovery call with Blunova. Get a project scope, timeline estimate, and custom proposal within 48 hours. No commitment required.",
  keywords: [
    "book consultation",
    "free discovery call",
    "software consultation",
    "project estimate",
    "hire developers",
  ],
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Discovery Call - Start Your Project | Blunova",
    description:
      "Schedule a free 30-minute discovery call. Get a project scope, timeline estimate, and custom proposal within 48 hours. No commitment required.",
  },
};

export default function BookDiscovery() {
  return <BookingSection />;
}
