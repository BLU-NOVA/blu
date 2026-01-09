import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { HowWeHelpSection } from "@/components/how-we-help-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { StatsSection } from "@/components/stats-section";
import { ClientTestimonials } from "@/components/client-testimonials";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Blunova - Build & Launch Your Product Faster | Software Development",
  description:
    "Launch your MVP in 8 weeks. Full-stack development, mobile apps, AI/ML, cloud infrastructure, and talent placement. 10+ products launched with 100% client satisfaction.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <HowWeHelpSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <ClientTestimonials />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  );
}
