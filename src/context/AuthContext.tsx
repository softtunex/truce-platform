import React, { createContext, useContext, useState, useEffect } from "react";
import { User, UserRole, AuthState } from "../types/auth";

interface AuthContextType extends AuthState {
  login: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Check if user is already logged in (Persist on refresh)
  useEffect(() => {
    const storedUser = localStorage.getItem("truce_user");
    if (storedUser) {
      setState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string) => {
    // SIMULATE API CALL
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        let role: UserRole = "user";
        let name = "Olatunji Buari";

        // MOCK LOGIC: Admin Detection
        if (email.toLowerCase().includes("admin")) {
          role = "admin";
          name = "Super Admin";
        }

        const mockUser: User = {
          id: "1",
          name,
          email,
          role,
          avatar: `https://ui-avatars.com/api/?name=${name.replace(" ", "+")}&background=random`,
        };

        localStorage.setItem("truce_user", JSON.stringify(mockUser));
        setState({ user: mockUser, isAuthenticated: true, isLoading: false });
        resolve();
      }, 800);
    });
  };

  const logout = () => {
    localStorage.removeItem("truce_user");
    setState({ user: null, isAuthenticated: false, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
