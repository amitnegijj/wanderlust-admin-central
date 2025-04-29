
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Bookings = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for bookings
  const bookings = [
    { id: 1, name: "Sophie Turner", destination: "Bali Beach Resort", checkIn: "2023-06-25", checkOut: "2023-07-02", status: "Confirmed" },
    { id: 2, name: "James Wilson", destination: "Paris Luxury Apartment", checkIn: "2023-06-22", checkOut: "2023-06-28", status: "Pending" },
    { id: 3, name: "Emma Johnson", destination: "Tokyo Urban Hotel", checkIn: "2023-06-20", checkOut: "2023-06-24", status: "Confirmed" },
    { id: 4, name: "Michael Brown", destination: "New York City Loft", checkIn: "2023-06-18", checkOut: "2023-06-22", status: "Cancelled" },
    { id: 5, name: "Olivia Davis", destination: "Rome Suite", checkIn: "2023-07-05", checkOut: "2023-07-12", status: "Confirmed" },
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Bookings</h1>
            <p className="text-muted-foreground">Manage customer bookings and reservations</p>
          </div>
          <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
            Add New Booking
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>View and manage current and upcoming bookings</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="Search bookings..." className="max-w-[250px]" />
                <Button variant="outline">Search</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Guest</th>
                    <th className="text-left p-3">Destination</th>
                    <th className="text-left p-3">Check-in</th>
                    <th className="text-left p-3">Check-out</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{booking.name}</td>
                      <td className="p-3">{booking.destination}</td>
                      <td className="p-3">{booking.checkIn}</td>
                      <td className="p-3">{booking.checkOut}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
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
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Bookings;
