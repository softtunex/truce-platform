import React from "react";
import { MOCK_DATA } from "../data/mockData.ts";

export const Steps: React.FC = () => {
  const imageUrl = "/assets/images/jealife-pictures-1PgSfwSxXx0-unsplash.jpg";

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#e9f1ee] overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Logo at the top left of the section */}
        <div className="flex items-center gap-2 mb-12 animate-fade-in">
          <div className="flex items-center">
            <div className="w-4 h-8 bg-[#65a30d] rounded-full mr-1"></div>
            <div className="w-4 h-8 bg-[#1d4ed8] rounded-full -ml-2"></div>
          </div>
          <span className="text-3xl font-black text-[#0D1B3E] tracking-tighter">
            Truce
          </span>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Visual: Masked Image & Quote */}
          <div className="flex-1 w-full max-w-[500px] relative">
            <div className="relative flex items-end gap-4">
              {/* Left Column: Small Pill + Quote */}
              <div className="flex flex-col gap-6 w-1/3">
                <div className="h-64 md:h-80 w-full rounded-full overflow-hidden shadow-2xl animate-float relative">
                  <img
                    src={imageUrl}
                    alt="Process Mask 1"
                    className="absolute inset-0 w-[300%] h-full object-cover object-left"
                  />
                </div>
                {/* Quote Section directly under the small pill */}
                <div className="space-y-2 animate-fade-in [animation-delay:0.3s]">
                  <span className="text-[#0D1B3E] font-black text-5xl block leading-none opacity-80">
                    “
                  </span>
                  <p className="text-[#0D1B3E] text-xs md:text-[14px] font-black leading-tight tracking-tight uppercase">
                    If a deal fails, Truce activates instant reversal to your
                    account
                  </p>
                  <span className="text-[#0D1B3E] font-black text-5xl block leading-none text-right opacity-80 transform rotate-180 -mt-4">
                    “
                  </span>
                </div>
              </div>

              {/* Right Column: Large Pill */}
              <div className="w-2/3">
                <div className="h-[400px] md:h-[550px] w-full rounded-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] animate-float [animation-delay:0.5s] relative">
                  <img
                    src={imageUrl}
                    alt="Process Mask 2"
                    className="absolute inset-0 w-[150%] h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Header + Step Cards */}
          <div className="flex-[1.4] space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="md:text-2xl font-[900] text-[#0D1B3E] leading-[1.05] tracking-tight">
                3 Steps to Truce a Transaction and keep your deal safe
              </h2>
              <p className="text-slate-600 font-semibold md:text-base opacity-90 max-w-xl">
                We’re building global trust protocol that lets anyone, anywhere
                transact with confidence
              </p>
            </div>

            {/* Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {MOCK_DATA.steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-[40px] shadow-[0_15px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-500 group border border-slate-50 flex flex-col min-h-[400px]"
                >
                  {/* Vector Illustration Placeholder */}
                  <div className="w-full aspect-[4/3] mb-8 rounded-3xl bg-slate-50/50 flex items-center justify-center p-2 relative overflow-hidden group-hover:bg-emerald-50/50 transition-colors">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h3 className="text-base font-black text-[#0D1B3E] leading-tight group-hover:text-emerald-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed opacity-80 tracking-tight">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-50 mt-auto">
                    <button className="text-xs font-black text-slate-400 group-hover:text-emerald-700 flex items-center gap-2 transition-all">
                      Learn more
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
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
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Disclaimer */}
            <div className="pt-4 max-w-2xl border-t border-slate-200/50 mt-12">
              <p className="text-[#0D1B3E] text-base md:text-xl font-black leading-tight">
                Truce will instantly withdraw and reverse your money to
                originating account, <br className="hidden md:block" />
                <span className="opacity-70 font-bold text-base">
                  If the transaction fails to meet the terms of the agreement
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
