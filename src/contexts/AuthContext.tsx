
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Mock admin user for demo purposes
const MOCK_ADMIN = {
  id: 1,
  name: "Admin User",
  email: "admin@wanderlust.com",
  role: "admin"
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TEMPORARY: Auto-authenticate for development purposes
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(MOCK_ADMIN);
  const [loading, setLoading] = useState<boolean>(false); // Set initial loading to false
  const navigate = useNavigate();

  // No need to check auth on component mount since we're auto-authenticated
  // This is TEMPORARY and should be reverted back when done testing

  const login = async (email: string, password: string): Promise<boolean> => {
    // Auto-success for any login attempt
    localStorage.setItem('wanderlust_user', JSON.stringify(MOCK_ADMIN));
    setUser(MOCK_ADMIN);
    setIsAuthenticated(true);
    
    toast({
      title: "Auto-login enabled",
      description: "Login is currently disabled for development purposes",
    });
    
    return true;
  };

  const logout = () => {
    // Logout still works normally
    localStorage.removeItem('wanderlust_user');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/admin/login');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
