import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/AboutHero";
import { CTASection } from "@/components/cta-section";
import { MissionSection } from "@/components/MissionSection";
import { ValuesSection } from "@/components/ValuesSection";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Values",
  description:
    "Blunova builds technology that turns ideas into durable products and positive impact. Learn about our mission, values, and the team behind your next product.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Blunova - Our Mission & Values",
    description:
      "Blunova builds technology that turns ideas into durable products and positive impact. Learn about our mission, values, and the team behind your next product.",
  },
};

export default function About() {
  return (
    <div>
      <AboutHeroSection />
      <MissionSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
}
