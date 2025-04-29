
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

// Icons
import {
  LayoutDashboard,
  BarChart2,
  Map,
  Image,
  Book,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
    { name: 'Travel Guides', href: '/admin/travel-guides', icon: Map },
    { name: 'Menus & Photos', href: '/admin/menus-photos', icon: Image },
    { name: 'Blogs & Reviews', href: '/admin/blogs', icon: Book },
    { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="admin-layout bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside 
        className={cn(
          "admin-sidebar w-64 bg-sidebar text-sidebar-foreground",
          mobileMenuOpen ? "active" : ""
        )}
      >
        <div className="h-full py-4 px-3 flex flex-col">
          {/* Brand */}
          <div className="mb-8 px-3 py-3">
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-wanderlust-teal flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">Wanderlust</span>
            </Link>
          </div>
          
          {/* Mobile menu close button */}
          <div className="md:hidden absolute top-4 right-4">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 mt-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-4 py-3 text-sidebar-foreground rounded-md transition-all",
                  isActive(item.href)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User/Settings */}
          <div className="mt-auto pt-4 border-t border-gray-700">
            <div className="px-4 py-3">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-9 w-9 rounded-full bg-wanderlust-teal flex items-center justify-center text-white">
                  {user?.name.charAt(0) || 'A'}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{user?.name || 'Admin User'}</p>
                  <p className="text-xs text-gray-300">{user?.email || 'admin@example.com'}</p>
                </div>
              </div>
            </div>

            <Link to="/admin/settings" className="group flex items-center px-4 py-3 mt-1 text-sidebar-foreground rounded-md hover:bg-sidebar-accent/50 transition-all">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>

            <Button 
              variant="ghost" 
              className="flex items-center w-full px-4 py-3 mt-1 text-sidebar-foreground rounded-md hover:bg-sidebar-accent/50 justify-start"
              onClick={logout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <header className="admin-header bg-white dark:bg-gray-800 shadow-sm z-10 px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold">
                {navigation.find(item => isActive(item.href))?.name || 'Admin Panel'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="/" target="_blank" className="text-sm text-blue-600 hover:underline">
                Visit Site
              </a>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="admin-main p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
