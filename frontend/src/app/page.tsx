import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-5">
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedSection />
      <HowItWorksSection />
    </main>
  );
}
