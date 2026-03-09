import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useAuth } from "../../context/AuthContext";

export const UserLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center text-[#0F5935] font-bold dark:bg-[#020617] dark:text-[#00C48C]">
        Loading Truce...
      </div>
    );
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="flex min-h-screen bg-[#F8F9FB] dark:bg-[#020617] transition-colors duration-300">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col h-screen">
        {/* Top Header */}
        <Header />

        {/* Scrollable Content */}
        <main className="flex-1 p-8 lg:p-12 overflow-y-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
