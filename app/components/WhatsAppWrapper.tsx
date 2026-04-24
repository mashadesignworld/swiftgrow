"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatModal from "./ChatModal";

export default function WhatsAppWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>

      {/* The Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}