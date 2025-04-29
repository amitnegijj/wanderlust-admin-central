
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LineChart,
  BarChart,
  PieChart,
  ResponsiveContainer,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';

const Analytics = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for charts
  const trafficData = [
    { name: 'Jan', organic: 4000, direct: 2400, referral: 1800, social: 1200 },
    { name: 'Feb', organic: 3000, direct: 1398, referral: 1600, social: 900 },
    { name: 'Mar', organic: 2000, direct: 9800, referral: 2200, social: 3000 },
    { name: 'Apr', organic: 2780, direct: 3908, referral: 2000, social: 1500 },
    { name: 'May', organic: 1890, direct: 4800, referral: 2500, social: 1700 },
    { name: 'Jun', organic: 2390, direct: 3800, referral: 2800, social: 2100 },
    { name: 'Jul', organic: 3490, direct: 4300, referral: 2100, social: 1400 },
  ];

  const destinationPopularity = [
    { name: 'Paris', value: 400 },
    { name: 'Bali', value: 300 },
    { name: 'Tokyo', value: 300 },
    { name: 'New York', value: 200 },
    { name: 'Rome', value: 150 },
  ];

  const conversionData = [
    { name: 'Jan', rate: 3.8 },
    { name: 'Feb', rate: 4.2 },
    { name: 'Mar', rate: 3.7 },
    { name: 'Apr', rate: 4.5 },
    { name: 'May', rate: 5.2 },
    { name: 'Jun', rate: 5.9 },
    { name: 'Jul', rate: 6.3 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 45 },
    { name: 'Mobile', value: 40 },
    { name: 'Tablet', value: 15 },
  ];

  const COLORS = ['#0C9DAE', '#FF8A5B', '#183153', '#6C63FF', '#42B883'];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Insights and performance metrics</p>
        </div>

        <Tabs defaultValue="traffic">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4">
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="traffic">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Website traffic breakdown by source</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={trafficData}
                        margin={{
                          top: 20, right: 30, left: 20, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="organic" stroke="#0C9DAE" strokeWidth={2} />
                        <Line type="monotone" dataKey="direct" stroke="#FF8A5B" strokeWidth={2} />
                        <Line type="monotone" dataKey="referral" stroke="#183153" strokeWidth={2} />
                        <Line type="monotone" dataKey="social" stroke="#6C63FF" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Organic</p>
                      <h3 className="text-2xl font-bold text-wanderlust-navy">17,550</h3>
                      <p className="text-xs text-green-600">↑ 12.5%</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Direct</p>
                      <h3 className="text-2xl font-bold text-wanderlust-navy">28,504</h3>
                      <p className="text-xs text-green-600">↑ 23.1%</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Referral</p>
                      <h3 className="text-2xl font-bold text-wanderlust-navy">15,000</h3>
                      <p className="text-xs text-red-600">↓ 2.3%</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Social</p>
                      <h3 className="text-2xl font-bold text-wanderlust-navy">10,800</h3>
                      <p className="text-xs text-green-600">↑ 8.7%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="conversion">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                  <CardDescription>Monthly conversion percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={conversionData}
                        margin={{
                          top: 20, right: 30, left: 20, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="rate" fill="#0C9DAE" name="Conversion Rate %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Average Conversion Rate</p>
                        <h3 className="text-2xl font-bold text-wanderlust-navy">4.8%</h3>
                      </div>
                      <div>
                        <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">↑ 1.2%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Industry average: 3.2%</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="destinations">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Destinations</CardTitle>
                  <CardDescription>Most viewed and booked locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[400px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={destinationPopularity}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {destinationPopularity.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Top Destinations by Views</h4>
                      <div className="space-y-4">
                        {destinationPopularity.map((item, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div 
                                  className="w-3 h-3 rounded-full mr-2" 
                                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                ></div>
                                <span className="font-medium">{item.name}</span>
                              </div>
                              <span className="text-sm">{item.value} views</span>
                            </div>
                            <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${(item.value / Math.max(...destinationPopularity.map(d => d.value))) * 100}%`,
                                  backgroundColor: COLORS[index % COLORS.length]
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="devices">
              <Card>
                <CardHeader>
                  <CardTitle>Device Usage</CardTitle>
                  <CardDescription>Visitor breakdown by device type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[400px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={deviceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
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
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Device Breakdown</h4>
                      <div className="space-y-4">
                        {deviceData.map((item, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                <div 
                                  className="w-3 h-3 rounded-full mr-2" 
                                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                ></div>
                                <span className="font-medium">{item.name}</span>
                              </div>
                              <span>{item.value}%</span>
                            </div>
                            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${item.value}%`,
                                  backgroundColor: COLORS[index % COLORS.length] 
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-wanderlust-navy mb-2">Insight</h5>
                        <p className="text-sm text-gray-600">Mobile usage has increased by 15% compared to last quarter. Consider optimizing the mobile experience further.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
