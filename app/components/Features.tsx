import { Leaf, Droplets, GitBranch, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic & Nutrient Dense",
      desc: "Packed withnatural  nitrogen, phosphorusand potassium for balanced growth",
    },
    {
      icon: Droplets,
      title: "Slow Release Formula",
      desc: "Feedsplants gradually for upto 6weeks,preventing nutrient runoff and plant burn"

    },
    {
      icon: GitBranch,
      title: "Soil Conditioner",
      desc: "Improves soil structure,moisture retention, and stimulates beneficial microbial activity"
    },
  
     {
      icon: ShieldCheck,
      title: "Safe & Certified",
      desc: "Heat-treated to ensure it is weed-seed free,pathogen free,and safe for families and pets,Lab tested and certified"
    },
  ];

  return (
    <section className="bg-[#f9f7f4] py-12 border-b border-emerald-900/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 ${
                index !== features.length - 1 ? "lg:border-r border-emerald-900/20" : ""
              }`}
            >
              {/* Icon Circle */}
<div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#586116] text-white">
                <feature.icon className="w-6 h-6" />
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="font-bold text-emerald-900 uppercase tracking-wide text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}