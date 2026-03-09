import React from "react";

export const OfferSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden relative border-t border-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- Left Column: Typography Content --- */}
          <div className="space-y-8 relative z-10">
            {/* Main Headline - Scaled down to match Hero H1 sizes */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-[900] text-[#0D1B3E] leading-[1.1] tracking-tight">
              What I Ordered <br />
              <span className="text-gray-300 text-3xl sm:text-4xl align-middle font-serif italic mx-2">
                vs
              </span>
              <br />
              What I Got !
            </h2>

            {/* Sub-section 1 */}
            <div className="space-y-2">
              <h3 className="text-[#65a30d] font-[900] text-sm uppercase tracking-wide">
                NO MORE, TO BAD DELIVERY
              </h3>
              <p className="text-[#0D1B3E] font-medium text-base leading-relaxed max-w-md">
                Get your money returned instantly with the click of a button if
                the seller fails to meet the terms of your Truce.
              </p>
            </div>

            {/* Sub-section 2 */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-[900] text-[#0D1B3E] tracking-tight leading-tight">
                Truce secure every digital commerce with smart agreement
              </h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-md">
                With Truce, you can now buy, sell, and even render services on
                your terms without the risk of losing your money.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-3 rounded-xl border border-gray-200 text-[#0F5935] font-bold text-xs uppercase tracking-wider hover:bg-[#0F5935] hover:text-white hover:border-[#0F5935] transition-all shadow-sm active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          {/* --- Right Column: Visuals (Pill Shapes) --- */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            {/* Left Blurred Pill */}
            <div className="absolute left-0 lg:left-8 top-1/2 -translate-y-1/2 w-28 h-40 lg:w-36 lg:h-56 rounded-[100px] overflow-hidden opacity-60 blur-[1px] transform scale-90 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400"
                alt="Car"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Right Blurred Pill */}
            <div className="absolute right-0 lg:right-8 top-1/2 -translate-y-1/2 w-28 h-40 lg:w-36 lg:h-56 rounded-[100px] overflow-hidden opacity-60 blur-[1px] transform scale-90 bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400"
                alt="City"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Center Main Pill (High Focus) */}
            <div className="relative z-10 w-48 h-72 lg:w-60 lg:h-[380px] rounded-[100px] overflow-hidden shadow-2xl border-4 border-white bg-white group hover:scale-105 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1616401784845-180886ba9ca8?auto=format&fit=crop&q=80&w=800"
                alt="Delivery Rider"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              {/* Optional Text Overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-white font-black text-xl drop-shadow-md">
                  Glovo!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
