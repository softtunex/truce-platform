
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  onSuggest: (text: string) => void;
}

export const TruceAssistant: React.FC<Props> = ({ onSuggest }) => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleAskAI = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Draft professional and secure escrow agreement terms for: ${prompt}. Focus on protecting both buyer and seller. Keep it concise but legally sound for a digital trust platform.`,
      });
      onSuggest(response.text || '');
    } catch (e) {
      console.error("AI Error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-100 mb-8 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
        <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Smart Truce Assistant</label>
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="e.g. Buying 5 iPhone 15 Pro Max from a vendor on Twitter..."
          className="flex-1 bg-white border border-blue-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
        />
        <button 
          onClick={handleAskAI}
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg shadow-blue-500/20"
        >
          {loading ? 'Thinking...' : 'Draft Terms'}
        </button>
      </div>
    </div>
  );
};
