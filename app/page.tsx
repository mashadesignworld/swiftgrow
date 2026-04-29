import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Features from "./components/Features";
import CalculatorTeaser from "./components/CalculatorTeaser";
import ExpertTips from "./components/ExpertTips";
import ResultsGallery from "./components/ResultsGallery";

export default function Home() {

  return (
    <main className="min-h-screen">
     
      <Hero />
      <Features />
      <BentoGrid />
<CalculatorTeaser />
<ResultsGallery />
<ExpertTips />
    </main>
  );
}