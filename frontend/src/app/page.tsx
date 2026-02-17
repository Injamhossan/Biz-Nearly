import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CategorySection } from "@/components/home/CategorySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-5">
      <Navbar />
      <Hero />
      <CategorySection />
    </main>
  );
}
