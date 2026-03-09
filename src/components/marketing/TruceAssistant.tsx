import React, { useState } from "react";
// import { GoogleGenAI } from "@google/genai"; // Ensure you have this installed

interface Props {
  onSuggest: (text: string) => void;
}

export const TruceAssistant: React.FC<Props> = ({ onSuggest }) => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleAskAI = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      // NOTE: Ensure you handle the API key securely in a real env
      // const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_KEY || '' });
      // const response = await ai.models.generateContent({
      //   model: 'gemini-1.5-flash',
      //   contents: `Draft professional and secure escrow agreement terms for: ${prompt}. Focus on protecting both buyer and seller. Keep it concise but legally sound for a digital trust platform.`,
      // });
      // onSuggest(response.text || '');

      // Simulating response for UI check since I don't have your key:
      setTimeout(() => {
        onSuggest(
          "Payment shall be held in escrow until delivery is verified. The seller agrees to provide a valid tracking number within 24 hours.",
        );
        setLoading(false);
      }, 1500);
    } catch (e) {
      console.error("AI Error:", e);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#E6F3EC] p-4 rounded-2xl border border-[#ccebd8] mb-6 relative overflow-hidden">
      {/* Label Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006633]"></span>
        </div>
        <label className="text-[10px] font-[900] text-[#006633] tracking-widest">
          Truce AI Assistant
        </label>
      </div>

      {/* Input Group */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="e.g. Buying 5 iPhones from a vendor..."
          className="flex-1 bg-white border border-[#b8dbc3] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-medium text-[#0D1B3E] placeholder:text-gray-400 focus:ring-2 focus:ring-[#006633]/20 focus:border-[#006633] outline-none transition-all"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAskAI()}
        />
        <button
          onClick={handleAskAI}
          disabled={loading}
          className="text-[#0F5935] hover:text-white hover:bg-[#004d26] px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#004d26] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md shadow-green-900/10 whitespace-nowrap flex items-center justify-center gap-2 border border-[#0F5935]"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-3 w-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Thinking...
            </>
          ) : (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Draft Terms
            </>
          )}
        </button>
      </div>
    </div>
  );
};
