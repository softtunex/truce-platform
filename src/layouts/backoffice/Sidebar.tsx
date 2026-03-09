import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  ShieldCheck,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";

import { cn } from "../../lib/utils";

export const Sidebar = () => {
  const { user, logout } = useAuth();

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { name: "My Agreements", path: "/dashboard/agreements", icon: ShieldCheck },
    { name: "Wallet", path: "/dashboard/wallet", icon: Wallet },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="h-screen w-64 flex flex-col border-r fixed left-0 top-0 transition-colors duration-300 z-50 bg-white dark:bg-[#0D1B3E] border-gray-200 dark:border-gray-800">
      {/* Brand Logo */}
      <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-2xl font-[900] tracking-tight text-[#0D1B3E] dark:text-white">
          Truce<span className="text-[#0F5935] dark:text-[#00C48C]">.</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all",
                isActive
                  ? "bg-[#0F5935] text-white shadow-lg shadow-green-900/20 dark:bg-[#00C48C] dark:text-[#0D1B3E]"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white",
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-4 px-2">
          <img
            src={user?.avatar}
            alt="User"
            className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white/10"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate text-gray-900 dark:text-white">
              {user?.name}
            </p>
            <p className="text-xs opacity-60 truncate text-gray-500 dark:text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors text-xs font-bold uppercase tracking-wide"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </div>
  );
};
