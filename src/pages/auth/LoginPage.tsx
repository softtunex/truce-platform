import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string) => {
    setLoading(true);
    await login(email);
    navigate(email.includes("admin") ? "/admin" : "/dashboard");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FB] p-6">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-md space-y-8 border border-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-[#0F5935]" />
          </div>
          <h2 className="text-3xl font-[900] text-[#0D1B3E]">Welcome Back</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Sign in to manage your Truce agreements.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleLogin("user@truce.com")}
            disabled={loading}
            className="w-full bg-[#0F5935] text-white py-4 rounded-xl font-bold hover:bg-[#0b4629] transition-all shadow-lg shadow-green-900/20 flex justify-center items-center gap-2"
          >
            {loading ? "..." : "Sign in as User"}
          </button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-bold uppercase">
              Admin Portal
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button
            onClick={() => handleLogin("admin@truce.com")}
            disabled={loading}
            className="w-full bg-[#0D1B3E] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 flex justify-center items-center gap-2"
          >
            <Lock className="w-4 h-4" />{" "}
            {loading ? "..." : "Sign in as Super Admin"}
          </button>
        </div>
      </div>
    </div>
  );
};
