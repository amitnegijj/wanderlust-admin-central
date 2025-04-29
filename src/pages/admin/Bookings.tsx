
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Bookings = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for bookings
  const allBookings = [
    { id: 1, customer: "Sophie Turner", email: "sophie@example.com", destination: "Bali Beach Resort", checkIn: "2023-07-15", checkOut: "2023-07-22", status: "Confirmed", amount: 1250 },
    { id: 2, customer: "James Wilson", email: "james@example.com", destination: "Paris Luxury Apartment", checkIn: "2023-07-08", checkOut: "2023-07-12", status: "Pending", amount: 980 },
    { id: 3, customer: "Emma Johnson", email: "emma@example.com", destination: "Tokyo Urban Hotel", checkIn: "2023-07-20", checkOut: "2023-07-25", status: "Confirmed", amount: 1460 },
    { id: 4, customer: "Michael Brown", email: "michael@example.com", destination: "New York City Loft", checkIn: "2023-06-28", checkOut: "2023-07-05", status: "Completed", amount: 2100 },
    { id: 5, customer: "Olivia Davis", email: "olivia@example.com", destination: "Rome Historic Center", checkIn: "2023-08-10", checkOut: "2023-08-15", status: "Confirmed", amount: 1380 },
    { id: 6, customer: "Robert Miller", email: "robert@example.com", destination: "Sydney Harbor View", checkIn: "2023-07-22", checkOut: "2023-07-29", status: "Cancelled", amount: 1750 },
  ];

  // Filter bookings based on status
  const filteredBookings = statusFilter === 'all' 
    ? allBookings 
    : allBookings.filter(booking => booking.status.toLowerCase() === statusFilter);

  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Bookings</h1>
            <p className="text-muted-foreground">Manage reservation details and guest information</p>
          </div>
          <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
            Add New Booking
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Bookings
                </p>
                <h2 className="text-3xl font-bold">{allBookings.length}</h2>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Upcoming
                </p>
                <h2 className="text-3xl font-bold">{allBookings.filter(b => b.status === 'Confirmed').length}</h2>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Pending
                </p>
                <h2 className="text-3xl font-bold">{allBookings.filter(b => b.status === 'Pending').length}</h2>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Revenue
                </p>
                <h2 className="text-3xl font-bold">${allBookings.reduce((sum, b) => sum + b.amount, 0).toLocaleString()}</h2>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>Manage and track customer reservations</CardDescription>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-40">
                  <Select defaultValue="all" onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Input placeholder="Search bookings..." className="max-w-[250px]" />
                  <Button variant="outline">Search</Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">ID</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Destination</th>
                    <th className="text-left p-3">Check In/Out</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">#{booking.id}</td>
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{booking.customer}</div>
                          <div className="text-sm text-muted-foreground">{booking.email}</div>
                        </div>
                      </td>
                      <td className="p-3">{booking.destination}</td>
                      <td className="p-3">
                        <div className="text-sm">
                          <div>{booking.checkIn}</div>
                          <div>{booking.checkOut}</div>
                        </div>
                      </td>
                      <td className="p-3">${booking.amount.toLocaleString()}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColorClass(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredBookings.length === 0 && (
              <div className="text-center py-6">
                <p className="text-muted-foreground">No bookings found matching your criteria.</p>
              </div>
            )}

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">
                Showing {filteredBookings.length} of {allBookings.length} bookings
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest booking updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">New booking confirmed</h4>
                    <p className="text-sm text-muted-foreground">Olivia Davis booked Rome Historic Center</p>
                    <p className="text-xs text-muted-foreground">10 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" x2="12" y1="8" y2="12"/>
                      <line x1="12" x2="12.01" y1="16" y2="16"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Booking status updated</h4>
                    <p className="text-sm text-muted-foreground">Michael Brown's booking marked as completed</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-red-100 text-red-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Booking cancelled</h4>
                    <p className="text-sm text-muted-foreground">Robert Miller cancelled Sydney Harbor View reservation</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-green-100 text-green-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Payment received</h4>
                    <p className="text-sm text-muted-foreground">Emma Johnson completed payment for Tokyo Urban Hotel</p>
                    <p className="text-xs text-muted-foreground">Yesterday at 2:30 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Check-ins</CardTitle>
              <CardDescription>Next 7 days of arrivals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">James Wilson</h4>
                      <p className="text-sm text-muted-foreground">Paris Luxury Apartment</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Jul 8, 2023</p>
                      <p className="text-sm text-muted-foreground">4 nights</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Sophie Turner</h4>
                      <p className="text-sm text-muted-foreground">Bali Beach Resort</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Jul 15, 2023</p>
                      <p className="text-sm text-muted-foreground">7 nights</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Emma Johnson</h4>
                      <p className="text-sm text-muted-foreground">Tokyo Urban Hotel</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Jul 20, 2023</p>
                      <p className="text-sm text-muted-foreground">5 nights</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">View All Check-ins</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Bookings;
