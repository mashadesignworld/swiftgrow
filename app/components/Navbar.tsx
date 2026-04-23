"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-emerald-900">
        <Image 
          src="/swiftlogo.png" 
          alt="SwiftGrow Logo" 
          width={100} 
          height={100} 
        />
      
      </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-green-600 transition">About Us</Link>
          <Link href="/products" className="hover:text-green-600 transition">Products</Link>
          
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full transition">
            <ShoppingBag size={20} className="text-slate-700" />
          </button>
          <button className="hidden md:block bg-brand-500 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition">
            Shop Now
          </button>
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-slate-100 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/about" className="text-lg font-medium">About</Link>
          <Link href="/products" className="text-lg font-medium">Products</Link>
        
        </div>
      )}
    </nav>
  );
}