import React from "react";

export const ValueProtectionSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8fafc] overflow-hidden relative border-y border-slate-100 min-h-[700px] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-100">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
            alt="Value Protection Background"
            className="w-full h-full object-cover object-center lg:object-right"
          />
          {/* Gradient Overlay to fade into the content area */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 lg:via-[#f8fafc]/50 to-transparent" />
        </div>
      </div>

      {/* Truce Logo in Background Corner as seen in reference */}
      <div className="absolute top-12 right-12 z-10 flex items-center gap-2 opacity-80 hidden md:flex">
        <div className="w-3 h-7 bg-blue-600 rounded-full"></div>
        <div className="w-3 h-7 bg-emerald-600 rounded-full -ml-1.5"></div>
        <span className="text-2xl font-black text-[#0D1B3E] tracking-tighter">
          Truce
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-2xl space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[950] text-[#0D1B3E] leading-[1.05] tracking-tighter">
              Don’t loose the money, <br />
              <span className="text-slate-700/90">
                if you don’t get the value
              </span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-[#0D1B3E] opacity-90 max-w-lg">
              Truce ensures your agreement is secured and your money protected
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              Across Africa and globally, buyers lose billions yearly to fraud
              in property deals, marketplace trades, online sales and service
              transactions — <strong>simply because trust is broken</strong>.
              Truce changes that.
              <strong> We turn Trust into a product</strong> — a digital
              agreement that protects both sides of a transaction through a
              smart contract, while funds are securely held in Truce account
              until the terms are fulfilled.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              Buyers gain peace of mind. Sellers gain credibility. The ecosystem
              gains accountability. Every Truce created builds a public layer of
              verified human trust — a reputation system that becomes the new
              currency of online credibility.
            </p>
            <p className="text-emerald-700 font-black text-lg">
              Truce is redefining how people trust each other online!
            </p>
          </div>

          <div className="pt-4">
            {/* Modernized Button Style matching TruceDealSection's aesthetic */}
            <button className="bg-[#0D1B3E] text-white px-6 py-4 rounded-full flex items-center gap-4 shadow-[0_20px_50px_-10px_rgba(13,27,62,0.3)] hover:shadow-[0_25px_60px_-10px_rgba(13,27,62,0.5)] hover:bg-slate-800 transition-all duration-300 group">
              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Learn more
              </span>
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#0D1B3E] transition-all">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accents */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 opacity-10">
        <div className="w-32 h-1 bg-[#0D1B3E] rounded-full"></div>
        <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
      </div>
    </section>
  );
};
