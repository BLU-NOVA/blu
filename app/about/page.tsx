import { AboutHeroSection } from "@/components/AboutHero";
import { CTASection } from "@/components/cta-section";
import { MissionSection } from "@/components/MissionSection";
import { ValuesSection } from "@/components/ValuesSection";

const About = () => {
  return (
    <div>
      <AboutHeroSection />
      <MissionSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
};

export default About;
