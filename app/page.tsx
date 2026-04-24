import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Features from "./components/Features";


export default function Home() {

  return (
    <main className="min-h-screen">
     
      <Hero />
      <Features />
      <BentoGrid />

    </main>
  );
}