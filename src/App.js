
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/Travel";
import StayPage from "./pages/Stay";
import BlogPage from "./pages/Blog";
import AdminLogin from "./pages/AdminLogin";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import Analytics from "./admin/Analytics";
import ContentManagement from "./admin/ContentManagement";
import Users from "./admin/Users";
import Bookings from "./admin/Bookings";

import NotFound from "./pages/NotFound";

// Auth Context Provider
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/content" element={<ContentManagement />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/bookings" element={<Bookings />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
