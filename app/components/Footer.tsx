import {  Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-slate-300 border-t border-emerald-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Branding Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4">SwiftGrow</h2>
            <p className="text-sm leading-relaxed">
              High-quality pelletized organic fertilizer for commercial agriculture, lawns, and gardens. 
              Feed the soil, and it will feed you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-emerald-950 transition">Products</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16} /> Nairobi, Kenya</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +254 721 595 989</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@swiftgroworganics.co.ke</li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-white font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4 mb-8">
           
            </div>
            <p className="text-xs text-emerald-500 italic">&quot;The Future of Sustainable Farming&quot;</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-900/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 SwiftGrow Kenya. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}