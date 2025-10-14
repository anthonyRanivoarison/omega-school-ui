import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/hero-section";
import { DeviseSection } from "../components/DeviseSection";
import { FaqSection } from "../components/FaqSection";
import { CallToActionSection } from "@/components/CtaSection";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="min-h-screen text-[#0F172A] bg-[#F8FAFC] flex flex-col">
      <HeroSection />
      <DeviseSection />
      <AboutSection />
      <Separator />
      <FaqSection />
      <CallToActionSection />
    </div>
  );
}
