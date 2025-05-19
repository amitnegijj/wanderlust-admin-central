
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
import StayPage from "./pages/StayPage";
import BlogPage from "./pages/BlogPage";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminTravelGuides from "./pages/admin/TravelGuides";
import AdminMenuPhotos from "./pages/admin/MenuPhotos";
import AdminBlogs from "./pages/admin/Blogs";
import AdminBookings from "./pages/admin/Bookings";

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
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/travel-guides" element={<AdminTravelGuides />} />
            <Route path="/admin/menus-photos" element={<AdminMenuPhotos />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
