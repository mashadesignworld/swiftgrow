"use client";
import { Leaf, Droplets, TrendingUp, ShieldCheck, Scale, Recycle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const benefits = [
    { icon: Leaf, title: "High Nutrient Concentration", desc: "Rich in NPK, calcium, magnesium, and essential micronutrients for total plant health." },
    { icon: Droplets, title: "Soil Structure", desc: "Increases organic matter, aeration, and water retention. Perfect for sandy soils." },
    { icon: TrendingUp, title: "Increased Yield", desc: "Proven high productivity of over 90% compared to standard controls." },
    { icon: Scale, title: "Slow-Release", desc: "Consistent, sustainable nutrient delivery without the leaching of chemicals." },
    { icon: ShieldCheck, title: "pH Regulation", desc: "Neutralizes soil acidity and alkalinity for optimal nutrient uptake." },
    { icon: Recycle, title: "Eco-Friendly", desc: "A circular economy approach that lowers reliance on harmful synthetic fertilizers." },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section with Image */}
      <section className="bg-emerald-900 py-24 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Our Philosophy</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">Feed the soil and it will feed you.</h1>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Add your product/farm image to public/hero-image.jpg */}
            <Image 
              src="/hero-image.jpg" 
              alt="SwiftGro Organic Fertilizer" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Overview Section (The omitted part) */}
      <section className="container mx-auto px-6 py-20 max-w-4xl text-center">
        <h3 className="text-3xl font-bold text-emerald-900 mb-6">SwiftGro: High-Quality Pelletized Organic Fertilizer</h3>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Swiftgro is a nutrient-dense organic fertilizer rich in nitrogen, phosphorus, and potassium. 
          It boosts soil fertility, improves soil structure, enhances water-holding capacity, and 
          stimulates microbial activity while being more cost-effective than chemical fertilizers.
        </p>
        
        <p className="text-lg text-slate-600 leading-relaxed">
          At Swift Grow Kenya, we take the utmost pride in providing the highest quality organic 
          pelletized fertilizer derived from poultry by-product without the hassle, expense, 
          and risks associated with handling cumbersome raw manure.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold text-emerald-900 text-center mb-12">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <item.icon className="text-brand-500 mb-6" size={32} />
              <h4 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}