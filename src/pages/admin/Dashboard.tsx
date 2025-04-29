
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { BarChart, LineChart, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Line, Legend } from 'recharts';

const Dashboard = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for the charts and stats
  const visitorData = [
    { month: 'Jan', visitors: 1200 },
    { month: 'Feb', visitors: 1900 },
    { month: 'Mar', visitors: 2100 },
    { month: 'Apr', visitors: 2400 },
    { month: 'May', visitors: 2900 },
    { month: 'Jun', visitors: 3100 },
  ];

  const bookingData = [
    { month: 'Jan', bookings: 43 },
    { month: 'Feb', bookings: 52 },
    { month: 'Mar', bookings: 73 },
    { month: 'Apr', bookings: 89 },
    { month: 'May', bookings: 103 },
    { month: 'Jun', bookings: 117 },
  ];

  const recentBookings = [
    { id: 1, name: 'Sophie Turner', destination: 'Bali Beach Resort', date: '2023-06-25', status: 'Confirmed' },
    { id: 2, name: 'James Wilson', destination: 'Paris Luxury Apartment', date: '2023-06-22', status: 'Pending' },
    { id: 3, name: 'Emma Johnson', destination: 'Tokyo Urban Hotel', date: '2023-06-20', status: 'Confirmed' },
    { id: 4, name: 'Michael Brown', destination: 'New York City Loft', date: '2023-06-18', status: 'Cancelled' },
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        {/* Welcome message */}
        <div>
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Visitors
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">12.6K</h2>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    +14%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">478</h2>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    +21%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Active Guides
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">32</h2>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    +8%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Blog Posts
                </p>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">96</h2>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    +3
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Visitors Overview</CardTitle>
              <CardDescription>Website traffic over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={visitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="visitors" 
                      stroke="#0C9DAE" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Booking Statistics</CardTitle>
              <CardDescription>Monthly booking trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bookings" fill="#0C9DAE" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest booking activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Destination</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="p-3">{booking.name}</td>
                      <td className="p-3">{booking.destination}</td>
                      <td className="p-3">{booking.date}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
