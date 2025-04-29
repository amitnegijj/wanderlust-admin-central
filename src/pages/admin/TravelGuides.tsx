
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TravelGuides = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for travel guides
  const guides = [
    { id: 1, title: "Ultimate Paris Guide", author: "Sophie Martin", status: "Published", date: "2023-05-15" },
    { id: 2, title: "Tokyo: Hidden Gems", author: "James Wilson", status: "Published", date: "2023-04-22" },
    { id: 3, title: "New York City Weekend", author: "Emma Johnson", status: "Draft", date: "2023-06-10" },
    { id: 4, title: "Exploring Bali's Beaches", author: "Michael Brown", status: "Published", date: "2023-03-05" },
    { id: 5, title: "Rome in 3 Days", author: "Olivia Davis", status: "Review", date: "2023-06-01" },
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Travel Guides</h1>
            <p className="text-muted-foreground">Manage and create travel guide content</p>
          </div>
          <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
            Add New Guide
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>All Travel Guides</CardTitle>
                <CardDescription>Manage your published and draft guides</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="Search guides..." className="max-w-[250px]" />
                <Button variant="outline">Search</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Title</th>
                    <th className="text-left p-3">Author</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Date</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {guides.map((guide) => (
                    <tr key={guide.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{guide.title}</td>
                      <td className="p-3">{guide.author}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          guide.status === 'Published' ? 'bg-green-100 text-green-800' :
                          guide.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {guide.status}
                        </span>
                      </td>
                      <td className="p-3">{guide.date}</td>
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

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Guide Categories</CardTitle>
              <CardDescription>Organize your travel guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">City Guides</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">12 guides</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Beach Destinations</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">8 guides</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Mountain Retreats</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">5 guides</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Food & Culture</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">9 guides</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">Manage Categories</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Guide Statistics</CardTitle>
              <CardDescription>Performance metrics for your guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Most Popular Guide</p>
                    <p className="font-medium">Ultimate Paris Guide</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Views</p>
                    <p className="font-medium">12,458</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Guides</p>
                    <p className="font-medium">34</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="font-medium">28</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Reading Time</p>
                    <p className="font-medium">4 min 30 sec</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Completion Rate</p>
                    <p className="font-medium">68%</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">View Detailed Stats</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TravelGuides;
