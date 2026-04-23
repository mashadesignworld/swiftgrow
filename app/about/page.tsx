"use client";
import { Leaf, Droplets, TrendingUp, ShieldCheck, Scale, Recycle, Target, Globe, Sprout } from "lucide-react";
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
            <h2 className="text-emerald-200 font-semibold uppercase tracking-[0.25em] text-xs">Our Philosophy</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-[1.1] tracking-tighter">Feed the soil and it will feed you.</h1>
            <p className="mt-8 text-lg text-emerald-50/80 leading-relaxed max-w-lg">
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

      

    </main>
  );
}