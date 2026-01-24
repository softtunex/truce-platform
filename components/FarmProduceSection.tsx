import React from "react";

export const FarmProduceSection: React.FC = () => {
  const imageUrl = "/images/richard-nyoni-1AoGjqdyDLU-unsplash.jpg";

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f1f3f6] overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Content: Text and CTA */}
        <div className="flex-1 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-[950] text-[#0D1B3E] leading-[1] tracking-tighter">
              Buy & Sell Farm <br />
              Produce with <br />
              Truce
            </h2>
            <p className="text-[#0D1B3E] font-black text-xl md:text-2xl leading-tight opacity-90 max-w-xl">
              Buyers can now buy, pay to seller truce account receive products,
              confirm and approve, while sellers receive payment on their truce
              delivers and payment is released
            </p>
          </div>

          <div className="space-y-6 max-w-lg">
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              The Truce is completed when both parties fulfill the terms of the
              agreement
              <br />
              <span className="font-black text-slate-600">
                Every completed Truce builds a record — a trust score, forming
                the world’s first social currency of credibility
              </span>
            </p>
          </div>

          <div className="pt-2">
            <button className="flex items-center gap-3 group">
              <span className="text-emerald-900 text-sm font-black uppercase tracking-[0.2em]">
                Learn more
              </span>
              <svg
                className="w-5 h-5 text-emerald-900 transition-transform group-hover:translate-x-1"
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

        {/* Right Content: Creative Pill Masks */}
        <div className="flex-1 w-full flex items-center justify-center lg:justify-end gap-3 md:gap-5 order-1 lg:order-2 h-[450px] md:h-[600px]">
          {/* Mask 1 (Short) */}
          <div className="w-[15%] h-[40%] rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:h-[50%]">
            <img
              src={imageUrl}
              alt="Farm 1"
              className="w-[800%] h-full object-cover object-left"
            />
          </div>

          {/* Mask 2 (Tallest) */}
          <div className="w-[28%] h-[80%] md:h-[95%] rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02]">
            <img
              src={imageUrl}
              alt="Farm 2"
              className="w-[400%] h-full object-cover object-center"
            />
          </div>

          {/* Mask 3 (Medium) */}
          <div className="w-[22%] h-[60%] md:h-[70%] rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:h-[75%]">
            <img
              src={imageUrl}
              alt="Farm 3"
              className="w-[500%] h-full object-cover object-right"
            />
          </div>

          {/* Mask 4 (Smallest) */}
          <div className="w-[12%] h-[30%] md:h-[35%] rounded-full overflow-hidden shadow-2xl transition-all duration-700 hover:h-[45%]">
            <img
              src={imageUrl}
              alt="Farm 4"
              className="w-[900%] h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
