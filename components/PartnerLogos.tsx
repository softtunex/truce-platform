import React from "react";
import { MOCK_DATA } from "../data/mockData.ts";

export const PartnerLogos: React.FC = () => {
  // We duplicate the list to ensure the marquee can loop seamlessly
  const partnerList = [...MOCK_DATA.partners, ...MOCK_DATA.partners];

  return (
    <section className="py-20 bg-white overflow-hidden relative border-y border-slate-100/60">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] font-black text-emerald-600/50 uppercase tracking-[0.5em] text-center">
            The Trust Network Powering Africa
          </p>
        </div>
      </div>

      {/* The Marquee Track */}
      <div className="relative overflow-hidden py-4 group">
        <div className="animate-marquee-infinite hover:[animation-play-state:paused]">
          {partnerList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-12 md:mx-16 flex-shrink-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer group/logo"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain filter drop-shadow-sm transition-all"
              />
              <div className="h-0.5 w-0 bg-emerald-500 mt-4 mx-auto group-hover/logo:w-full transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
            </div>
          ))}
        </div>

        {/* Sophisticated edge masks for smooth entry/exit */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
