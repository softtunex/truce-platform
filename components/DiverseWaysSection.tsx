import React from "react";

export const DiverseWaysSection: React.FC = () => {
  return (
    <section className="py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-5xl md:text-6xl font-[950] text-[#0D1B3E] tracking-tight">
            Diverse ways to Transact
          </h2>
          <p className="text-slate-500 font-bold text-base md:text-lg">
            Protect your funds until every deal is completed
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="bg-[#064e3b] rounded-[60px] p-8 md:p-16 lg:p-20 relative group shadow-2xl shadow-emerald-950/30">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Column: Text Content */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-3xl font-black text-white leading-tight tracking-tight">
                  Ready to Secure Your Next <br /> Transaction?
                </h3>

                <div className="space-y-4">
                  <p className="text-emerald-400 text-sm font-black uppercase tracking-widest">
                    Trust is missing from digital commerce — and Truce is
                    solving it at scale
                  </p>
                  <p className="text-emerald-50/70 text-sm leading-relaxed max-w-lg">
                    In Nigeria alone, over ₦150 billion is lost yearly to fraud
                    in property, e-commerce and service transactions. <br />
                    The cause isn't just fraud — it's broken trust.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl md:text-2xl font-black text-white leading-tight">
                  Truce is the currency that moves Trust <br />
                  <span className="text-emerald-400">Trust moves value</span>
                </h4>

                <div className="relative pl-6 border-l-2 border-emerald-500/30">
                  <p className="text-emerald-50/80 text-xs italic leading-relaxed max-w-lg">
                    "Before using Truce service, I struggled to manage my funds
                    for important payments. With a secure Truce account, I could
                    set targets and confidently save for my obligations. It gave
                    me peace of mind, and I always knew my money was safe until
                    I needed it."
                  </p>
                </div>

                <p className="text-white text-sm font-black leading-relaxed">
                  Truce isn't just solving fraud — it's building a new kind of
                  currency: human credibility.
                </p>
              </div>

              <div className="pt-4">
                <button className="bg-transparent border-2 border-emerald-500/40 text-emerald-400 px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-xl shadow-black/10">
                  Schedule a Truce
                </button>
              </div>
            </div>

            {/* Right Column: Creative Illustration */}
            <div className="flex-1 w-full max-w-[500px] relative">
              <div className="relative animate-float">
                {/* Main Character Placeholder (Stylized Image) */}
                <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-white/10 shadow-3xl">
                  <img
                    src="/images/happy-joyous-man-clenches-fist-with-triumph-watches-football-match-online-focused-smartphone-device-wears-round-spectacles.jpg"
                    alt="Success with Truce"
                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Floating App UI Overlays */}
                <div className="absolute -top-24 -right-24 md:-right-28 z-20 w-[70%] bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] p-6 border border-slate-100 animate-float [animation-delay:1s]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-4 bg-emerald-600 rounded-full"></div>
                        <div className="w-2 h-4 bg-blue-600 rounded-full -ml-1"></div>
                        <span className="text-lg font-black text-[#0D1B3E]">
                          Truce
                        </span>
                      </div>
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xs">
                        ₦
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Total Balance
                      </p>
                      <p className="text-2xl font-black text-[#0D1B3E]">
                        ₦ 6,379,300
                      </p>
                    </div>
                    <div className="h-12 bg-slate-50 rounded-2xl flex items-center px-4 justify-between border border-slate-100/50">
                      <div className="flex gap-1.5">
                        <div className="w-6 h-4 bg-slate-200 rounded-sm"></div>
                        <div className="w-8 h-4 bg-slate-200 rounded-sm"></div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px]">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald-400/10 rounded-full -z-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
