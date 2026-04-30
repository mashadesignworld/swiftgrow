import Link from 'next/link';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

export default function ContactSuccess() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <CheckCircle2 size={80} className="text-emerald-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-emerald-900 mb-4">Message Received!</h1>
        <p className="text-slate-600 mb-10">
          While you wait for our agronomist to reply, why not check out our Farmer's Guide?
        </p>
        <Link 
          href="/blog" 
          className="flex items-center justify-center gap-2 w-full bg-emerald-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-800 transition"
        >
          Open Farmer's Guide <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}