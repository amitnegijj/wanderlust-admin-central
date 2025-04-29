
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const MenuPhotos = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for photos
  const photos = [
    { id: 1, name: "Beach Sunset", category: "Destinations", size: "1.2MB", uploaded: "2023-06-08" },
    { id: 2, name: "City Skyline", category: "City Views", size: "2.4MB", uploaded: "2023-05-22" },
    { id: 3, name: "Mountain Range", category: "Nature", size: "3.1MB", uploaded: "2023-06-02" },
    { id: 4, name: "Local Cuisine", category: "Food", size: "1.8MB", uploaded: "2023-06-10" },
    { id: 5, name: "Luxury Suite", category: "Accommodations", size: "2.3MB", uploaded: "2023-05-15" },
  ];

  // Mock data for menus
  const menus = [
    { id: 1, name: "Main Navigation", type: "Header", items: 6, status: "Active" },
    { id: 2, name: "Footer Links", type: "Footer", items: 12, status: "Active" },
    { id: 3, name: "Mobile Sidebar", type: "Mobile", items: 8, status: "Active" },
    { id: 4, name: "User Dashboard", type: "Account", items: 5, status: "Draft" },
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Menus & Photos</h1>
            <p className="text-muted-foreground">Manage website navigation and media library</p>
          </div>
        </div>

        <Tabs defaultValue="photos">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="menus">Menus</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="photos">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Photo Library</h2>
                <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
                  Upload New Photos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800" 
                      alt="Beach Sunset"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="space-x-2">
                        <Button variant="secondary" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Beach Sunset</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Destinations</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99?q=80&w=800" 
                      alt="City Skyline"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="space-x-2">
                        <Button variant="secondary" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">City Skyline</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">City Views</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800" 
                      alt="Mountain Range"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="space-x-2">
                        <Button variant="secondary" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Mountain Range</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Nature</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800" 
                      alt="Local Cuisine"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="space-x-2">
                        <Button variant="secondary" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Local Cuisine</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Food</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800" 
                      alt="Luxury Suite"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="space-x-2">
                        <Button variant="secondary" size="sm">View</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Luxury Suite</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Accommodations</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Photo Categories</CardTitle>
                    <CardDescription>Organize your image library</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Destinations</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">24 photos</span>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">City Views</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">16 photos</span>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Nature</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">32 photos</span>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Food</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">18 photos</span>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Accommodations</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">29 photos</span>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline">Add New Category</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="menus">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Navigation Menus</h2>
                <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
                  Create New Menu
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Menus</CardTitle>
                  <CardDescription>Manage website navigation structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Menu Name</th>
                          <th className="text-left p-3">Type</th>
                          <th className="text-left p-3">Items</th>
                          <th className="text-left p-3">Status</th>
                          <th className="text-left p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {menus.map((menu) => (
                          <tr key={menu.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium">{menu.name}</td>
                            <td className="p-3">{menu.type}</td>
                            <td className="p-3">{menu.items}</td>
                            <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                menu.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {menu.status}
                              </span>
                            </td>
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
              
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Menu Editor</CardTitle>
                    <CardDescription>Main Navigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border shadow-sm flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Home</span>
                            <span className="ml-2 text-xs text-gray-500">URL: /</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Move</Button>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded border shadow-sm flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Travel</span>
                            <span className="ml-2 text-xs text-gray-500">URL: /travel</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Move</Button>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 ml-6 rounded border shadow-sm flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Destinations</span>
                            <span className="ml-2 text-xs text-gray-500">URL: /travel/destinations</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Move</Button>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 ml-6 rounded border shadow-sm flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Travel Guides</span>
                            <span className="ml-2 text-xs text-gray-500">URL: /travel/guides</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Move</Button>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded border shadow-sm flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Stay</span>
                            <span className="ml-2 text-xs text-gray-500">URL: /stay</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Move</Button>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded border shadow-sm flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Blog</span>
                            <span className="ml-2 text-xs text-gray-500">URL: /blog</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm">Move</Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">Add Item</Button>
                        <Button variant="outline" size="sm">Add Submenu</Button>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default MenuPhotos;
