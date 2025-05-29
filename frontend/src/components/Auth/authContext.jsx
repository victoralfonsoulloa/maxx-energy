import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

const login = async (email, password) => {
  console.log("Trying login with:", email, password); // 🔍 Debug log
  try {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log("Login response:", data); // 🔍 Debug log

    if (!response.ok) {
      setError(data.error || "Login failed");
      return { success: false, error: data.error };
    }

    localStorage.setItem("token", data.token);
    setIsAuthenticated(true);
    setError(null);
    return { success: true };

  } catch (err) {
    console.error("Login error:", err);
    setError("Network error");
    return { success: false, error: "Network error" };
  }
};


  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
