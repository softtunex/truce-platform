import React, { useState } from "react";
import { TruceAssistant } from "./TruceAssistant";

export const AgreementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"create" | "login">("create");
  const [description, setDescription] = useState("");

  return (
    <section className="py-20 lg:py-24 px-6 bg-[#F8F9FB] relative overflow-hidden">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Column: Text & Organic Image --- */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-4">
              <h4 className="text-[#006633] font-bold text-sm tracking-tight">
                Create Smart Agreement
              </h4>
              <h2 className="text-5xl sm:text-[56px] font-[900] text-[#0D1B3E] leading-[1.05] tracking-tight">
                Trust is the <br />
                New currency
              </h2>
              <p className="text-gray-500 font-medium text-base leading-relaxed max-w-md">
                Activate a Truce Agreement and ensure your money stays safe
                until the terms are fulfilled. We turn promises into digital
                certainty.
              </p>
            </div>

            {/* Organic Shape Image Container */}
            <div className="relative group inline-block mt-4 w-fit">
              {/* Exact snippet you provided */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl group-hover:rounded-full transition-all duration-1000 z-10 relative bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=600"
                  alt="Human Trust"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700"
                />
              </div>

              {/* Blue Floating Card - Positioned relative to the blob */}
              <div className="absolute -bottom-4 -right-4 sm:-right-16 bg-[#103487] p-4 rounded-2xl shadow-xl max-w-[200px] z-20 animate-float-delayed border border-white/10">
                <p className="text-white text-[11px] font-bold leading-snug">
                  Your money moves only when your conditions are met
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Column: The Form Card --- */}
          <div className="w-full relative">
            <div className="bg-white rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden border border-white relative z-10">
              {/* Header / Tabs */}
              <div className="flex h-[64px]">
                <button
                  onClick={() => setActiveTab("create")}
                  className={`flex-1 flex items-center justify-center text-[13px] font-bold transition-all duration-300 ${
                    activeTab === "create"
                      ? "bg-[#0F5935] text-white"
                      : "bg-[#F8F9FB] text-gray-400 hover:bg-gray-100 border-b border-gray-100"
                  }`}
                >
                  Create Truce Agreement
                </button>
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 flex items-center justify-center text-[13px] font-bold transition-all duration-300 ${
                    activeTab === "login"
                      ? "bg-white text-[#0D1B3E] border-t-4 border-[#0F5935]"
                      : "bg-white text-[#0D1B3E] hover:bg-gray-50"
                  }`}
                >
                  Login
                </button>
              </div>

              {/* Form Content Area */}
              <div className="p-6 sm:p-8">
                {activeTab === "create" ? (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* Smart Assistant - Original Clean Style */}
                    <div className="mb-2">
                      <TruceAssistant onSuggest={setDescription} />
                    </div>

                    {/* Transaction Title */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                        Transaction Title{" "}
                        <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g Payment for Land in Lekki"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                        Description <span className="text-amber-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe terms..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300 resize-none"
                      />
                    </div>

                    {/* Grid for Amount & Contact to save space */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                          Amount <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Amount..."
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                          Email/Phone <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Contact info..."
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                        Schedule Truce (Duration){" "}
                        <span className="text-amber-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          placeholder="Start Date"
                          className="w-full bg-[#F4F6F8] border-none rounded-xl px-4 py-3 text-[11px] font-bold text-gray-500 focus:bg-white focus:ring-2 focus:ring-[#006633]/20 outline-none transition-all"
                        />
                        <input
                          type="text"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => (e.target.type = "text")}
                          placeholder="End Date"
                          className="w-full bg-[#F4F6F8] border-none rounded-xl px-4 py-3 text-[11px] font-bold text-gray-500 focus:bg-white focus:ring-2 focus:ring-[#006633]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end pt-2">
                      <button className="bg-[#0F5935] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#0b4629] transition-all shadow-lg shadow-green-900/10">
                        Proceed
                      </button>
                    </div>
                  </form>
                ) : (
                  // --- Login Form ---
                  <form
                    className="space-y-6 py-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="space-y-2 text-center sm:text-left">
                      <h3 className="text-2xl font-[900] text-[#0D1B3E]">
                        Welcome Back
                      </h3>
                      <p className="text-gray-500 font-medium text-xs">
                        Enter your credentials to access your dashboard.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Email Input */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>

                      {/* Password Input */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                            Password
                          </label>
                          <button className="text-[10px] font-bold text-[#0F5935] hover:underline">
                            Forgot Password?
                          </button>
                        </div>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <button className="w-full bg-[#0F5935] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#0b4629] transition-all shadow-lg shadow-green-900/10">
                      Sign in
                    </button>

                    <p className="text-center text-xs font-bold text-gray-400">
                      New to Truce?{" "}
                      <button
                        onClick={() => setActiveTab("create")}
                        className="text-[#0F5935] hover:underline"
                      >
                        Create Account
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
