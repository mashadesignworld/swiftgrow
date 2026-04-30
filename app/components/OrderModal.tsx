"use client";
import { useState, useEffect } from "react";
import { X, ShoppingBag, MapPin, User, Package, Tag } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bagSize, setBagSize] = useState<"10kg" | "20kg" | "50kg">("50kg");
  const [totalPrice, setTotalPrice] = useState(0);

  // UPDATE THESE WITH YOUR ACTUAL BOOMGRO PRICES
  const PRICES = {
    "10kg": 2000,
    "20kg": 4000,
    "50kg": 9000
  };

  useEffect(() => {
    setTotalPrice(PRICES[bagSize] * quantity);
  }, [bagSize, quantity]);

  if (!isOpen) return null;

  const handleSendOrder = () => {
    const phoneNumber = "254721595989"; 
    const message = `*NEW BOOMGRO ORDER*
--------------------------
*Customer:* ${name}
*Product:* BoomGro Organic
*Size:* ${bagSize}
*Quantity:* ${quantity} Bag(s)
*Location:* ${location}
*Est. Total:* KES ${totalPrice.toLocaleString()}
--------------------------
Please confirm delivery fee to my location.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#556002]/40 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-[40px] p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden">
        
        {/* Subtle Brand Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2e8b0]/30 rounded-full -mr-16 -mt-16 blur-2xl" />

        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-[#556002] transition-colors">
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#556002] p-3 rounded-2xl text-[#e2e8b0]">
            <ShoppingBag size={24} />
          </div>
          <h3 className="text-2xl font-black text-[#556002] tracking-tight">BoomGro Order</h3>
        </div>
        
        <div className="space-y-4">
          {/* User Details Group */}
          <div className="grid grid-cols-1 gap-3">
            <div className="relative">
              <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#e2e8b0] focus:bg-white outline-none transition-all text-slate-800"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#e2e8b0] focus:bg-white outline-none transition-all text-slate-800"
                placeholder="Delivery Location (e.g. Naivasha)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Bag Size Selector */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#556002]/60 mb-2 ml-1 text-center">Select Packaging</label>
            <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl border-2 border-slate-100">
              {(["10kg", "20kg", "50kg"] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setBagSize(size)}
                  className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
                    bagSize === size 
                    ? "bg-white text-[#556002] shadow-sm scale-[1.02]" 
                    : "text-slate-400 hover:text-slate-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Price Display */}
          <div className="flex gap-3 items-center">
            <div className="w-1/3">
                <input 
                    type="number" 
                    min="1"
                    className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#e2e8b0] focus:bg-white outline-none text-center font-bold text-[#556002]"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
            </div>
            <div className="w-2/3 bg-[#e2e8b0]/30 p-4 rounded-2xl flex items-center justify-between border-2 border-[#e2e8b0]/50">
                <Tag size={18} className="text-[#556002]" />
                <div className="text-right">
                    <p className="text-[10px] font-bold text-[#556002]/60 uppercase">Estimated Total</p>
                    <p className="text-lg font-black text-[#556002]">KES {totalPrice.toLocaleString()}</p>
                </div>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleSendOrder}
            disabled={!name || !location}
            className="w-full mt-2 bg-[#556002] text-[#e2e8b0] py-5 rounded-[24px] font-black uppercase tracking-widest text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#556002]/20 flex items-center justify-center gap-3 disabled:opacity-40"
          >
            <ShoppingBag size={20} />
            Confirm Order
          </button>
          
          <p className="text-[10px] text-center text-slate-400 leading-tight">
            *Final price may vary based on delivery distance from our depot.
          </p>
        </div>
      </div>
    </div>
  );
}