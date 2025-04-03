import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />
    </main>
  );
}
