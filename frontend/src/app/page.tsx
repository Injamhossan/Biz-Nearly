import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CtaSection } from "@/components/home/CtaSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-5">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedSection />
      <HowItWorksSection />
      <CtaSection />
      <AppDownloadSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
