import React from "react";
import { MOCK_DATA } from "../data/mockData.ts";

export const OfferSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#fcfcfc] relative overflow-hidden">
      {/* Background Subtle Pattern / Opaque Image */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content: Header + Cards */}
        <div className="flex-[1.5] space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-[900] text-[#0D1B3E] tracking-tight">
              Check Out What We Offer
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl leading-relaxed">
              We’ve built our features around what matters most — helping you
              save time, boost performance, and stay ahead.
            </p>
          </div>

          {/* Cards Grid: 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_DATA.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[40px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Small Green Icon on top right */}
                <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <img
                    src={`https://api.dicebear.com/7.x/shapes/svg?seed=${feature.title}&backgroundColor=ecfdf5&shape1Color=10b981`}
                    alt="Icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-4 max-w-[85%]">
                  <h4 className="text-lg font-black text-[#0D1B3E] leading-tight group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-bold leading-relaxed  tracking-tight">
                    {feature.desc}
                  </p>

                  <div className="pt-4">
                    <button className="text-[11px] font-[900] text-[#0D1B3E] flex items-center gap-2 group/btn">
                      Get started
                      <svg
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Character Illustration */}
        <div className="flex-1 w-full max-w-[500px] relative mt-12 lg:mt-0 animate-fade-in">
          <div className="relative z-10">
            {/* The Man holding phone placeholder */}
            <div className="relative group">
              {/* Using a high-quality stylized illustration placeholder */}
              <img
                src="/images/truce-man-with-phone.png"
                alt="Truce Experience"
                className="w-full h-auto rounded-[10px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Floating Phone UI Simulation Overlay */}
              <div className="absolute top-24 left-[60%] -translate-x-1/2 -translate-y-1/2 animate-float">
                <div className="w-[100px] bg-white/95 backdrop-blur-xl p-2 rounded-[10px] shadow-2xl border border-white/50 -rotate-12">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-5 bg-emerald-600 rounded-full"></div>
                      <div className="w-2.5 h-5 bg-blue-600 rounded-full -ml-1"></div>
                      <span className="text-lg font-black text-[#0D1B3E]">
                        Truce
                      </span>
                    </div>
                    <p className="text-xs font-black text-[#0D1B3E] leading-tight px-1 py-3">
                      Digitize your trust with Truce smart trust
                    </p>
                    <div className="w-full h-1 bg-white rounded-full relative overflow-hidden"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
