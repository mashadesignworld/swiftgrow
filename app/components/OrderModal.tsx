"use client";
import { useState } from "react";
import { X, ShoppingBag, MapPin } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [location, setLocation] = useState(""); // New state
  
  if (!isOpen) return null;

  const handleSendOrder = () => {
    const phoneNumber = "254721595989"; 
    // Updated message template to include location
    const message = `*New Order Request*
Name: ${name}
Product: BoomGro
Quantity: ${quantity} unit(s)
Delivery Location: ${location}

Please confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-emerald-900 mb-6">Complete Your Order</h3>
        
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="e.g. Mkulima John"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                className="w-full pl-10 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none"
                placeholder="e.g. Mai Mahiu, Nakuru"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Quantity Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Quantity (Units)</label>
            <input 
              type="number" 
              min="1"
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>

          <button 
            onClick={handleSendOrder}
            className="w-full bg-[#586116] text-white py-4 rounded-xl font-bold hover:bg-[#4a5212] transition shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Send Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}