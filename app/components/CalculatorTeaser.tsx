"use client";

export default function CalculatorTeaser() {
  return (
    <section className="bg-[#586116] py-16 text-white text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Unsure how much BoomGro you need?</h3>
        <p className="text-emerald-200 mb-8 max-w-lg mx-auto">
          Take the guesswork out of your planting season. Our crop needs calculator provides an instant estimate for your specific farm size.
        </p>
        <a 
          href="/products#calculator" 
          className="inline-block bg-white text-[#586116] px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition"
        >
          Open Yield Calculator
        </a>
      </div>
    </section>
  );
}