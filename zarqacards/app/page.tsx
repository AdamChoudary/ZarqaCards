import HeroSection from "@/components/Hero";
import Ticker from "@/components/Ticker";
import StatsSection from "@/components/Stats";
import ServicesSection from "@/components/Services";
import ProcessSection from "@/components/Process";
import GallerySection from "@/components/Gallery";
import PricingSection from "@/components/Pricing";
import TestimonialsSection from "@/components/Testimonials";
import CTASection from "@/components/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
