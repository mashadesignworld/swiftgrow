import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// 1. DATA: The central knowledge base for your SEO content
const blogPosts: Record<string, { title: string; date: string; excerpt: string; content: string; image: string }> = {
  "acidic-soil-kitengela": {
    title: "How to Manage Acidic Soil in Kitengela",
    date: "April 29, 2026",
    excerpt: "Acidic soil kills yields. Learn the pH balancing techniques that work for local soil.",
    image: "/soil-kitengela.jpg",
    content: `
      <p>Farmers in Kitengela often face the challenge of acidic soil. This leads to nutrient lock-out, where even if you apply fertilizer, your crops can't absorb it.</p>
      <h2>Why Soil pH Matters</h2>
      <p>When soil pH drops below 6.0, vital nutrients like phosphorus and nitrogen become inaccessible to your plants. This is why you might see yellowing leaves despite regular fertilization.</p>
      <h3>The BoomGro Solution</h3>
      <p>The most effective strategy is a combination of lime application and high-quality organic fertilizers. BoomGro helps stabilize the root zone environment, ensuring that nutrient uptake remains consistent even in challenging soil conditions.</p>
    `
  },
  "vegetable-gardening-tips": {
    title: "Top 3 Tips for Vegetable Gardening in Kajiado",
    date: "April 28, 2026",
    excerpt: "Water management and organic feeding strategies for our dry climate.",
    image: "/veg-garden.jpg",
    content: `
      <p>Vegetable gardening in Kajiado requires a specific approach to moisture retention and soil health due to the semi-arid conditions.</p>
      <h2>1. Mulching is Non-Negotiable</h2>
      <p>In our heat, bare soil loses moisture in minutes. Use organic mulch to keep the roots cool and damp.</p>
      <h2>2. Deep Root Feeding</h2>
      <p>Instead of surface watering, focus on deep soil hydration. Applying BoomGro during the early growth stages encourages deeper root systems that can survive dry spells.</p>
      <h2>3. Pest Scouting</h2>
      <p>Identify local pests early before they devastate your sukuma wiki or spinach crops.</p>
    `
  },
  "fertilizer-application-tips": {
    title: "When to Apply Fertilizer for Maximum Growth",
    date: "April 27, 2026",
    excerpt: "Timing is everything. Discover the optimal schedule for your crops.",
    image: "/fertilizer-timing.jpg",
    content: `
      <p>Timing your nutrient application can be the difference between a mediocre harvest and a record-breaking one.</p>
      <h2>The Pre-Planting Phase</h2>
      <p>Always incorporate your organic fertilizer into the soil at least 7 days before transplanting. This allows the soil biology to "wake up."</p>
      <h2>The Vegetative Burst</h2>
      <p>Apply a second round of nutrients just as the plant enters its most aggressive growth phase to ensure it has the energy to build strong stems and leaves.</p>
    `
  }
};

// 2. SEO: Dynamic Metadata generation (Must be async in Next.js 16.2)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Post Not Found | BoomGro" };
  
  return { 
    title: `${post.title} | Farmer's Guide`, 
    description: post.excerpt 
  };
}

// 3. STATIC PATHS: This tells Next.js to pre-render these for SEO speed
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

// 4. MAIN PAGE COMPONENT
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 16.2, we MUST await params
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Navigation */}
        <Link href="/blog" className="text-emerald-600 font-bold hover:underline mb-8 inline-block">
          ← Back to Farmer's Guide
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
              Knowledge Base
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video mb-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
           <Image 
             src={post.image} 
             alt={post.title}
             fill
             className="object-cover"
             priority
           />
        </div>

        {/* Article Content */}
        <article 
          className="prose prose-lg prose-emerald max-w-none 
          prose-headings:text-emerald-900 
          prose-p:text-slate-700
          prose-strong:text-emerald-900
          prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Conversion Banner: Bottom of every article */}
        <section className="mt-20 p-8 md:p-12 bg-[#556002] rounded-3xl text-center text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2e8b0] rounded-full -mr-16 -mt-16 opacity-50" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to boost your harvest?</h3>
            <p className="text-emerald-100 mb-8 max-w-md mx-auto">
              Get the right nutrient balance for your specific farm size using our Calculator.
            </p>
            <Link 
              href="/products#calculator" 
              className="inline-block bg-white text-emerald-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition shadow-lg"
            >
              Calculate Your Needs
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}