
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { BarChart, LineChart, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Line, Legend, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for analytics
  const visitorData = [
    { month: 'Jan', visitors: 1200 },
    { month: 'Feb', visitors: 1900 },
    { month: 'Mar', visitors: 2100 },
    { month: 'Apr', visitors: 2400 },
    { month: 'May', visitors: 2900 },
    { month: 'Jun', visitors: 3100 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 65 },
    { name: 'Mobile', value: 30 },
    { name: 'Tablet', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">View detailed analytics and reports</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Visitors
                </p>
                <h2 className="text-3xl font-bold">12.6K</h2>
                <p className="text-xs text-green-600">+14% from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Conversion Rate
                </p>
                <h2 className="text-3xl font-bold">5.2%</h2>
                <p className="text-xs text-green-600">+0.8% from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Avg. Session Duration
                </p>
                <h2 className="text-3xl font-bold">3m 42s</h2>
                <p className="text-xs text-red-600">-12s from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Bounce Rate
                </p>
                <h2 className="text-3xl font-bold">32.8%</h2>
                <p className="text-xs text-green-600">-2.3% from last month</p>
              </div>
            </CardContent>
          </Card>
        </div>

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
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>User device types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
