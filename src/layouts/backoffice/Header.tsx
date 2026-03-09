import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun, Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white dark:bg-[#0D1B3E] border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-8 transition-colors duration-300">
      {/* Page Title (Breadcrumb placeholder) */}
      <div className="hidden md:block">
        <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
          Overview
        </h2>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          title="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Notifications */}
        <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#0D1B3E]"></span>
        </button>

        {/* Mobile: Simple User Initial */}
        <div className="w-10 h-10 rounded-full bg-[#0F5935] text-white flex items-center justify-center font-bold md:hidden">
          {user?.name.charAt(0)}
        </div>
      </div>
    </header>
  );
};
