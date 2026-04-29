"use client";
import Image from "next/image";
import Link from "next/link";

const tips = [
  { 
    title: "How to manage acidic soil in Kitengela", 
    excerpt: "Acidic soil kills yields. Learn the pH balancing techniques that work for local soil...",
    image: "/soil.jpg", // Ensure images are in your /public folder
    slug: "acidic-soil-kitengela"
  },
  { 
    title: "Top 3 tips for vegetable gardening", 
    excerpt: "Water management and organic feeding strategies for our dry climate...",
    image: "/garden.jpg",
    slug: "vegetable-gardening-tips"
  },
  { 
    title: "When to apply fertilizer", 
    excerpt: "Timing is everything. Discover the optimal schedule for your crops...",
    image: "/fertilizer.jpg",
    slug: "fertilizer-application-tips"
  },
];

export default function ExpertTips() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center md:text-left">
          Farmer's Knowledge Base
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              
              {/* Image Header */}
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={tip.image} 
                  alt={tip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h4 className="font-bold text-lg text-emerald-900 mb-2 leading-tight group-hover:text-emerald-700 transition">
                  {tip.title}
                </h4>
                <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                  {tip.excerpt}
                </p>
                <Link 
                  href={`/blog/${tip.slug}`}
                  className="text-brand-500 font-bold text-sm flex items-center gap-1 hover:underline"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}