"use client";
import { Recycle, Target, Globe, Sprout, Quote, Droplets, Leaf, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const sdgs = [
    { title: "Zero Hunger", desc: "Boosting farm yields to ensure food security for local communities.", icon: Target },
    { title: "Responsible Consumption", desc: "Turning agricultural by-products into valuable resources through a circular economy.", icon: Recycle },
    { title: "Climate Action", desc: "Promoting soil health that sequesters carbon and retains moisture.", icon: Globe },
    { title: "Life on Land", desc: "Restoring soil biodiversity and reducing dependence on synthetic chemicals.", icon: Sprout },
  ];

  const stats = [
    { label: "Farmers Empowered", value: "5,000+", icon: Sprout },
    { label: "Soil Restored", value: "10k+ Acres", icon: Leaf },
    { label: "Yield Increase", value: "35%", icon: Award },
    { label: "Water Saved", value: "20%", icon: Droplets },
  ];

  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      
      {/* 1. Hero: Philosophy */}
  
    {/* 1. Hero: Philosophy */}
      <section className="bg-[#556002] py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e2e8b0]/5 -skew-x-12 translate-x-20" />
        
        {/* MODIFIED: Changed 'grid' to a 'flex' container with a controlled max-width */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-start relative z-10 max-w-6xl">
          
          {/* Text Container: Locked width to prevent drifting */}
          <div className="w-full md:w-3/5 lg:w-[550px] shrink-0">
            <span className="text-[#e2e8b0] font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              About Our Philosophy
            </span>
            <h1 className="text-5xl md:text-8xl font-black mt-6 leading-[0.9] tracking-tighter">
              <span className="block">Feed the soil,</span>
              <span className="block">feed the</span>
              <span className="block text-[#e2e8b0]">world.</span>
            </h1>
            <p className="mt-8 text-lg text-white/80 leading-relaxed font-medium">
              At SwiftGrow Kenya, we aren't just manufacturing fertilizer, we are engineering the future of regenerative agriculture. We bridge the gap between industrial efficiency and organic sustainability.
            </p>
          </div>

          {/* Image Container: Pushed close with a fixed margin instead of a gap */}
          <div className="relative h-[400px] md:h-[500px] w-full md:ml-12 lg:ml-20 rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#e2e8b0]/20 flex-1">
            <Image 
              src="/tomatoes.jpg" 
              alt="BoomGro Results" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>

        </div>
      </section>

      {/* 2. Impact Stats: The "Authority" Section */}
      <section className="py-12 -mt-12 relative z-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center group hover:border-[#556002] transition-all">
              <stat.icon className="mx-auto mb-4 text-[#556002] group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-3xl font-black text-[#556002]">{stat.value}</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Mission & Vision: The "Legacy" Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <div className="inline-block px-4 py-1 rounded-full bg-[#556002]/10 text-[#556002] text-xs font-black uppercase tracking-widest mb-6">
                The Mission
              </div>
              <h3 className="text-4xl font-black text-[#556002] mb-6 tracking-tight">Regenerating the Heart of Kenya.</h3>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                &quot;To restore degraded soils and enhance agricultural productivity through sustainable, nutrient-rich organic solutions that respect the earth.&quot;
              </p>
            </div>
            <div className="relative h-[350px] rounded-[40px] overflow-hidden">
               <Image src="/soil.jpg" alt="Healthy Soil" fill className="object-cover" />
               <div className="absolute inset-0 bg-[#556002]/20 shadow-inner" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SDG Section: Global Standards */}
      <section className="py-24 bg-[#f9f7f4]">
        <div className="container mx-auto px-6 text-center max-w-3xl mb-20">
          <h3 className="text-4xl font-black text-[#556002] tracking-tight">Aligned with Global Standards</h3>
          <p className="mt-6 text-slate-600 text-lg">
            Our circular economy model turns agricultural by-products into gold, directly impacting the UN Sustainable Development Goals.
          </p>
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {sdgs.map((sdg, i) => (
            <div key={i} className="group p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-[#e2e8b0]/30 rounded-2xl flex items-center justify-center mb-6 text-[#556002] group-hover:bg-[#556002] group-hover:text-[#e2e8b0] transition-colors">
                <sdg.icon size={32} />
              </div>
              <h4 className="font-black text-[#556002] text-xl mb-3">{sdg.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{sdg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Closing Quote: The Emotional Hook */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-[#556002] rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <Quote className="text-[#e2e8b0] mx-auto mb-10 opacity-40" size={64} />
          <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto tracking-tighter">
            We are not just feeding plants; we are securing the future of Kenyan food systems through <span className="text-[#e2e8b0]">BoomGro innovation.</span>
          </h2>
          <div className="mt-12 w-24 h-2 bg-[#e2e8b0] mx-auto rounded-full" />
          
          {/* Decorative Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </div>
      </section>
    </main>
  );
}