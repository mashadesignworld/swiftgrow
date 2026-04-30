"use client";
import { Sprout, Droplets, Recycle, Target, ShieldCheck, Zap, Info } from "lucide-react";
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
    <main className="min-h-screen bg-[#fcfcf9] py-12">
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="container mx-auto px-6 max-w-6xl pb-24">
        
        {/* Product Hero */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* The Visual Product Container */}
          <div className="relative aspect-square w-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white bg-[#556002] flex items-center justify-center group">
            
            {/* Animated Noise Texture */}
            <div 
              className="absolute inset-0 opacity-20 bg-repeat z-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />

            {/* The Product Image */}
            <Image 
              src="/boomgropackagenew1.jpg" 
              alt="BoomGro Organic Fertilizer"
              width={500} 
              height={500}
              className="object-contain p-12 w-full h-full relative z-20 transition-transform duration-700 group-hover:scale-110" 
              priority
            />

            {/* Quality Badge */}
            <div className="absolute top-8 left-8 z-30 bg-[#e2e8b0] text-[#556002] px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg">
              Premium Organic
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#556002]" />
              <span className="text-[#556002] font-black uppercase tracking-[0.3em] text-xs">Flagship Product</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-[#556002] tracking-tighter leading-none mb-4">
              BoomGro
            </h1>
            <p className="text-2xl text-[#556002]/60 font-bold italic mb-8 italic tracking-tight">"The Black Gold Standard"</p>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-10 max-w-lg font-medium">
              BoomGro is a nutrient-dense organic fertilizer rich in nitrogen, phosphorus, and potassium. 
              It restores life to degraded land, enhances water retention, and accelerates microbial activity. 
              Engineering the future of Kenyan soil, one harvest at a time.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#556002] text-[#e2e8b0] px-10 py-5 rounded-[24px] font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#556002]/20"
              >
                Start Order
              </button>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest ml-2">
                <ShieldCheck size={18} className="text-[#556002]" />
                KEBS Certified
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Calculator Section */}
        <div className="mb-32">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl font-black text-[#556002] tracking-tight mb-2">Requirement Calculator</h2>
                <div className="h-1 w-20 bg-[#e2e8b0] rounded-full" />
            </div>
            <FertilizerCalculator />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Zap, title: "Nutrient Dense", desc: "Concentrated NPK blend that triggers rapid vegetative growth and root stability.", color: "bg-[#556002]" },
            { icon: Droplets, title: "Hydration Hub", desc: "Specifically engineered to retain moisture in semi-arid soils, reducing irrigation needs.", color: "bg-[#e2e8b0]" },
            { icon: Sprout, title: "Microbial Catalyst", desc: "Trillions of beneficial microbes work to restore natural soil biodiversity within 14 days.", color: "bg-white" },
          ].map((item, i) => (
            <div key={i} className={`p-10 rounded-[40px] shadow-sm border border-slate-100 transition-all hover:shadow-xl ${i === 1 ? 'bg-[#e2e8b0]/10 border-[#e2e8b0]' : 'bg-white'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${i === 0 ? 'bg-[#556002] text-[#e2e8b0]' : 'bg-white text-[#556002]'}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#556002] mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Breakdown */}
        <div className="mb-32 overflow-hidden rounded-[50px]">
             <ProductAnalysis/>
        </div>
          
        {/* Application Table */}
        <div className="bg-white rounded-[50px] p-10 md:p-16 border border-slate-100 shadow-2xl mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2e8b0]/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-[#556002] rounded-2xl text-[#e2e8b0]">
                    <Target size={24} />
                </div>
                <h2 className="text-3xl font-black text-[#556002] tracking-tight">Application Protocol</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <Info size={16} />
                Follow for best results
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-slate-50">
                  <th className="py-6 text-[#556002]/40 font-black uppercase tracking-widest text-[10px]">Crop / Target</th>
                  <th className="py-6 text-[#556002]/40 font-black uppercase tracking-widest text-[10px]">Dosage Rate</th>
                  <th className="py-6 text-[#556002]/40 font-black uppercase tracking-widest text-[10px]">Reference Area</th>
                </tr>
              </thead>
              <tbody>
                {applicationRates.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-8 font-black text-[#556002] text-xl">{row.target}</td>
                    <td className="py-8">
                        <span className="bg-[#e2e8b0] text-[#556002] px-4 py-2 rounded-xl font-black text-sm uppercase">
                            {row.rate}
                        </span>
                    </td>
                    <td className="py-8 text-slate-500 font-bold tracking-tight">{row.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sizes */}
        <div className="text-center py-20 bg-[#556002] rounded-[60px] text-white shadow-inner">
          <h3 className="font-black text-[#e2e8b0] mb-10 text-xs uppercase tracking-[0.4em]">Available Configurations</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["5kg", "10kg", "25kg", "50kg"].map((size) => (
              <div key={size} className="border-2 border-[#e2e8b0]/20 px-10 py-5 rounded-[24px] font-black text-xl hover:bg-[#e2e8b0] hover:text-[#556002] transition-all cursor-default hover:scale-110">
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Order Bar - Redesigned with Glassmorphism */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 bg-[#556002]/95 backdrop-blur-xl border border-white/10 p-5 rounded-[32px] shadow-2xl z-[100] animate-in slide-in-from-bottom-10 duration-500">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#e2e8b0] font-black uppercase tracking-widest opacity-60">Starting At</span>
            <span className="text-2xl font-black text-white tracking-tighter">KES 2,000</span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-[#e2e8b0] text-[#556002] py-4 rounded-[20px] font-black uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-transform"
          >
            Order Now
          </button>
        </div>
      </div>
    </main>
  );
}