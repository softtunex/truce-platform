import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* --- SECTION 1: HERO (Dark Background) --- */}
      <section className="bg-[#0D1B3E] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[900] leading-[1.1] tracking-tight">
                Track. Control. Resolve. <br />
                Every Agreement in One Place
              </h1>

              <h2 className="text-[#00C48C] text-xl sm:text-2xl font-bold">
                Absolute protection for every transaction
              </h2>

              <div className="w-16 h-1.5 bg-[#84CC16] mt-4 mb-6"></div>

              <p className="text-gray-300 text-lg font-medium max-w-lg">
                Monies move, only when your terms are met.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1a2f63] rounded-full blur-3xl -z-0"></div>

              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Confident Professional"
                className="relative z-10 w-full max-w-md object-cover rounded-none lg:rounded-tl-[80px] lg:rounded-br-[80px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BUYER & SELLER TRUCE (Zig Zag Layout) --- */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Block A: BUYER TRUCE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side (Laptop Mockup) */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl transform -rotate-2 transition-transform group-hover:rotate-0"></div>
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop"
                alt="Laptop Interface"
                className="relative rounded-lg shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0F5935] text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                Create Truce Agreement
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-[900] text-[#0D1B3E]">
                  Buyer Truce
                </h2>
                <h3 className="text-[#0F5935] text-xl font-bold mt-1">
                  Pay With Confidence
                </h3>
              </div>

              <div className="border-l-4 border-[#00C48C] pl-4 py-1">
                <p className="text-lg font-bold text-gray-800">
                  Receive Exactly What You Agreed — Or Recall Your Money Back
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                With Truce, your payment isn't released until the seller
                delivers exactly as promised. If the agreed terms aren't met,
                you can recall your funds — no battles, no stress, no losses.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-[#0D1B3E]">
                  Why Buyers Trust us
                </h4>
                {[
                  "Funds held securely until you confirm satisfaction",
                  "Only release payment when terms are fulfilled",
                  "Full transaction visibility from start to finish",
                  "Ability to recall your money if the agreement is breached",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-0.5 rounded">
                      <Check
                        className="w-4 h-4 text-[#0F5935]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="font-bold text-[#0D1B3E] pt-2">
                Zero risk. Total control. Absolute peace of mind.
              </p>
            </div>
          </div>

          {/* Block B: SELLER TRUCE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side (Order 2 on mobile to keep text-image flow, but visually we swap cols) */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <h2 className="text-4xl font-[900] text-[#0D1B3E]">
                  Seller Truce
                </h2>
                <h3 className="text-[#0F5935] text-xl font-bold mt-1">
                  Deliver With Trust
                </h3>
              </div>

              <div className="border-l-4 border-[#00C48C] pl-4 py-1">
                <p className="text-lg font-bold text-gray-800">
                  See the Buyer's commitment before you transact and get paid
                  without disputes.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Serious buyers commit funds upfront to a secure Truce account
                proving they're ready to pay. Once you meet the agreed terms,
                payment is released to you — fast and securely.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-[#0D1B3E]">
                  Why Sellers choose Truce
                </h4>
                {[
                  "Verified buyer commitment before you deliver",
                  "Protection from payment fraud and chargebacks",
                  "Clear terms that prevent misunderstandings",
                  "Guaranteed payout when obligations are met",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-0.5 rounded">
                      <Check
                        className="w-4 h-4 text-[#0F5935]"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="font-bold text-[#0D1B3E] pt-2">
                No uncertainty. No wasted effort. Just secure business.
              </p>
            </div>

            {/* Image Side */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform rotate-2 transition-transform group-hover:rotate-0"></div>
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
                alt="Laptop Interface Seller"
                className="relative rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRUCE ADVANTAGE --- */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Circular Image & Headline */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20 translate-x-4 translate-y-4"></div>
                <img
                  src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop"
                  alt="Smiling Woman"
                  className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-8 border-white"
                />
              </div>

              <div className="space-y-3">
                <h2 className="text-4xl sm:text-5xl font-[900] text-[#0D1B3E] leading-tight">
                  Built to protect <br /> your Money
                </h2>
                <p className="text-gray-600 font-medium">
                  The ultimate protection layer for your digital commerce.
                </p>
                <p className="text-sm text-gray-500 max-w-md mx-auto lg:mx-0">
                  We're building the infrastructure that lets people transact
                  safely with anyone, from anywhere, turning every agreement
                  into a digital contract that holds funds invisibly.
                </p>
              </div>
            </div>

            {/* Right: Advantage Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-[900] text-[#0F5935]">
                  Truce Advantage
                </h2>
                <h3 className="text-2xl font-bold text-[#0D1B3E] mt-4 leading-tight">
                  Truce secures your payment until promises are kept — <br />
                  and returns your money if they're not.
                </h3>
              </div>

              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  Truce acts as a neutral digital escrow between both parties —
                  holding funds safely while the transaction is completed under
                  agreed conditions.
                </p>
                <p>
                  Truce keeps all transactions safe, until all parties fulfill
                  their obligations as captured in the agreement.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#0D1B3E] mb-2">
                    If those conditions are not met:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-500 font-bold">*</span>
                      Buyers can recall their money. Sellers get paid when they
                      deliver.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500 font-bold">*</span>
                      Balanced protection for both sides — the way transactions
                      should be.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <div className="w-1 h-12 bg-[#00C48C]"></div>
                <p className="text-[#0F5935] font-bold text-lg">
                  Join 10K+ people to protect <br />
                  their transactions with Truce
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/"
                  className="bg-[#0F5935] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#0b4629] transition-all shadow-lg hover:shadow-xl"
                >
                  Create Truce Agreement
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3.5 rounded-full font-bold text-[#0D1B3E] border border-[#0D1B3E] hover:bg-gray-50 transition-all"
                >
                  My Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
