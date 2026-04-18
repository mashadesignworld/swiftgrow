"use client";
import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        // Use a placeholder if you don't have the file yet
        src="https://xkrg4y2oq5saxfmh.public.blob.vercel-storage.com/hero-bg.mp4" 
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-3xl"
        >
          Engineering the <span className="text-brand-500">Future</span> of Kenyan Soil.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-white/90 max-w-xl"
        >
          High-yield organic fertilizer, backed by data. Transform your harvest today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <div className="mt-10 flex flex-wrap gap-4">
  {/* Primary Action */}
  <button className="group relative inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:bg-brand-600 hover:shadow-brand-500/40  border border-white/20">
    Shop Products
    <ShoppingBag className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </button>

  {/* Secondary Action */}
  <button className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 hover:border-white/40">
    View Impact
    <TrendingUp className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </button>
</div>
        </motion.div>
      </div>
    </section>
  );
}