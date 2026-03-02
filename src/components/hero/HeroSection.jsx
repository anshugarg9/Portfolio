import { Suspense, lazy, useRef } from "react";
import HeroContent from "./HeroContent.jsx";
import LoadingScreen from "../ui/LoadingScreen.jsx";
import useScrollProgress from "../../hooks/useScrollProgress.js";

const HeroCanvas = lazy(() => import("./HeroCanvas.jsx"));

export default function HeroSection() {
  const heroRef = useRef(null);
  const scrollProgress = useScrollProgress(heroRef);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a2e,transparent_65%)]" />
      <Suspense fallback={<LoadingScreen />}>
        <HeroCanvas scrollProgress={scrollProgress} />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      <HeroContent />
    </section>
  );
}
