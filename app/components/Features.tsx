import { Leaf, Droplets, GitBranch, ShieldCheck } from "lucide-react";

export default function Features() {
 const features = [
  {
    icon: Leaf,
    title: "Boost Crop Growth Naturally",
    desc: "Rich in essential nutrients (NPK) to support stronger, healthier plants.",
  },
  {
    icon: Droplets,
    title: "Feeds Crops for Weeks, Not Days",
    desc: "Gradual nutrient release for up to 6 weeks—reducing waste and saving costs.",
  },
  {
    icon: GitBranch,
    title: "Revives and Strengthens Your Soil",
    desc: "Improves soil structure, moisture retention, and boosts beneficial microbes.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Clean & Farmer-Friendly",
    desc: "Heat-treated, weed-free, and lab-tested—safe for crops, soil, and environment.",
  },
];

  return (
    <section className="bg-[#f9f7f4] py-12 border-b border-emerald-900/10">
      <div className="container mx-auto px-6">
     <div className="mb-12 text-center max-w-2xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
    Why Farmers Choose BoomGro
  </h2>
  <p className="mt-3 text-slate-600">
    Designed to restore soil health, improve yields, and support sustainable farming across Kenya.
  </p>
</div>
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
                <p className="text-slate-600 text-sm leading-relaxed ">
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