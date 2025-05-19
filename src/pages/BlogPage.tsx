
import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Calendar, User, Tag, ChevronRight, Book } from 'lucide-react';

const BlogPage = () => {
  // Blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia",
      excerpt: "Discover offbeat destinations that most tourists miss while traveling through the vibrant countries of Southeast Asia. From secluded beaches in the Philippines to mountain villages in northern Vietnam.",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800",
      date: "May 12, 2025",
      author: "Emma Thompson",
      category: "Adventure",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Ultimate Guide to Budget Travel in Europe",
      excerpt: "Learn how to explore Europe without breaking the bank. This comprehensive guide covers affordable accommodation, transportation tips, free attractions, and budget-friendly dining options across major European cities.",
      image: "https://images.unsplash.com/photo-1471874276752-65e2d717604a?q=80&w=800",
      date: "April 28, 2025",
      author: "Michael Chen",
      category: "Budget",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Culinary Journey Through Italy",
      excerpt: "A food lover's guide to the best dishes in every region of Italy. From the seafood of Sicily to the risottos of Lombardy, discover authentic recipes and the best local restaurants to visit on your Italian adventure.",
      image: "https://images.unsplash.com/photo-1498579687545-d5a4aea93189?q=80&w=800",
      date: "April 23, 2025",
      author: "Sofia Garcia",
      category: "Food",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Sustainable Travel: Reducing Your Carbon Footprint",
      excerpt: "Practical tips for environmentally conscious travelers. Learn how to make more sustainable choices with transportation, accommodation, activities, and souvenirs without compromising your travel experience.",
      image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=800",
      date: "April 15, 2025",
      author: "David Kumar",
      category: "Sustainable",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Photography Tips for Travel Enthusiasts",
      excerpt: "Capture stunning travel memories with these photography techniques. From selecting the right equipment to mastering composition and lighting, elevate your travel photography from amateur to impressive.",
      image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?q=80&w=800",
      date: "April 8, 2025",
      author: "Nina Roberts",
      category: "Photography",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Solo Female Travel Safety Guide",
      excerpt: "Essential safety tips and destination recommendations for women traveling alone. Learn from experienced solo female travelers on how to stay safe while having amazing adventures around the world.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800",
      date: "March 29, 2025",
      author: "Priya Sharma",
      category: "Solo Travel",
      readTime: "9 min read"
    }
  ];

  // Recent posts for sidebar
  const recentPosts = [
    {
      id: 7,
      title: "Best Travel Insurance Options for 2025",
      date: "May 15, 2025",
      category: "Travel Tips"
    },
    {
      id: 8,
      title: "How to Pack for a Year-Long Trip",
      date: "May 10, 2025",
      category: "Packing"
    },
    {
      id: 9,
      title: "Digital Nomad Visas: Countries Welcoming Remote Workers",
      date: "May 5, 2025",
      category: "Digital Nomad"
    }
  ];

  const categories = [
    "Adventure", "Cultural", "Food", "Budget", "Luxury", "Solo Travel", "Family", "Photography", "Sustainable"
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-wanderlust-navy/90 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Blog</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Stories, tips, and insights from seasoned travelers. Get inspired for your next adventure.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white py-1 px-4 text-sm font-medium">Adventure</Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white py-1 px-4 text-sm font-medium">Cultural</Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white py-1 px-4 text-sm font-medium">Food</Badge>
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white py-1 px-4 text-sm font-medium">Travel Tips</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Featured Posts Section - Main Content */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-wanderlust-navy">Featured Stories</h2>
              <Button variant="outline" className="border-wanderlust-teal text-wanderlust-teal hover:bg-wanderlust-teal/10">
                All Articles
              </Button>
            </div>

            {/* Featured post - larger */}
            <Card className="mb-10 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPosts[0].date}</span>
                    <span className="mx-1">•</span>
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-wanderlust-navy group-hover:text-wanderlust-teal transition-colors">{featuredPosts[0].title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{featuredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-wanderlust-teal" />
                      <span className="text-sm text-gray-600">{featuredPosts[0].author}</span>
                    </div>
                    <Badge className="bg-wanderlust-teal/10 text-wanderlust-teal border-wanderlust-teal/20 hover:bg-wanderlust-teal/20">
                      {featuredPosts[0].category}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Grid of other featured posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(1).map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span className="mx-1">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-wanderlust-navy group-hover:text-wanderlust-teal transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-wanderlust-teal" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Badge className="bg-wanderlust-teal/10 text-wanderlust-teal border-wanderlust-teal/20 hover:bg-wanderlust-teal/20">
                        {post.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-wanderlust-teal text-wanderlust-teal hover:bg-wanderlust-teal/10">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* About the Blog */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Book className="w-5 h-5 text-wanderlust-teal" />
                  <h3 className="text-lg font-bold text-wanderlust-navy">About Our Blog</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Wanderlust Blog is your source for authentic travel stories, practical advice, and inspiration from around the world, written by experienced travelers and local experts.
                </p>
                <Button variant="outline" size="sm" className="w-full border-wanderlust-teal text-wanderlust-teal hover:bg-wanderlust-teal/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-wanderlust-navy mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map(post => (
                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                      <div className="flex-grow">
                        <h4 className="font-medium group-hover:text-wanderlust-teal transition-colors">{post.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-wanderlust-teal self-center group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-wanderlust-navy mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center justify-between group cursor-pointer py-2 border-b border-gray-100 last:border-0">
                      <span className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-wanderlust-teal" />
                        <span className="group-hover:text-wanderlust-teal transition-colors">{category}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-wanderlust-teal group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subscribe */}
            <Card className="bg-wanderlust-sand/30 border-none">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Newspaper className="w-5 h-5 text-wanderlust-teal" />
                  <h3 className="text-lg font-bold text-wanderlust-navy">Subscribe</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get the latest travel stories and tips delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wanderlust-teal"
                  />
                  <Button className="w-full bg-wanderlust-teal hover:bg-wanderlust-teal/90 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-wanderlust-sand/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-wanderlust-navy">Explore by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category} className="group cursor-pointer hover:shadow-md transition-all">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="font-medium group-hover:text-wanderlust-teal transition-colors">{category}</div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-wanderlust-teal group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-wanderlust-navy to-wanderlust-teal text-white overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Share Your Travel Stories</h3>
                <p className="text-white/80 max-w-lg">
                  Are you a travel enthusiast with stories to tell? We're looking for guest contributors to share their unique perspectives and experiences.
                </p>
              </div>
              <Button className="bg-white text-wanderlust-navy hover:bg-white/90 shadow-lg">
                Become a Contributor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  );
};

export default BlogPage;
