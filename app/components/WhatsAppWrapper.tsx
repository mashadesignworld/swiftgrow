"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatModal from "./ChatModal";

export default function WhatsAppWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Button Styled for SwiftGrow */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-[#556002] text-[#e2e8b0] p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#556002]/20 transition-all z-50 flex items-center justify-center border-2 border-[#e2e8b0]/30 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
        
        {/* Subtle notification pulse to draw the eye */}
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-[#556002] animate-pulse"></span>
      </button>

      {/* The Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}