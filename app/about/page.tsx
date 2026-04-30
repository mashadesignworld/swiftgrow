"use client";
import {  Recycle, Target, Globe, Sprout, Quote } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const sdgs = [
    { title: "Zero Hunger", desc: "Boosting farm yields to ensure food security for local communities.", icon: Target },
    { title: "Responsible Consumption", desc: "Turning agricultural by-products into valuable resources through a circular economy.", icon: Recycle },
    { title: "Climate Action", desc: "Promoting soil health that sequesters carbon and retains moisture.", icon: Globe },
    { title: "Life on Land", desc: "Restoring soil biodiversity and reducing dependence on synthetic chemicals.", icon: Sprout },
  ];
  

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Hero: Philosophy (Keep as is, it's strong) */}
      <section className="bg-[#586116] py-24 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#e2e8b0]  text-4xl font-semibold uppercase tracking-[0.25em] text-xs">Our Philosophy</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-[1.1] tracking-tighter">Feed the soil and it will feed you.</h1>
            <p className="mt-8 text-lg text-[#e2e8b0] leading-relaxed max-w-lg">
              At Swift Grow Kenya, we aren&apos;t just selling fertilizer; we are engineering the future of regenerative agriculture. We bridge the gap between industrial efficiency and organic sustainability.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/tomatoes.jpg" alt="SwiftGro Organic Fertilizer" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-[#f9f7f4] rounded-3xl border border-emerald-900/5">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To regenerate degraded soils and enhance agricultural productivity  through sustainable, nutrient-rich
organic solutions.
            </p>
          </div>
          <div className="p-10 bg-[#586116] rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-emerald-50/90 leading-relaxed">
              To lead the transition towards regenerative agriculture, fostering a healthy planet and sustainable food systems.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SDG Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-emerald-900">Sustainable Development Goals</h3>
          <p className="mt-4 text-slate-600">Our operations are deeply aligned with global standards for a sustainable, food-secure future.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {sdgs.map((sdg, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <sdg.icon className="text-[#586116] mb-4" size={28} />
              <h4 className="font-bold text-emerald-900 mb-2">{sdg.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{sdg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement Callout */}
      <div className="max-w-6xl mx-auto px-6">
        <section className="bg-[#556002] rounded-[40px] p-10 md:p-16 text-white text-center mb-20 shadow-2xl relative overflow-hidden border border-white/5">
    {/* Quote Icon in Golden Harvest */}
    <Quote className="text-[#e2e8b0] mx-auto mb-6 opacity-90" size={48} />
    
    {/* Vision Text */}
    <p className="text-2xl md:text-3xl font-medium leading-relaxed italic max-w-3xl mx-auto text-white">
        &quot;To lead the transition towards regenerative agriculture, fostering a healthy planet and sustainable food systems.&quot;
    </p>
    
    {/* Divider in Golden Harvest */}
    <div className="mt-8 w-24 h-1 bg-[#e2e8b0] mx-auto rounded-full opacity-80" />

    {/* Subtle decorative background glow (Optional - adds depth) */}
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#e2e8b0] opacity-5 rounded-full blur-3xl"></div>
</section>
</div>
    </main>
  );
}