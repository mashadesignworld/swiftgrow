"use client";
import Image from "next/image";

const studies = [
  { 
    crop: "Tomatoes", 
    location: "Kitengela", 
    result: "+40% Yield Increase", 
    description: "Improved fruit size and reduced rot using BoomGro.",
    image: "/tomatoes.jpg" // Ensure these images are in your public folder
  },
  { 
    crop: "Kales (Sukuma)", 
    location: "Isinya", 
    result: "Deep Green Foliage", 
    description: "Faster maturation cycle and higher leaf count.",
    image: "/kales.jpg" 
  },
];

export default function ResultsGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-emerald-900 mb-2">Proven Results</h2>
        <p className="text-slate-500 mb-12">See how BoomGro is transforming farms in Kajiado.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {studies.map((study, i) => (
            <div key={i} className="group relative rounded-3xl  overflow-hidden min-h-[350px] flex items-end">
              
              {/* Background Image */}
              <Image 
                src={study.image} 
                alt={study.crop}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="relative p-8 z-10 text-white">
                <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold inline-block mb-4 shadow-sm">
                  {study.result}
                </div>
                <h3 className="text-2xl font-bold">{study.crop} — {study.location}</h3>
                <p className="text-slate-200 mt-2 text-sm">{study.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}