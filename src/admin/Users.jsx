
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Users = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for users
  const users = [
    { id: 1, name: "Sophie Turner", email: "sophie.turner@example.com", role: "Admin", status: "Active", lastLogin: "2023-06-25" },
    { id: 2, name: "James Wilson", email: "james.wilson@example.com", role: "Editor", status: "Active", lastLogin: "2023-06-22" },
    { id: 3, name: "Emma Johnson", email: "emma.johnson@example.com", role: "Editor", status: "Inactive", lastLogin: "2023-05-10" },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", role: "Viewer", status: "Active", lastLogin: "2023-06-20" },
    { id: 5, name: "Olivia Davis", email: "olivia.davis@example.com", role: "Viewer", status: "Active", lastLogin: "2023-06-18" },
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-muted-foreground">Manage system users and permissions</p>
          </div>
          <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
            Add New User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>All Users</CardTitle>
                <CardDescription>Manage user access and permissions</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="Search users..." className="max-w-[250px]" />
                <Button variant="outline">Search</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Email</th>
                    <th className="text-left p-3">Role</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Last Login</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.role}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-3">{user.lastLogin}</td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
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

export default Users;
