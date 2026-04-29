// app/blog/page.tsx
import Link from 'next/link';

// In a real app, you would fetch this list from your database
const allGuides = [
  { slug: "acidic-soil-kitengela", title: "How to manage acidic soil in Kitengela" },
  { slug: "vegetable-gardening-tips", title: "Top 3 tips for vegetable gardening in Kajiado" },
  { slug: "fertilizer-application-tips", title: "When to apply fertilizer for maximum growth" },
];

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-extrabold text-emerald-900 mb-12">Farmer's Guide Library</h1>
      
      <div className="space-y-4">
        {allGuides.map((guide) => (
          <Link 
            key={guide.slug} 
            href={`/blog/${guide.slug}`}
            className="block p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500 hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-emerald-900">{guide.title}</h2>
            <p className="text-emerald-600 mt-2 font-medium">Read Article →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}