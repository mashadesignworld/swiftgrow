"use client";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import OrderModal from "../components/OrderModal";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
       <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl"
        >
         
          Restore Your Soil. Increase Your Harvest by Up to 30%.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-white/90 max-w-xl"
        >
          Premium organic fertilizer designed for Kenyan farms—improves soil health, boosts yields, and delivers visible results in just one season.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <div className="mt-10 flex flex-wrap gap-4">
  {/* Primary Action */}
  <button 
    onClick={() => setIsModalOpen(true)}
  className="group relative inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:bg-brand-600 hover:shadow-brand-500/40  border border-white/20">
    Order Now
    <ShoppingBag className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </button>


  
</div>
        </motion.div>
      </div>
    </section>
  );
}