"use client";
import { useState } from "react";
import { Calculator, Sprout, Package } from "lucide-react";

export default function FertilizerCalculator() {
  const [unitValue, setUnitValue] = useState<number>(0);
  const [unitType, setUnitType] = useState<"acre" | "ha">("acre");
  const [selectedBagSize, setSelectedBagSize] = useState<25 | 50>(50);

  // Constants for SwiftGrow
  const RATE_PER_ACRE = 500; 

  // --- CALCULATION LOGIC (Derived State) ---
  // This calculates fresh on every render without needing an Effect
  let bags = 0;
  if (unitValue > 0) {
    const multiplier = unitType === "acre" ? 1 : 2.47;
    const totalKgRequired = unitValue * multiplier * RATE_PER_ACRE;
    bags = Math.ceil(totalKgRequired / selectedBagSize);
  }
  // ------------------------------------------

  return (
    <div id="calculator" className="bg-[#556002]/5 rounded-[40px] p-8 md:p-12 border border-[#556002]/10 shadow-sm max-w-4xl mx-auto my-10">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-[#556002]/10 pb-6">
        <div className="p-3 bg-[#556002] rounded-2xl text-[#e2e8b0]">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#556002]">Boomgro Requirements</h3>
          <p className="text-sm text-slate-500">Calculate exactly how much organic power your land needs.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          {/* 1. Unit Selection */}
          <div>
            <label className="block text-sm font-bold text-[#556002] mb-3">1. Land Measurement</label>
            <div className="flex gap-2 p-1 bg-white rounded-2xl border border-[#556002]/10">
              {(["acre", "ha"] as const).map((type) => (
                <button 
                  key={type}
                  onClick={() => setUnitType(type)}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                    unitType === type 
                    ? "bg-[#556002] text-white shadow-md" 
                    : "text-[#556002] hover:bg-[#e2e8b0]/20"
                  }`}
                >
                  {type === "acre" ? "Acres" : "Hectares"}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Farm Size Input */}
          <div>
            <label className="block text-sm font-bold text-[#556002] mb-3">2. Enter Area Size</label>
            <input 
              type="number"
              min="0"
              step="0.1"
              className="w-full p-4 rounded-xl border border-[#556002]/20 outline-none focus:ring-2 focus:ring-[#556002] bg-white text-lg font-medium placeholder:text-slate-300"
              placeholder={unitType === "acre" ? "e.g. 2.5 Acres" : "e.g. 1.0 Ha"}
              onChange={(e) => setUnitValue(Number(e.target.value))}
            />
          </div>

          {/* 3. Bag Size Selection */}
          <div>
            <label className="block text-sm font-bold text-[#556002] mb-3">3. Preferred Packaging</label>
            <div className="grid grid-cols-2 gap-2"> {/* Changed to grid-cols-2 since you only have two sizes */}
              {[25, 50].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedBagSize(size as 25 | 50)}
                  className={`py-3 rounded-xl border-2 font-bold transition-all ${
                    selectedBagSize === size 
                    ? "bg-[#e2e8b0] border-[#556002] text-[#556002]" 
                    : "bg-white border-[#556002]/10 text-slate-400 hover:border-[#556002]/30"
                  }`}
                >
                  {size}kg
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="h-full">
          {bags > 0 ? (
            <div className="bg-white p-8 rounded-[35px] border border-[#e2e8b0] text-center shadow-xl h-full flex flex-col justify-center items-center animate-in fade-in zoom-in-95 duration-500">
              <div className="inline-flex p-4 bg-[#556002] rounded-3xl text-[#e2e8b0] mb-6 shadow-lg shadow-[#556002]/20">
                <Package size={40} />
              </div>
              <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em] mb-2">Recommendation</p>
              <h4 className="text-6xl font-black text-[#556002] mb-2 tracking-tight">
                {bags} <span className="text-2xl font-bold">Bags</span>
              </h4>
              <p className="text-lg text-[#556002] font-semibold opacity-90">
                of {selectedBagSize}kg Boomgro Organic
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-100 w-full">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  *Based on regenerative application rates for optimal soil health.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] border-2 border-dashed border-[#556002]/10 rounded-[35px] text-slate-300 bg-white/50">
              <Sprout size={48} className="mb-4 opacity-20" />
              <p className="font-medium italic">Ready to calculate your harvest needs</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}