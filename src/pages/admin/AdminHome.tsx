import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import {
  BarChart2,
  Users,
  Calendar,
  Map,
  Settings
} from 'lucide-react';

const AdminHome = () => {
  // Mock data for quick stats
  const quickStats = [
    { title: "Active Bookings", value: 127, change: "+12%", icon: <Calendar className="h-8 w-8 text-wanderlust-teal" /> },
    { title: "Active Destinations", value: 54, change: "+3", icon: <Map className="h-8 w-8 text-wanderlust-teal" /> },
    { title: "New Users", value: 239, change: "+18%", icon: <Users className="h-8 w-8 text-wanderlust-teal" /> },
    { title: "Revenue", value: "$24,389", change: "+8%", icon: <BarChart2 className="h-8 w-8 text-wanderlust-teal" /> }
  ];

  // Mock data for recent activities
  const recentActivities = [
    { 
      action: "Booking Created", 
      description: "New booking for Bali Beach Resort", 
      user: "Sophie Turner", 
      time: "10 minutes ago" 
    },
    { 
      action: "User Registered", 
      description: "New user registration", 
      user: "James Wilson", 
      time: "1 hour ago" 
    },
    { 
      action: "Review Posted", 
      description: "5-star review for Paris Adventure", 
      user: "Emma Johnson", 
      time: "3 hours ago" 
    },
    { 
      action: "Travel Guide Updated", 
      description: "Tokyo city guide updated", 
      user: "Admin", 
      time: "5 hours ago" 
    }
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome to the Wanderlust Admin Dashboard</p>
          <div className="mt-2 p-2 bg-yellow-100 border border-yellow-400 rounded-md">
            <p className="text-sm text-yellow-800">
              <strong>Notice:</strong> Login is temporarily disabled for development purposes.
            </p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                    <div className="flex items-baseline">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <span className="ml-2 text-xs font-medium text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div>{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Commonly used administrative actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a href="/admin/travel-guides" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
                  <Map className="h-6 w-6 mb-2 text-wanderlust-teal" />
                  <span className="text-sm font-medium">Manage Destinations</span>
                </a>
                <a href="/admin/bookings" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
                  <Calendar className="h-6 w-6 mb-2 text-wanderlust-teal" />
                  <span className="text-sm font-medium">View Bookings</span>
                </a>
                <a href="/admin/analytics" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
                  <BarChart2 className="h-6 w-6 mb-2 text-wanderlust-teal" />
                  <span className="text-sm font-medium">Analytics</span>
                </a>
                <a href="/admin/blogs" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
                  <Settings className="h-6 w-6 mb-2 text-wanderlust-teal" />
                  <span className="text-sm font-medium">Settings</span>
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Activities */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest system activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-wanderlust-teal mt-2 mr-3"></div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">{activity.action}</p>
                        <span className="ml-auto text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">by {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system health and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Server Status</p>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                  <p className="font-medium">Operational</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Database</p>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                  <p className="font-medium">Connected</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Last Backup</p>
                <p className="font-medium">Today, 03:45 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
