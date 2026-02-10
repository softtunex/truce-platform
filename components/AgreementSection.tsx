import React, { useState, useEffect } from "react";
// Assuming TruceAssistant exists in your project.
import { TruceAssistant } from "./TruceAssistant";

// Define the steps for the wizard
type WizardStep = 1 | 2 | 3 | 4;

export const AgreementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"create" | "login">("create");

  // Wizard State
  const [step, setStep] = useState<WizardStep>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);

  // Form Data State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: "",
    email: "", // User's email
    startDate: "",
    endDate: "",
    // Auth Fields
    password: "",
    otp: "",
    fullName: "",
    phone: "",
    // Seller/Counterparty Fields
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    trucePin: "",
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Logic to handle "Continue" button clicks
  const handleContinue = async () => {
    // Validation check (simple)
    if (step === 1 && !formData.email) return;

    setIsLoading(true);

    // Simulate API Delay
    setTimeout(() => {
      setIsLoading(false);

      if (step === 1) {
        // MOCK LOGIC: Check if email exists
        if (formData.email.toLowerCase().includes("old")) {
          setIsExistingUser(true);
        } else {
          setIsExistingUser(false);
        }
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        setStep(4);
      }
    }, 1000);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as WizardStep);
  };

  // Reset wizard if tab changes
  useEffect(() => {
    if (activeTab === "login") {
      setStep(1);
    }
  }, [activeTab]);

  return (
    <section className="py-20 lg:py-24 px-6 bg-[#F8F9FB] relative overflow-hidden">
      {/* Increased max-width for wider appearance */}
      <div className="max-w-[1280px] mx-auto">
        {/* Changed grid ratio: Text takes 5 cols, Form takes 7 cols (Wider form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* --- Left Column: Text & Organic Image (Col-span-5) --- */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <div className="space-y-4">
              <h4 className="text-[#006633] font-bold text-sm tracking-tight">
                Create Smart Agreement
              </h4>
              <h2 className="text-5xl sm:text-5xl font-[900] text-[#0D1B3E] leading-[1.05] tracking-tight">
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
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-8 border-white group-hover:rounded-full transition-all duration-1000 z-10 relative bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=600"
                  alt="Human Trust"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700"
                />
              </div>

              {/* Blue Floating Card */}
              <div className="absolute -bottom-4 -right-4 sm:-right-16 bg-[#103487] p-4 rounded-2xl shadow-xl max-w-[200px] z-20 animate-float-delayed border border-white/10">
                <p className="text-white text-[11px] font-bold leading-snug">
                  Your money moves only when your conditions are met
                </p>
              </div>
            </div>
          </div>

          {/* --- Right Column: The Form Card (Col-span-7) --- */}
          <div className="w-full relative lg:col-span-7">
            {/* Added shadow-2xl for more 'pop' and removed overflow-hidden to let shadows breathe if needed */}
            <div className="bg-white rounded-[40px] shadow-2xl border border-white relative z-10 overflow-hidden">
              {/* Header / Tabs */}
              <div className="flex h-[72px]">
                <button
                  onClick={() => setActiveTab("create")}
                  className={`flex-1 flex items-center justify-center text-[14px] font-bold transition-all duration-300 ${
                    activeTab === "create"
                      ? "bg-[#0F5935] text-white"
                      : "bg-[#F8F9FB] text-gray-400 hover:bg-gray-100 border-b border-gray-100"
                  }`}
                >
                  Create Truce Agreement
                </button>
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 flex items-center justify-center text-[14px] font-bold transition-all duration-300 ${
                    activeTab === "login"
                      ? "bg-white text-[#0D1B3E] border-t-4 border-[#0F5935]"
                      : "bg-white text-[#0D1B3E] hover:bg-gray-50"
                  }`}
                >
                  Login
                </button>
              </div>

              {/* Form Content Area - Increased Padding */}
              <div className="p-8 sm:p-10 min-h-[550px] flex flex-col">
                {activeTab === "create" ? (
                  <div className="flex-1 flex flex-col">
                    {/* Progress Indicator */}
                    {step < 4 && (
                      <div className="flex gap-2 mb-8">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? "w-10 bg-[#0F5935]" : "w-4 bg-gray-200"}`}
                          ></div>
                        ))}
                      </div>
                    )}

                    {/* --- STEP 1: Transaction Details --- */}
                    {step === 1 && (
                      <div className="space-y-5 animate-fade-in">
                        {/* TruceAssistant Component */}
                        <div className="mb-2">
                          <TruceAssistant
                            onSuggest={(val) =>
                              setFormData({ ...formData, description: val })
                            }
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                            Transaction Title{" "}
                            <span className="text-amber-500">*</span>
                          </label>
                          <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g Payment for iPhone 15"
                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                            Description{" "}
                            <span className="text-amber-500">*</span>
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Describe terms..."
                            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300 resize-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                              Amount <span className="text-amber-500">*</span>
                            </label>
                            <input
                              name="amount"
                              value={formData.amount}
                              onChange={handleChange}
                              type="number"
                              placeholder="₦ 0.00"
                              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                              Your Email{" "}
                              <span className="text-amber-500">*</span>
                            </label>
                            <input
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              type="email"
                              placeholder="old@test.com for existing"
                              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                            />
                          </div>
                        </div>

                        {/* --- NEW SCHEDULE TRUCE SECTION --- */}
                        <div className="space-y-1.5 pt-1">
                          <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 text-[#0F5935]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            Schedule Truce (Duration){" "}
                            <span className="text-amber-500">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-5">
                            <input
                              name="startDate"
                              value={formData.startDate}
                              onChange={handleChange}
                              type="text"
                              onFocus={(e) => (e.target.type = "date")}
                              onBlur={(e) => (e.target.type = "text")}
                              placeholder="Start Date"
                              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-[13px] font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                            />
                            <input
                              name="endDate"
                              value={formData.endDate}
                              onChange={handleChange}
                              type="text"
                              onFocus={(e) => (e.target.type = "date")}
                              onBlur={(e) => (e.target.type = "text")}
                              placeholder="End Date"
                              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-[13px] font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* --- STEP 2: Identity Check --- */}
                    {step === 2 && (
                      <div className="space-y-6 animate-fade-in py-4">
                        <div className="text-center space-y-2">
                          <h3 className="text-3xl font-[900] text-[#0D1B3E]">
                            {isExistingUser ? "Welcome Back" : "Create Account"}
                          </h3>
                          <p className="text-gray-500 text-sm font-medium">
                            {isExistingUser
                              ? `Account found for ${formData.email}. Verify to continue.`
                              : `Setting up a new account for ${formData.email}.`}
                          </p>
                        </div>

                        {isExistingUser ? (
                          // Existing User: Password + OTP
                          <div className="space-y-5">
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                Password
                              </label>
                              <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                OTP (Sent to email)
                              </label>
                              <input
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                type="text"
                                placeholder="123456"
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all tracking-widest"
                              />
                            </div>
                          </div>
                        ) : (
                          // New User: Name & Phone & Create Password
                          <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                              <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                  Full Name{" "}
                                  <span className="text-amber-500">*</span>
                                </label>
                                <input
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  type="text"
                                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                  Phone{" "}
                                  <span className="text-amber-500">*</span>
                                </label>
                                <input
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  type="tel"
                                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                                />
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                Create Password{" "}
                                <span className="text-amber-500">*</span>
                              </label>
                              <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* --- STEP 3: Seller/Counterparty Details --- */}
                    {step === 3 && (
                      <div className="space-y-6 animate-fade-in py-4">
                        <div className="text-center space-y-2">
                          <h3 className="text-3xl font-[900] text-[#0D1B3E]">
                            Counterparty Details
                          </h3>
                          <p className="text-gray-500 text-sm font-medium">
                            Who are you transacting with?
                          </p>
                        </div>

                        <div className="space-y-5">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                              Counterparty Name{" "}
                              <span className="text-amber-500">*</span>
                            </label>
                            <input
                              name="sellerName"
                              value={formData.sellerName}
                              onChange={handleChange}
                              type="text"
                              className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                Email <span className="text-amber-500">*</span>
                              </label>
                              <input
                                name="sellerEmail"
                                value={formData.sellerEmail}
                                onChange={handleChange}
                                type="email"
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                                Phone <span className="text-amber-500">*</span>
                              </label>
                              <input
                                name="sellerPhone"
                                value={formData.sellerPhone}
                                onChange={handleChange}
                                type="tel"
                                className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
                              />
                            </div>
                          </div>

                          {/* Truce PIN Field */}
                          <div className="pt-2">
                            <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl space-y-3">
                              <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide flex items-center justify-center gap-2">
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                Create Truce PIN
                              </label>
                              <input
                                name="trucePin"
                                value={formData.trucePin}
                                onChange={handleChange}
                                type="password"
                                maxLength={4}
                                placeholder="4-digit PIN"
                                className="w-full bg-white border border-amber-200 rounded-xl px-4 py-4 text-lg font-bold tracking-[0.5em] focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 outline-none transition-all text-center"
                              />
                              <p className="text-[11px] text-amber-800 leading-tight text-center">
                                You will need this PIN to release the funds
                                later.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* --- STEP 4: Success State --- */}
                    {step === 4 && (
                      <div className="flex flex-col h-full animate-fade-in text-center space-y-8 pt-6">
                        <div className="w-20 h-20 mx-auto bg-[#E6F3EC] rounded-full flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-[#0F5935]"
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

                        <div className="space-y-1 border-b border-gray-100 pb-6">
                          <h3 className="text-3xl font-[900] text-[#0D1B3E]">
                            Agreement Pending
                          </h3>
                          <p className="text-gray-500 text-base">
                            Sent to <strong>{formData.sellerName}</strong> for
                            approval.
                          </p>
                        </div>

                        {/* Agreement Summary Card */}
                        <div className="bg-gray-50 rounded-2xl p-6 text-left space-y-5 border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-[10px] uppercase font-bold text-gray-400">
                                Buyer
                              </p>
                              <p className="text-sm font-bold text-[#0D1B3E]">
                                {formData.email}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] uppercase font-bold text-gray-400">
                                Date
                              </p>
                              <p className="text-sm font-bold text-[#0D1B3E]">
                                {new Date().toLocaleDateString()}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] uppercase font-bold text-gray-400">
                              Title
                            </p>
                            <p className="text-base font-bold text-[#0D1B3E]">
                              {formData.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Duration: {formData.startDate || "N/A"} to{" "}
                              {formData.endDate || "N/A"}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-500">
                              Total Locked
                            </span>
                            <span className="text-2xl font-[900] text-[#0F5935]">
                              ₦ {formData.amount}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setStep(1);
                            setFormData({
                              ...formData,
                              title: "",
                              description: "",
                              amount: "",
                              startDate: "",
                              endDate: "",
                            });
                          }}
                          className="text-[#0F5935] font-bold text-sm uppercase tracking-wider hover:underline pt-2"
                        >
                          Start New Agreement
                        </button>
                      </div>
                    )}

                    {/* Navigation Buttons (Hidden on Step 4) */}
                    {step < 4 && (
                      <div className="flex gap-4 pt-8 mt-auto">
                        {step > 1 && (
                          <button
                            onClick={handleBack}
                            className="px-8 py-4 rounded-xl font-bold text-sm text-gray-500 hover:bg-gray-100 transition-all"
                          >
                            Back
                          </button>
                        )}
                        <button
                          onClick={handleContinue}
                          disabled={isLoading}
                          className="flex-1 bg-[#0F5935] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0b4629] transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-2 transform active:scale-95"
                        >
                          {isLoading ? (
                            <span className="animate-pulse">Processing...</span>
                          ) : step === 3 ? (
                            "Create & Send Agreement"
                          ) : (
                            "Continue"
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  // --- Login Tab (Standard Login) ---
                  <form
                    className="space-y-8 py-8"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="space-y-3 text-center sm:text-left">
                      <h3 className="text-3xl font-[900] text-[#0D1B3E]">
                        Welcome Back
                      </h3>
                      <p className="text-gray-500 font-medium text-sm">
                        Enter your credentials to access your dashboard.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-[#0D1B3E] uppercase tracking-wide">
                            Password
                          </label>
                          <button className="text-[11px] font-bold text-[#0F5935] hover:underline">
                            Forgot Password?
                          </button>
                        </div>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-white border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-medium focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <button className="w-full bg-[#0F5935] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#0b4629] transition-all shadow-xl shadow-green-900/20 transform active:scale-95">
                      Sign in
                    </button>
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
