import { HeroSection } from "@/components/hero-section";
import { HowWeHelpSection } from "@/components/how-we-help-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <HowWeHelpSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <StatsSection />
        <CTASection />
      </main>
    </div>
  );
}
