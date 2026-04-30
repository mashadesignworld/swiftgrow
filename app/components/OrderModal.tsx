"use client";
import { useState } from "react";
import { X, ShoppingBag, MapPin, User, Package } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bagSize, setBagSize] = useState<"10kg" | "20kg" | "50kg">("50kg");
  
  if (!isOpen) return null;

  const handleSendOrder = () => {
    const phoneNumber = "254721595989"; 
    // Professional WhatsApp Formatting using asterisks for bold
    const message = `*NEW BOOMGRO ORDER*
--------------------------
*Customer:* ${name}
*Product:* BoomGro Organic
*Size:* ${bagSize} Bags
*Quantity:* ${quantity}
*Location:* ${location}
--------------------------
Please confirm total price and delivery schedule.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Premium Blur Backdrop */}
      <div className="absolute inset-0 bg-[#556002]/40 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-[40px] p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300 overflow-hidden">
        
        {/* Subtle Brand Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2e8b0]/30 rounded-full -mr-16 -mt-16 blur-2xl" />

        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-[#556002] transition-colors">
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#556002] p-3 rounded-2xl text-[#e2e8b0]">
            <ShoppingBag size={24} />
          </div>
          <h3 className="text-2xl font-black text-[#556002] tracking-tight">Complete Your Order</h3>
        </div>
        
        <div className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#556002]/60 mb-2 ml-1">Your Name</label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#e2e8b0] focus:bg-white outline-none transition-all text-slate-800"
                placeholder="e.g. Mkulima John"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#556002]/60 mb-2 ml-1">Delivery Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#e2e8b0] focus:bg-white outline-none transition-all text-slate-800"
                placeholder="e.g. Mai Mahiu, Nakuru"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Bag Size Toggle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#556002]/60 mb-2 ml-1">Select Bag Size</label>
            <div className="flex gap-2 p-1 bg-slate-50 rounded-2xl border-2 border-slate-50">
              {["10kg", "20kg", "50kg"].map((size) => (
                <button
                  key={size}
                  onClick={() => setBagSize(size as any)}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                    bagSize === size 
                    ? "bg-white text-[#556002] shadow-sm" 
                    : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-[#556002]/60 mb-2 ml-1">Number of Bags</label>
            <div className="relative">
                <Package className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input 
                type="number" 
                min="1"
                className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#e2e8b0] focus:bg-white outline-none transition-all text-slate-800 font-bold"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                />
            </div>
          </div>

          <button 
            onClick={handleSendOrder}
            disabled={!name || !location}
            className="w-full mt-4 bg-[#556002] text-[#e2e8b0] py-5 rounded-[20px] font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#556002]/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
          >
            <ShoppingBag size={20} />
            Place Order Now
          </button>
          
          <p className="text-[10px] text-center text-slate-400 font-medium px-4">
            Clicking will open WhatsApp to finalize your delivery and payment details with our team.
          </p>
        </div>
      </div>
    </div>
  );
}