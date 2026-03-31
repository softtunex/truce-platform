import React from "react";

const recallPoints = [
  {
    title: "Protect your funds until the deal is completed",
    description:
      "Truce is a safety net for every transaction between two or more parties seeking to do business together.",
  },
  {
    title: "If you don't get the value, don't lose the money",
    description:
      "Whether you are a buyer or a seller, Truce keeps your money safe until all parties fulfil the terms of the Truce agreement.",
  },
  {
    title: "If the deal fails, recall your money",
    description:
      "Truce protect your money, until the transaction terms and conditions are met and all parties fulfil the obligation of the agreement (Truce).",
  },
  {
    title: "Built to protect all transactions",
    description:
      "Truce protect your money, until the transaction terms and conditions are met and all parties fulfil the obligation of the agreement (Truce).",
  },
];

export const RecallPowerSection: React.FC = () => {
  const scrollToAgreement = () => {
    const element = document.getElementById("agreement-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT COLUMN: Visual & CTA --- */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[550px]">
              {/* Floating Trust Card */}
              {/* <div className="absolute -top-10 -left-4 sm:-left-10 z-30 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-[180px] animate-float">
                <p className="text-[9px] font-bold text-gray-500 leading-tight mb-2">
                  Premium trust, connecting Businesses in a Network of Trust!
                </p>
                <div className="flex text-amber-400 text-[10px] mb-1">
                  ★★★★★
                </div>
                <p className="text-xl font-[1000] text-[#0D1B3E] mb-2">9.5</p>
                <button className="w-full bg-[#0F5935] text-white text-[8px] font-black py-2 rounded-md uppercase tracking-wider">
                  Join our Truce community
                </button>
              </div> */}

              {/* Laptop & Illustration */}
              <div className="relative z-10">
                <img
                  src="/images/laptop-truce.png"
                  alt="Truce Platform illustration"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Bottom Text Under Laptop */}
            <div className="text-center mt-12 space-y-3 max-w-xl">
              <h3 className="text-2xl font-[900] text-[#0D1B3E]">
                Ready to Secure Your Next Transaction now
              </h3>
              <p className="text-[#0F5935] text-sm font-bold leading-relaxed">
                Truce isn’t just solving fraud — it’s building a new kind of
                currency: human credibility.
              </p>

              <div className="pt-8">
                <button
                  onClick={scrollToAgreement}
                  className="bg-[#0F5935] text-white px-14 py-4 rounded-full font-bold text-lg hover:bg-[#0b4629] transition-all shadow-xl shadow-green-900/20 transform active:scale-95"
                >
                  Start a Truce
                </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Content & Timeline --- */}
          <div className="flex flex-col space-y-10">
            <h2 className="text-5xl sm:text-6xl font-[1000] text-[#0D1B3E] leading-[1] tracking-tight">
              The power to recall <br />
              your money, is now <br />
              <span className="text-[#0D1B3E]">in your hands</span>
            </h2>

            {/* Timeline Points */}
            <div className="relative space-y-0 pl-4">
              {/* Vertical Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-[#4ADE80]/30" />

              {recallPoints.map((point, idx) => (
                <div key={idx} className="relative pl-12 pb-10 last:pb-0 group">
                  {/* Point Indicator */}
                  <div className="absolute left-0 top-1 w-[20px] h-[20px] rounded-full border-2 border-[#4ADE80] bg-white z-10 group-hover:bg-[#4ADE80] transition-colors" />

                  <div className="space-y-2">
                    <h4 className="text-xl font-[900] text-[#0F5935] leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-lg">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
