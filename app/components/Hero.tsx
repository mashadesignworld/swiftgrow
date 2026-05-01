"use client";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import OrderModal from "../components/OrderModal";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

<div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="BoomGro Organic Fertilizer Hero"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Restore Your Soil. Increase Your Harvest by Up to 30%.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-[#e2e8b0]"
          >
            Boomgro is a premium organic fertilizer designed for Kenyan farms—improves soil health, boosts yields, and delivers visible results in just one season.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col items-start gap-4"
          >
            {/* Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:bg-[#e2e8b0] hover:shadow-brand-500/40  hover:text-[#556002] border border-white/20"
            >
              Order Now
              <ShoppingBag className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Trust Line */}
            <p className="text-sm text-white/80">
              Built for Kenyan soils <span className="mx-2">•</span>
              Suitable for maize, vegetables & horticulture crops
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE - PRODUCT IMAGE (HIDDEN ON MOBILE) */}
        <div className="hidden md:flex justify-end items-center w-full max-w-md">
          <motion.img
            src="/heroboomgro1.png"
            alt="Boomgro Organic Fertilizer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}