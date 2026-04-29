"use client";
import { Sprout, Droplets, Recycle, Target } from "lucide-react"; // Added Quote
import Image from "next/image";
import ProductAnalysis from "../components/ProductAnalysis";
import OrderModal from "../components/OrderModal";
import { useState } from "react";
import FertilizerCalculator from "../components/FertilizerCalculator";

export default function ProductPage() {
  const applicationRates = [
    { target: "Vegetable Gardens", rate: "1 – 1.5 kg", area: "10 m²" },
    { target: "Flower Beds", rate: "0.5 – 1 kg", area: "10 m²" },
    { target: "Commercial Farms", rate: "5 – 7.5 kg", area: "100 m²" },
  ];
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="container mx-auto px-6 max-w-5xl pb-24">
        
        {/* Product Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* The Visual Product Container */}
          <div className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-emerald-900/10 bg-emerald-900 flex items-center justify-center">
            
            {/* Noise Texture */}
            <div 
              className="absolute inset-0 opacity-10 bg-repeat -z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* The Product Image */}
            <Image 
              src="/boomgropackagenew1.jpg" 
              alt="BoomGro Organic Fertilizer"
              width={400} 
              height={400}
              className="object-contain p-10 w-full h-full" 
              priority
            />
          </div>
          <div>
            <h1 className="text-5xl font-extrabold text-emerald-900">BoomGro</h1>
            <p className="text-xl text-emerald-700 font-medium mt-2">The Black Gold Standard</p>
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              BoomGro is a nutrient-dense organic fertilizer rich in nitrogen, phosphorus, and potassium. 
              It boosts soil fertility, improves soil structure, enhances water-holding capacity, 
              and stimulates microbial activity while being more cost-effective than chemical options.
            </p>
            <div className="mt-8 flex gap-4">
              <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-500 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-600 transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
<div className="mb-20">
            <FertilizerCalculator />
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Sprout, title: "Nutrient Rich", desc: "Packed with NPK to promote vigorous plant growth." },
            { icon: Droplets, title: "Improves Soil", desc: "Enhances aeration and water retention for roots." },
            { icon: Recycle, title: "Eco-Friendly", desc: "100% organic, safe, and sustainable." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <item.icon className="text-brand-500 mb-4" size={32} />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        

        <ProductAnalysis/>
          
        {/* Application Table */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Target className="text-brand-500" />
            <h2 className="text-2xl font-bold text-emerald-900">Application Guide</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-4 text-slate-500 font-medium">Target</th>
                  <th className="py-4 text-slate-500 font-medium">Dosage</th>
                  <th className="py-4 text-slate-500 font-medium">Area</th>
                </tr>
              </thead>
              <tbody>
                {applicationRates.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 font-bold">{row.target}</td>
                    <td className="py-4 text-emerald-600 font-bold">{row.rate}</td>
                    <td className="py-4 text-slate-600">{row.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sizes */}
        <div className="text-center">
          <h3 className="font-bold text-emerald-900 mb-6">Available Packages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["5kg", "10kg", "25kg", "50kg"].map((size) => (
              <div key={size} className="border border-slate-200 px-6 py-3 rounded-full font-bold bg-white">
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Order Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium">Starting at</span>
            <span className="text-xl font-bold text-emerald-900">Kshs 2000</span>
          </div>
          <button 
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-brand-500 text-white py-3 rounded-xl font-bold hover:bg-brand-600 transition shadow-lg shadow-brand-500/20">
            Order Now
          </button>
        </div>
      </div>
    </main>
  );
}