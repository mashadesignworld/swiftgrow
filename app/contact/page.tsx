"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Loader2, ChevronDown, ChevronUp } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Where do you deliver to?",
      a: "We deliver nationwide across Kenya, with specialized logistics for bulk orders in Kajiado, Nakuru, and Kiambu counties."
    },
    {
      q: "How long does it take to see results?",
      a: "Most farmers report improved soil texture and plant vigor within 14–21 days of the first application of SwiftGrow Organic."
    },
    {
      q: "Do you offer soil testing services?",
      a: "Yes! For large-scale farm projects, our agronomists provide soil analysis to recommend the perfect fertilizer ratio."
    }
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#556002] mb-4">
            Let’s Grow Together
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions about your soil or need a bulk order? Our agronomists are ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Side: Info */}
          <div className="space-y-8">
            <div className="bg-[#556002] text-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-bold">Call or WhatsApp</p>
                    <p className="text-lg font-medium">+254 721 595 989</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-bold">Email Us</p>
                    <p className="text-lg font-medium">info@swiftgrowkenya.co.ke</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider font-bold">Visit Us</p>
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#556002] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    name="phone"
                    type="tel" 
                    required
                    placeholder="+254..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#556002] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Crop Type (Optional)</label>
                <input 
                  name="crop"
                  type="text" 
                  placeholder="e.g. Tomatoes, Maize"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#556002] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#556002] transition"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#556002] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-[#556002]/20"
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

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#556002] mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  {faq.q}
                  {openFaq === index ? <ChevronUp className="text-[#556002]" /> : <ChevronDown className="text-slate-400" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 animate-in slide-in-from-top-2 duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}