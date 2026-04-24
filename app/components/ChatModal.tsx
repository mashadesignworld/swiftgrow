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
    // If they typed something, include it, otherwise just open the chat
    const message = inquiry ? `Hello! I have a question about Swift Grow: ${inquiry}` : "Hello, I would like to get some advice on my farming.";
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    onClose();
    setInquiry(""); // Clear after sending
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 p-3 rounded-full text-brand-500">
                <MessageCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900">Chat with Expert</h3>
        </div>
        
        <p className="text-slate-600 mb-6 text-sm">
            Have a question about soil health or application? Our team is ready to assist you.
        </p>

        <div className="space-y-4">
          <textarea 
            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none h-32 resize-none"
            placeholder="How can we help your farm today?"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          />

          <button 
            onClick={handleSendMessage}
            className="w-full bg-[#586116] text-white py-4 rounded-xl font-bold hover:bg-[#4a5212] transition shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Start WhatsApp Chat
          </button>
        </div>
      </div>
    </div>
  );
}