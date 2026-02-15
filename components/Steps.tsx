import React from "react";
import { MOCK_DATA } from "../data/mockData";

export const Steps: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#F8F9FB]">
      <div className="max-w-[1080px] mx-auto">
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl lg:text-4xl font-[900] tracking-tight leading-[1.15]">
            Transact with Truce and keep your deal safe with your money
            protected
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Truce gives you the power to terminate a transaction and reverse
            your money back to your account if the terms of the Truce are not
            met.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {MOCK_DATA.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center sm:text-left sm:items-start group"
            >
              {/* Image Area */}
              <div className="w-full h-32 mb-6 flex items-center justify-center sm:justify-start">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-[900] text-[#0D1B3E] mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 font-medium mb-6">
                {step.desc}
              </p>

              {/* Link */}
              {/* <button className="mt-auto text-xs font-bold text-[#0F5935] uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                Learn more
                <svg
                  className="w-3 h-3"
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
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
