"use client";
import Image from "next/image";

export default function CalculatorTeaser() {
  return (
    <section className="bg-[#586116] py-10 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side: Hidden on mobile (hidden), shown on desktop (md:block) */}
          <div className="hidden md:flex justify-center relative">
            <div className="relative w-full max-w-sm aspect-square">
              <Image 
                src="/boomgropackagenew1.jpg" 
                alt="BoomGro Organic Fertilizer"
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Side: Aligned left for better readability on desktop */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Unsure how much BoomGro you need?
            </h3>
            <p className="text-emerald-200 mb-8 max-w-md text-lg">
              Take the guesswork out of your planting season. Our crop needs calculator provides an instant estimate for your specific farm size.
            </p>
            <a 
              href="/products#calculator" 
              className="inline-block bg-white text-[#586116] px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition shadow-lg"
            >
              Open Yield Calculator
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}