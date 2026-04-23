"use client";
import { motion } from "framer-motion";
import { Leaf, BarChart3, ShieldCheck } from "lucide-react";
import Image from "next/image";


export default function BentoGrid() {
  return (
    <section className="py-24 px-6 container mx-auto ">
        
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-emerald-900">Why Boomgro?</h2>
        <p className="text-slate-600 mt-2">Precision nutrition for every crop type.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {/* Large Featured Product Tile */}
        <motion.div 
  whileHover={{ scale: 1.01 }}
  className="md:col-span-2 md:row-span-2 relative rounded-3xl p-8 flex flex-col justify-end overflow-hidden border border-green-100"
>
  {/* The Background Image */}
  <Image 
    src="/product-banner.jpg" // Ensure this file exists in your public folder
    alt="Premium Bio-Organic Products"
    fill
    className="object-cover"
    priority
  />
  
  {/* Dark Gradient Overlay for Text Readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

  {/* Content (z-10 puts text on top of the image) */}
  <div className="relative z-10 text-white">
    <Leaf className="text-green-400 mb-4" size={40} />
    <h3 className="text-2xl font-bold">Premium Bio-Organic Blend</h3>
    <p className="mt-2 max-w-sm text-gray-200">
      The gold standard for maize and coffee farmers in Kenya. Increases soil microbial activity by 40%.
    </p>
  </div>
</motion.div>

        {/* Metric Tile */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm"
        >
          <BarChart3 className="text-emerald-600 mb-4" />
          <h4 className="text-lg font-bold">45% Higher Yield</h4>
          <p className="text-sm text-slate-500 mt-1">Verified results from 500+ trial farms across Rift Valley.</p>
        </motion.div>

        {/* Science Tile */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-emerald-900 text-white rounded-3xl p-6"
        >
          <ShieldCheck className="text-emerald-400 mb-4" />
          <h4 className="text-lg font-bold">Certified Organic</h4>
          <p className="text-sm text-emerald-200 mt-1">Free from synthetic chemicals. Safe for your land and family.</p>
        </motion.div>

        {/* Community Tile */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-3 bg-white rounded-3xl p-8 border border-slate-100 flex items-center justify-between"
        >
          <div>
            <h4 className="text-xl font-bold">Join 1,000+ Smart Farmers</h4>
            <p className="text-slate-500">Get weekly agronomy tips sent to your WhatsApp.</p>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}