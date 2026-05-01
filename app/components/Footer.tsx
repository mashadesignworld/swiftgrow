import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#556002] text-white/70 border-t border-[#e2e8b0]/10">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Branding Column */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <Image 
                src="/swiftlogo.png" 
                alt="SwiftGrow Organics Logo" 
                width={180} 
                height={60} 
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              Revolutionizing Kenyan agriculture with high-potency pelletized organic fertilizer. 
              We don't just sell fertilizer; we engineer the future of the soil.
            </p>
            {/* Safe Text-based Social Links */}
            <div className="mt-8 flex gap-6 text-[10px] font-black uppercase tracking-widest">
               <Link href="#" className="hover:text-[#e2e8b0] transition-colors">Facebook</Link>
               <Link href="#" className="hover:text-[#e2e8b0] transition-colors">Instagram</Link>
               <Link href="#" className="hover:text-[#e2e8b0] transition-colors">X (Twitter)</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[#e2e8b0] font-black uppercase tracking-widest text-[10px] mb-8">
              Company
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Our Products</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Farmer&apos;s Guide</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h3 className="text-[#e2e8b0] font-black uppercase tracking-widest text-[10px] mb-8">
              Headquarters
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#e2e8b0] shrink-0" />
                <span>MaiMahiu, Kenya<br/><span className="text-xs opacity-60 font-medium italic"> Highlands Region</span></span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#e2e8b0] shrink-0" />
                <span className="font-bold">+254 721 595 989</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-[#e2e8b0] shrink-0" />
                <span className="font-medium break-all">info@swiftgrowkenya.co.ke</span>
              </li>
            </ul>
          </div>

          {/* Philosophy Section */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-[#e2e8b0] font-black uppercase tracking-widest text-[10px] mb-8">
                The Philosophy
              </h3>
              <p className="text-xl font-black leading-tight text-white/90">
                &quot;Feed the soil,<br />and it will feed you.&quot;
              </p>
            </div>
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#e2e8b0]">
                Premium Organic Grade
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2026 SwiftGrow Organics Kenya.</p>
          <div className="flex gap-8 mt-6 md:mt-0 opacity-60 hover:opacity-100 transition-opacity">
            <Link href="#" className="hover:text-[#e2e8b0]">Privacy</Link>
            <Link href="#" className="hover:text-[#e2e8b0]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}