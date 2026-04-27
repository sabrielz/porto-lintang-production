import { HeroSection } from "@/components/home/HeroSection";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { TrioServices } from "@/components/home/TrioServices";
import { PortfolioGrid } from "@/components/home/PortfolioGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerMarquee />
      <TrioServices />
      <PortfolioGrid />
    </>
  );
}
