"use client";
import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [inquiry, setInquiry] = useState("");
  
  if (!isOpen) return null;

  const handleSendMessage = () => {
    const phoneNumber = "254721595989"; 
    const message = inquiry 
      ? `Hello! I have a question about BoomGro: ${inquiry}` 
      : "Hello! I'm interested in BoomGro fertilizer for my farm.";
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    onClose();
    setInquiry(""); 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#556002]/40 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-md bg-white rounded-[40px] p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-slate-400 hover:text-[#556002] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#e2e8b0] p-4 rounded-2xl text-[#556002] shadow-sm">
                <MessageCircle size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#556002] tracking-tight">BoomGro Expert Chat</h3>
              <p className="text-[#556002]/60 text-xs font-bold uppercase tracking-widest">Soil & Crop Support</p>
            </div>
        </div>
        
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
            Ready to see your crops thrive? Ask us anything about **BoomGro** application, pricing, or soil health.
        </p>

        <div className="space-y-5">
          <textarea 
            className="w-full p-5 rounded-2xl border-2 border-slate-100 focus:border-[#e2e8b0] focus:ring-4 focus:ring-[#e2e8b0]/20 outline-none h-36 resize-none text-slate-800 placeholder:text-slate-400 transition-all shadow-inner"
            placeholder="Tell us about your farm (e.g. 'I'm growing tomatoes in MaiMahiu...')"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          />

          <button 
            onClick={handleSendMessage}
            className="w-full bg-[#556002] text-[#e2e8b0] py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] hover:shadow-xl transition-all flex items-center justify-center gap-3"
          >
            <Send size={18} />
            Chat via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}