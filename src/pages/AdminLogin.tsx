
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // Auto-redirect to admin page
  useEffect(() => {
    // Short timeout to allow any state changes to propagate
    const redirectTimer = setTimeout(() => {
      navigate('/admin');
    }, 10);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login Bypassed</CardTitle>
            <CardDescription>
              Login has been temporarily disabled for development purposes. Redirecting to admin dashboard...
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center p-4">
            <div className="animate-pulse h-4 w-20 bg-gray-200 rounded mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
