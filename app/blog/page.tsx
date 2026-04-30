import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

const allGuides = [
  { 
    slug: "acidic-soil-kitengela", 
    title: "How to manage acidic soil in Kitengela", 
    excerpt: "Kitengela soils can be tricky. Learn how to balance pH levels for a bumper harvest.",
    image: "/soil.jpg",
    category: "Soil Health",
    readTime: "5 min"
  },
  { 
    slug: "vegetable-gardening-tips", 
    title: "Top 3 tips for vegetable gardening in Kajiado", 
    excerpt: "Expert advice on growing kales, tomatoes, and onions in the Kajiado climate.",
    image: "/garden.jpg",
    category: "Crop Tips",
    readTime: "4 min"
  },
  { 
    slug: "fertilizer-application-tips", 
    title: "When to apply fertilizer for maximum growth", 
    excerpt: "Timing is everything. Discover the golden window for SwiftGrow application.",
    image: "/fertilizer.jpg",
    category: "Fertilizer",
    readTime: "6 min"
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#556002] font-bold uppercase tracking-widest text-sm mb-4">
              <BookOpen size={18} />
              <span>Expert Knowledge</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#556002] leading-tight">
              Farmer's Guide <span className="text-slate-400">&</span> Library
            </h1>
          </div>
          <p className="text-slate-600 text-lg md:max-w-xs">
            Practical advice to help you increase yield and restore your soil.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allGuides.map((guide) => (
            <Link 
              key={guide.slug} 
              href={`/blog/${guide.slug}`}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-[#556002]/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={guide.image} 
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#556002] text-[#e2e8b0] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {guide.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {guide.readTime} read
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-[#556002] mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                  {guide.title}
                </h2>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {guide.excerpt}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[#556002] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Full Article <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / CTA Section */}
       <div className="mt-24 bg-[#556002] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
    <div className="relative z-10">
        <h3 className="text-[#e2e8b0] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Never miss a harvest tip
        </h3>
        <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Join other Kenyan farmers receiving weekly soil health and crop management advice.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <div className="flex-grow relative">
                <input 
                    type="email" 
                    required
                    placeholder="Enter your email" 
                    className="w-full px-6 py-5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 outline-none border-2 border-transparent focus:border-[#e2e8b0] focus:ring-4 focus:ring-[#e2e8b0]/20 transition-all text-base shadow-inner"
                />
            </div>
            <button 
                type="submit"
                className="bg-[#e2e8b0] text-[#556002] px-10 py-5 rounded-2xl font-black uppercase tracking-wider text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl active:scale-95"
            >
                Subscribe
            </button>
        </form>
    </div>
    
    {/* Refined decorative background elements */}
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#e2e8b0]/10 rounded-full blur-3xl"></div>
</div>

      </div>
    </main>
  );
}