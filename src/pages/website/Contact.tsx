import React from "react";

export const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h1 className="text-5xl font-black text-[#0D1B3E] leading-tight">
            Get in touch with the Truce Team
          </h1>
          <p className="text-slate-500 text-lg">
            Have questions about how Truce can protect your business? Our
            support team is ready to help you secure your next deal.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Email Us
                </p>
                <p className="text-lg font-bold text-[#0D1B3E]">
                  contact@truce.com.ng
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-400">
                  Visit Us
                </p>
                <p className="text-lg font-bold text-[#0D1B3E]">
                  Victoria Island, Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f8fafc] p-10 rounded-[40px] border border-slate-100 shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button className="w-full bg-[#0D1B3E] text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
