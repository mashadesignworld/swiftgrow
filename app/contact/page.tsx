"use client";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"; // Using lucide-react for a premium look

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-4">
            Let’s Grow Together
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions about your soil or need a bulk order? Our agronomists are ready to help you optimize your harvest.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Direct Info */}
          <div className="space-y-8">
            <div className="bg-emerald-900 text-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-800 p-3 rounded-xl text-emerald-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs uppercase tracking-wider font-bold">Call or WhatsApp</p>
                    <p className="text-lg font-medium">+254 721 595 989</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-800 p-3 rounded-xl text-emerald-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs uppercase tracking-wider font-bold">Email Us</p>
                    <p className="text-lg font-medium">info@swiftgrowkenya.co.ke</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-emerald-800 p-3 rounded-xl text-emerald-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-emerald-200 text-xs uppercase tracking-wider font-bold">Visit Us</p>
                    <p className="text-lg font-medium">Mai Mahiu, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Social Proof/Trust Tag */}
              <div className="mt-12 pt-8 border-t border-emerald-800">
                <p className="italic text-emerald-300">
                  "Response time is usually under 2 hours during planting season."
                </p>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Mkulima John"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+254..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Crop Type (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Tomatoes, Maize, Coffee"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your farm goals..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}