"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    // Use your verified Access Key
    formData.append("access_key", "27a352d5-953a-4b48-93cc-50a7f14261e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        // Redirect to your success page
        window.location.href = "/contact/success";
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-4">
            Let’s Grow Together
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions about your soil or need a bulk order? Our agronomists are ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Info */}
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
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Mkulima John"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    name="phone"
                    type="tel" 
                    required
                    placeholder="+254..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Crop Type (Optional)</label>
                <input 
                  name="crop"
                  type="text" 
                  placeholder="e.g. Tomatoes, Maize"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}