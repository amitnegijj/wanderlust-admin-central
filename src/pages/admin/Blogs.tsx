
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Blogs = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  // Mock data for blog posts
  const posts = [
    { id: 1, title: "10 Hidden Gems in Southeast Asia", author: "Sophie Martin", status: "Published", date: "2023-06-10", views: 3240 },
    { id: 2, title: "Ultimate Guide to Budget Travel in Europe", author: "James Wilson", status: "Published", date: "2023-05-22", views: 5120 },
    { id: 3, title: "Best Street Food in Bangkok", author: "Michael Brown", status: "Draft", date: "2023-06-15", views: 0 },
    { id: 4, title: "How to Travel Solo and Love It", author: "Emma Johnson", status: "Published", date: "2023-04-18", views: 4870 },
    { id: 5, title: "Sustainable Tourism: A Complete Guide", author: "Olivia Davis", status: "Review", date: "2023-06-05", views: 1250 },
  ];

  // Mock data for reviews
  const reviews = [
    { id: 1, author: "John Smith", destination: "Paris Luxury Hotel", rating: 5, status: "Approved", date: "2023-06-08" },
    { id: 2, title: "Beautiful but expensive", author: "Lisa Johnson", destination: "Bali Beach Resort", rating: 4, status: "Approved", date: "2023-05-30" },
    { id: 3, title: "Disappointing experience", author: "Mark Williams", destination: "Tokyo Urban Hotel", rating: 2, status: "Pending", date: "2023-06-12" },
    { id: 4, title: "Absolutely amazing!", author: "Sarah Davis", destination: "New York City Loft", rating: 5, status: "Approved", date: "2023-06-01" },
  ];

  return (
    <AdminLayout>
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Blog & Reviews</h1>
            <p className="text-muted-foreground">Manage your content and customer feedback</p>
          </div>
        </div>

        <Tabs defaultValue="blog">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="blog">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">All Blog Posts</h2>
                <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
                  Create New Post
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Blog Posts</CardTitle>
                      <CardDescription>Manage and publish your travel articles</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="Search posts..." className="max-w-[250px]" />
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
                          <th className="text-left p-3">Views</th>
                          <th className="text-left p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((post) => (
                          <tr key={post.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium">{post.title}</td>
                            <td className="p-3">{post.author}</td>
                            <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                post.status === 'Published' ? 'bg-green-100 text-green-800' :
                                post.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {post.status}
                              </span>
                            </td>
                            <td className="p-3">{post.date}</td>
                            <td className="p-3">{post.views.toLocaleString()}</td>
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

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Categories</CardTitle>
                    <CardDescription>Organize your blog content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Travel Tips</span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">14 posts</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Destination Guides</span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">22 posts</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Food & Culture</span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">8 posts</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Adventure</span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">10 posts</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">Manage Categories</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Blog Performance</CardTitle>
                    <CardDescription>Most popular content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Top Performing Posts</h4>
                        <ol className="space-y-2">
                          <li className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium truncate pr-4">Ultimate Guide to Budget Travel in Europe</span>
                            <span className="text-sm whitespace-nowrap">5,120 views</span>
                          </li>
                          <li className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium truncate pr-4">How to Travel Solo and Love It</span>
                            <span className="text-sm whitespace-nowrap">4,870 views</span>
                          </li>
                          <li className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="font-medium truncate pr-4">10 Hidden Gems in Southeast Asia</span>
                            <span className="text-sm whitespace-nowrap">3,240 views</span>
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Content Engagement</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-muted-foreground">Avg. Read Time</p>
                            <p className="text-xl font-semibold">3:45</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-sm text-muted-foreground">Avg. Comments</p>
                            <p className="text-xl font-semibold">12</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90">
                  Export Reviews
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>All Reviews</CardTitle>
                      <CardDescription>Manage customer testimonials and feedback</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="Search reviews..." className="max-w-[250px]" />
                      <Button variant="outline">Search</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Author</th>
                          <th className="text-left p-3">Destination</th>
                          <th className="text-left p-3">Rating</th>
                          <th className="text-left p-3">Status</th>
                          <th className="text-left p-3">Date</th>
                          <th className="text-left p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviews.map((review) => (
                          <tr key={review.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium">{review.author}</td>
                            <td className="p-3">{review.destination}</td>
                            <td className="p-3">
                              <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill={i < review.rating ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                ))}
                              </div>
                            </td>
                            <td className="p-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                review.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {review.status}
                              </span>
                            </td>
                            <td className="p-3">{review.date}</td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">View</Button>
                                {review.status === 'Pending' && (
                                  <Button variant="ghost" size="sm" className="text-green-600">Approve</Button>
                                )}
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

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Review Summary</CardTitle>
                    <CardDescription>Overview of customer feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Average Rating by Destination</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Paris Luxury Hotel</span>
                            <div className="flex text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill={i < 5 ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Bali Beach Resort</span>
                            <div className="flex text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill={i < 4 ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Tokyo Urban Hotel</span>
                            <div className="flex text-yellow-500">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill={i < 3 ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Rating Distribution</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span>5 stars</span>
                              <span className="text-sm">24 reviews (60%)</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span>4 stars</span>
                              <span className="text-sm">10 reviews (25%)</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span>3 stars</span>
                              <span className="text-sm">4 reviews (10%)</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span>2 stars</span>
                              <span className="text-sm">2 reviews (5%)</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span>1 star</span>
                              <span className="text-sm">0 reviews (0%)</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Review Settings</CardTitle>
                    <CardDescription>Manage review moderation preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Auto-approve reviews</p>
                          <p className="text-sm text-muted-foreground">Automatically approve new reviews</p>
                        </div>
                        <div className="flex items-center h-4">
                          <input type="checkbox" className="h-4 w-4 rounded" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Email notifications</p>
                          <p className="text-sm text-muted-foreground">Receive emails when new reviews are submitted</p>
                        </div>
                        <div className="flex items-center h-4">
                          <input type="checkbox" className="h-4 w-4 rounded" defaultChecked />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Allow anonymous reviews</p>
                          <p className="text-sm text-muted-foreground">Let users submit reviews without an account</p>
                        </div>
                        <div className="flex items-center h-4">
                          <input type="checkbox" className="h-4 w-4 rounded" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Display reviews on product pages</p>
                          <p className="text-sm text-muted-foreground">Show customer reviews on destination pages</p>
                        </div>
                        <div className="flex items-center h-4">
                          <input type="checkbox" className="h-4 w-4 rounded" defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full bg-wanderlust-teal hover:bg-wanderlust-teal/90">Save Settings</Button>
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

export default Blogs;
