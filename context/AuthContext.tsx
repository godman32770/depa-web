"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { loginUser, registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser(token);
  }, []);

  const login = async (email: string, password: string) => {
    const { token } = await loginUser(email, password);
    localStorage.setItem("token", token);
    document.cookie = `token=${token}; path=/`; // เพิ่ม token ใน cookies
    setUser(token);
  };

  const register = async (email: string, password: string) => {
    const { token } = await registerUser(email, password);
    localStorage.setItem("token", token);
    document.cookie = `token=${token}; path=/`; // เพิ่ม token ใน cookies
    setUser(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"; // ลบ cookie
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}