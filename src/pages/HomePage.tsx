import DomainCardsSection from "@/sections/DomainCardsSection";
import EcosystemMatrixSection from "@/sections/EcosystemMatrixSection";
import FinalCtaSection from "@/sections/FinalCtaSection";
import HeroSection from "@/sections/HeroSection";
import ManifestoSection from "@/sections/ManifestoSection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { scrollToSelector } from "@/lib/scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const t = window.setTimeout(() => scrollToSelector(hash), 0);
      return () => window.clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <ScrollReveal variant="upGlow" visibleClassName="wuyin-reveal-tech-visible" className="wuyin-reveal-tech">
        <HeroSection />
      </ScrollReveal>
      <ManifestoSection />
      <DomainCardsSection />
      <EcosystemMatrixSection />
      <ScrollReveal
        variant="upSoft"
        delayMs={120}
        visibleClassName="wuyin-reveal-tech-visible"
        className="wuyin-reveal-tech"
      >
        <FinalCtaSection />
      </ScrollReveal>
    </>
  );
}
