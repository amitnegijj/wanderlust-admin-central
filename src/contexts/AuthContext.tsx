
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Check if user is already logged in on component mount
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('wanderlust_user');
      
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true);
      
      // In a real app, this would be an API call to verify credentials
      // For demo purposes, we'll just check against hardcoded values
      if (email === "admin@wanderlust.com" && password === "admin123") {
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        localStorage.setItem('wanderlust_user', JSON.stringify(MOCK_ADMIN));
        setUser(MOCK_ADMIN);
        setIsAuthenticated(true);
        
        toast({
          title: "Login successful",
          description: "Welcome back to Wanderlust Admin!",
        });
        
        return true;
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      toast({
        title: "Login error",
        description: "An error occurred during login",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
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
