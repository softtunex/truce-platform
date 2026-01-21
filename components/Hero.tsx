import React from "react";

export const Hero: React.FC = () => (
  <section className="relative pt-20 pb-32 px-6 overflow-hidden bg-white">
    {/* Abstract Background Orbs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/40 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse duration-[10s] -z-10" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] -ml-24 -mb-24 -z-10" />

    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      {/* Left Content */}
      <div className="flex-1 space-y-10 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-3 bg-[#E7F3ED] px-5 py-3 rounded-full border border-green-200/50 shadow-sm animate-fade-in">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-black text-[#006633] tracking-[0.15em] uppercase">
            Africa’s No.1 Trust Infrastructure
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-[84px] font-[900] text-[#0D1B3E] leading-[0.95] tracking-tight">
            Transactions <br />
            <span className="text-[#006633] italic font-serif">
              Made Simple
            </span>{" "}
            <br />& Secure
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Raise a Truce agreement today, lock the terms, and protect your
            capital. We activate{" "}
            <span className="text-[#006633] font-bold">
              digital accountability
            </span>{" "}
            before a single cent is moved.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="h-[2px] w-12 bg-[#006633]"></div>
            <h3 className="text-lg font-black text-[#0D1B3E] uppercase tracking-wider">
              Never Lose Money to a Bad Deal
            </h3>
          </div>
          <p className="text-slate-400 text-sm font-medium pl-0 lg:pl-16">
            Your assets only transition when both parties honor the digital
            contract.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
          <button className="bg-white border-2 border-slate-100 text-slate-800 px-12 py-5 rounded-2xl font-black hover:bg-slate-50 hover:border-slate-300 transition-all text-sm uppercase tracking-widest shadow-xl shadow-slate-200/20">
            Sign in
          </button>
          <button className="bg-[#006633] text-white px-12 py-5 rounded-2xl font-black hover:bg-[#004D2A] transition-all text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(0,102,51,0.4)] group flex items-center gap-3">
            Create Agreement
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Visual Content - Much more sophisticated */}
      <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
        <div className="relative z-10">
          {/* Main Image Container with Organic Clip Path */}
          <div className="relative group perspective-1000">
            <div className="overflow-hidden rounded-[80px] md:rounded-[120px] shadow-[0_60px_100px_-30px_rgba(13,27,62,0.25)] border-[16px] border-white transition-transform duration-700 hover:rotate-1">
              <img
                src="/assets/images/francis-odeyemi-jLKDfxikHzM-unsplash.jpg"
                alt="Security & Trust specialist"
                className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>

            {/* Premium Trust Card - Floating & Glassmorphic */}
            <div className="absolute -top-12 -left-16  bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-white/50 max-w-[360px] animate-float">
              <div className="flex items-center mb-4">
                {/* <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                  ✨
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  Premium trust
                </p> */}
              </div>
              <p className="text-sm font-black text-[#0D1B3E] mb-5 leading-tight">
                Premium trust, Connecting verified businesses in a global
                network of trust.
              </p>
              <div className="flex items-end gap-3 mb-6">
                <p className="text-3xl font-black text-[#0D1B3E] tracking-tighter leading-none">
                  9.5
                </p>
                <div className="space-y-1">
                  <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                  <p className="text-[9px] font-black text-slate-400 uppercase">
                    Expert Rating
                  </p>
                </div>
              </div>
              <button className="bg-[#006633] text-white px-5 py-3 rounded-2xl text-[10px] font-black w-full uppercase tracking-widest hover:bg-[#004D2A] transition-all shadow-lg shadow-green-900/20">
                Join Community
              </button>
            </div>

            {/* Social Currency Card - Layered over */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-[#0D1B3E] p-6 rounded-[40px] shadow-2xl flex items-center gap-5 border border-white/10 max-w-[280px] text-white animate-float-delayed">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#006633] to-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-[10px] border-2 border-[#0D1B3E] font-bold">
                  ✓
                </div>
              </div>
              <p className="text-xs font-bold leading-relaxed">
                Join the world's first <br />
                <span className="text-green-400 font-black">
                  Social Currency of Trust
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-slate-100 rounded-full opacity-50" />
        <div className="absolute -z-10 bottom-0 right-1/2 w-48 h-48 border-4 border-green-50 rounded-full opacity-50" />
      </div>
    </div>
  </section>
);
