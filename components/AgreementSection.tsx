// import React, { useState } from "react";
// import { TruceAssistant } from "./TruceAssistant.tsx";

// export const AgreementSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"create" | "login">("create");
//   const [description, setDescription] = useState("");

//   return (
//     <section className="py-24 md:py-32 px-6 bg-[#F8F9FB] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
//         {/* Left Column: Text Content and Portrait */}
//         <div className="flex-1 space-y-12">
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-[44px] font-black text-[#0D1B3E] leading-[1.1] tracking-tight">
//               What other way to make <br /> secure payments
//             </h2>
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-[#0D1B3E]">
//                 Activate a Truce Agreement, your money stays safe until the job
//                 is done
//               </h3>
//               <p className="text-slate-500 leading-relaxed text-base max-w-xl">
//                 Truce transforms trust into a digital product. Allowing
//                 individuals or business create a Truce Agreement — a smart
//                 digital contract that governs a transaction between a buyer and
//                 a seller.
//               </p>
//             </div>
//           </div>

//           {/* Woman Portrait - From user path */}
//           <div className="relative">
//             <div className="w-48 h-48 md:w-64 md:h-64 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
//               <img
//                 src="/assets/images/francis-odeyemi--LK4GItKS7M-unsplash.jpg"
//                 alt="User Portrait"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   (e.target as HTMLImageElement).src =
//                     "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=600";
//                 }}
//               />
//             </div>
//           </div>

//           {/* Bottom Left Information Section */}
//           <div className="space-y-8 max-w-xl">
//             <div className="space-y-4">
//               <h4 className="text-2xl md:text-3xl font-black text-[#0D1B3E] leading-tight">
//                 Protect your transactions with Truce digital trust
//               </h4>
//               <div className="space-y-3">
//                 <p className="text-sm font-bold text-[#0D1B3E]">
//                   Why close a deal or transaction without protecting your money?
//                 </p>
//                 <p className="text-slate-500 text-sm font-medium leading-relaxed">
//                   We've built our features and trust around what matters most —
//                   helping you stay ahead ensuring your money safe and only
//                   released when your terms are met.
//                 </p>
//               </div>
//             </div>

//             {/* The Blue Pill "LEARN MORE" button */}
//             <div className="pt-2">
//               <button className="bg-[#004B8D] text-white px-14 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#003d73] transition-all shadow-xl shadow-blue-900/10">
//                 LEARN MORE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Agreement Image positioned BEHIND the card */}
//         <div className="flex-1 w-full max-w-2xl relative mt-16 lg:mt-0">
//           {/* Agreement Illustration: Positioned AT THE BACK of the form */}
//           <div className="absolute md:-left-64 top-1/2 -translate-y-1/2 z-0 w-72 md:w-96 pointer-events-none sm:hidden md:block">
//             <img
//               src="/assets/images/truce-agreement.png"
//               alt="Agreement Illustration"
//               className="w-full h-auto opacity-90 drop-shadow-2xl"
//               onError={(e) => {
//                 // Fallback to avoid "ugly" broken image if the local asset is missing
//                 (e.target as HTMLImageElement).src =
//                   "https://api.dicebear.com/7.x/shapes/svg?seed=truce-overlay";
//                 (e.target as HTMLImageElement).className =
//                   "w-40 h-40 opacity-10 blur-sm";
//               }}
//             />
//           </div>

//           {/* The Main Card (With higher z-index to stay on top) */}
//           <div className="bg-white rounded-[60px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.12)] border border-white overflow-hidden relative z-10">
//             {/* Tab Header */}
//             <div className="flex">
//               <button
//                 onClick={() => setActiveTab("create")}
//                 className={`flex-1 py-10 text-[11px] font-black tracking-[0.25em] uppercase transition-all ${
//                   activeTab === "create"
//                     ? "bg-[#006633] text-white"
//                     : "text-slate-400 bg-white hover:bg-slate-50"
//                 }`}
//               >
//                 Create Truce Agreement
//               </button>
//               <button
//                 onClick={() => setActiveTab("login")}
//                 className={`flex-1 py-10 text-[11px] font-black tracking-[0.25em] uppercase transition-all ${
//                   activeTab === "login"
//                     ? "bg-[#006633] text-white"
//                     : "text-slate-400 bg-white hover:bg-slate-50"
//                 }`}
//               >
//                 Login
//               </button>
//             </div>

//             <div className="p-8 md:p-14 space-y-8">
//               {activeTab === "create" ? (
//                 <>
//                   <TruceAssistant onSuggest={(val) => setDescription(val)} />

//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                       Transaction Title (Enter your Terms & Conditions){" "}
//                       <span className="text-amber-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="e.g Payment for Three plots of Land in Lekki, Lagos"
//                       className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-green-500/5 focus:border-[#006633] outline-none transition-all placeholder:text-slate-300 font-medium"
//                     />
//                   </div>

//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                       Description <span className="text-amber-500">*</span>
//                     </label>
//                     <textarea
//                       rows={4}
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       placeholder="Describe the terms of the agreement..."
//                       className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-green-500/5 focus:border-[#006633] outline-none transition-all placeholder:text-slate-300 font-medium leading-relaxed"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-3">
//                       <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                         Amount <span className="text-amber-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter Amount..."
//                         className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-green-500/5 focus:border-[#006633] outline-none transition-all font-medium"
//                       />
//                     </div>
//                     <div className="space-y-3">
//                       <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                         Contact Info <span className="text-amber-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Email or Whatsapp..."
//                         className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-green-500/5 focus:border-[#006633] outline-none transition-all font-medium"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                       Schedule Truce ( Set duration ){" "}
//                       <span className="text-amber-500">*</span>
//                     </label>
//                     <div className="flex gap-4">
//                       <input
//                         type="date"
//                         className="flex-1 bg-slate-100 border-none rounded-2xl px-5 py-4 text-[10px] font-bold text-slate-400 focus:bg-white focus:ring-2 focus:ring-green-500/10 outline-none transition-all"
//                       />
//                       <input
//                         type="date"
//                         className="flex-1 bg-slate-100 border-none rounded-2xl px-5 py-4 text-[10px] font-bold text-slate-400 focus:bg-white focus:ring-2 focus:ring-green-500/10 outline-none transition-all"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex justify-end pt-6">
//                     <button className="bg-[#004D2A] text-white px-14 py-3 rounded-[22px] font-black text-sm hover:bg-green-900 transition-all shadow-xl shadow-emerald-900/20">
//                       Proceed
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <div className="py-12 space-y-10 animate-fade-in">
//                   <div className="text-center space-y-2">
//                     <h3 className="text-3xl font-black text-[#0D1B3E]">
//                       Welcome Back
//                     </h3>
//                     <p className="text-sm text-slate-400 font-medium">
//                       Log in to manage your Truce agreements
//                     </p>
//                   </div>

//                   <div className="space-y-6">
//                     <div className="space-y-3">
//                       <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                         Email or Phone Number
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your contact info"
//                         className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-green-500/5 focus:border-[#006633] outline-none transition-all"
//                       />
//                     </div>

//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
//                           Password
//                         </label>
//                         <button className="text-[10px] font-bold text-[#006633] uppercase hover:underline">
//                           Forgot password?
//                         </button>
//                       </div>
//                       <input
//                         type="password"
//                         placeholder="••••••••"
//                         className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-green-500/5 focus:border-[#006633] outline-none transition-all"
//                       />
//                     </div>
//                   </div>

//                   <div className="pt-4">
//                     <button className="bg-[#006633] text-white w-full py-5 rounded-[24px] font-black text-sm hover:bg-green-800 transition-all shadow-xl shadow-emerald-900/20">
//                       Login to Truce
//                     </button>
//                     <p className="text-center text-[11px] font-bold text-slate-400 mt-10 uppercase tracking-[0.2em]">
//                       Don't have an account?{" "}
//                       <span
//                         className="text-[#006633] cursor-pointer hover:underline"
//                         onClick={() => setActiveTab("create")}
//                       >
//                         Create one today
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState } from "react";
import { TruceAssistant } from "./TruceAssistant.tsx";

export const AgreementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"create" | "login">("create");
  const [description, setDescription] = useState("");

  return (
    <section className="py-24 md:py-32 px-6 bg-truce-slate-50 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-truce-green-light/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
        {/* Left Column: Brand Message */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-truce-green-light rounded-full">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-truce-green-dark">
                Smart Contracts
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-[950] text-truce-navy leading-[1.05] tracking-tighter">
              Trust is the <br /> New Currency
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg font-medium">
              Activate a Truce Agreement and ensure your money stays safe until
              the terms are fulfilled. We turn promises into digital certainty.
            </p>
          </div>

          {/* Organic Portrait Component */}
          <div className="relative group">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-8 border-white group-hover:rounded-full transition-all duration-1000">
              <img
                src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=600"
                alt="Human Trust"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700"
              />
            </div>
            {/* Floating Trust Indicator */}
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-3xl shadow-xl animate-float border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-truce-green-light rounded-2xl flex items-center justify-center text-truce-green">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">
                    Verification
                  </p>
                  <p className="text-sm font-bold text-truce-navy">
                    Payment Locked
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Transaction Engine Card */}
        <div className="flex-[1.2] w-full max-w-2xl relative">
          <div className="bg-white rounded-6xl shadow-truce border border-white relative z-10 overflow-hidden">
            {/* Action Tabs */}
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setActiveTab("create")}
                className={`flex-1 py-8 text-[11px] font-black tracking-[0.2em] uppercase transition-all ${
                  activeTab === "create"
                    ? "text-truce-green border-b-2 border-truce-green"
                    : "text-slate-400 hover:bg-slate-50"
                }`}
              >
                Draft Agreement
              </button>
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-8 text-[11px] font-black tracking-[0.2em] uppercase transition-all ${
                  activeTab === "login"
                    ? "text-truce-green border-b-2 border-truce-green"
                    : "text-slate-400 hover:bg-slate-50"
                }`}
              >
                Access Portal
              </button>
            </div>

            <div className="p-10 md:p-14 space-y-8">
              {activeTab === "create" ? (
                <>
                  <TruceAssistant onSuggest={(val) => setDescription(val)} />

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Transaction Goal
                      </label>
                      <input
                        type="text"
                        placeholder="What are you securing today?"
                        className="w-full bg-truce-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-truce-green/5 focus:bg-white focus:border-truce-green outline-none transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Digital Terms
                      </label>
                      <textarea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Detailed conditions for release..."
                        className="w-full bg-truce-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-truce-green/5 focus:bg-white focus:border-truce-green outline-none transition-all font-medium leading-relaxed"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Value (₦)
                        </label>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full bg-truce-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-truce-green/5 focus:bg-white focus:border-truce-green outline-none transition-all font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Counterparty
                        </label>
                        <input
                          type="text"
                          placeholder="@handle or email"
                          className="w-full bg-truce-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:ring-4 focus:ring-truce-green/5 focus:bg-white focus:border-truce-green outline-none transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-truce-green text-white py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-xs shadow-truce-green hover:bg-truce-green-dark transition-all transform hover:-translate-y-1">
                    Secure This Deal
                  </button>
                </>
              ) : (
                <div className="py-20 text-center space-y-8 animate-fade-in">
                  <div className="w-20 h-20 bg-truce-green-light rounded-full mx-auto flex items-center justify-center text-truce-green">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-truce-navy">
                      Secure Entry
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Log in to manage your active agreements.
                    </p>
                  </div>
                  <button className="w-full bg-truce-navy text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-truce-navy-dark transition-all">
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
