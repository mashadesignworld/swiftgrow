import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
    </main>
  );
}