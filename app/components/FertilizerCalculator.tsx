"use client";
import { useState } from "react";
import { Calculator, Sprout } from "lucide-react";

export default function FertilizerCalculator() {
  const [area, setArea] = useState<number>(0);
  const [bags, setBags] = useState<number>(0);

  const calculateFertilizer = (sqMeters: number) => {
    // Assuming a rate of 0.15kg per m2 (adjust as needed for BoomGro)
    const ratePerSqMeter = 0.15; 
    const totalKg = sqMeters * ratePerSqMeter;
    setBags(Math.ceil(totalKg / 10)); // Assuming 10kg bags
    setArea(sqMeters);
  };

  return (
    <div id="calculator"
    className="bg-emerald-50 rounded-[40px] p-8 md:p-12 border border-emerald-100 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-emerald-900 rounded-2xl text-white">
          <Calculator size={24} />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900">Crop Needs Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <label className="block text-sm font-bold text-emerald-900 mb-2">Enter Farm Size (m²)</label>
          <input 
            type="number"
            className="w-full p-4 rounded-xl border border-emerald-200 outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g. 100"
            onChange={(e) => calculateFertilizer(Number(e.target.value))}
          />
          <p className="text-xs text-slate-500 mt-2">Get an instant recommendation for your crop size.</p>
        </div>

        {bags > 0 ? (
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm">
            <p className="text-sm text-emerald-700 font-medium">Estimated Requirement:</p>
            <h4 className="text-4xl font-extrabold text-emerald-900 mt-2">{bags} Bags</h4>
            <p className="text-xs text-emerald-600 mt-1">of 10kg BoomGro</p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400 italic">
            Enter area to see results
          </div>
        )}
      </div>
    </div>
  );
}