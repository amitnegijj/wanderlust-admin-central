
import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Calendar, User, Tag, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  // Sample blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia",
      excerpt: "Discover offbeat destinations that most tourists miss...",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800",
      date: "May 2, 2025",
      author: "Emma Thompson",
      category: "Adventure",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Ultimate Guide to Budget Travel in Europe",
      excerpt: "How to explore Europe without breaking the bank...",
      image: "https://images.unsplash.com/photo-1471874276752-65e2d717604a?q=80&w=800",
      date: "April 28, 2025",
      author: "Michael Chen",
      category: "Budget",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Culinary Journey Through Italy",
      excerpt: "A food lover's guide to the best dishes in every region...",
      image: "https://images.unsplash.com/photo-1498579687545-d5a4aea93189?q=80&w=800",
      date: "April 23, 2025",
      author: "Sofia Garcia",
      category: "Food",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "Adventure", "Cultural", "Food", "Budget", "Luxury", "Solo Travel", "Family", "Photography"
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

      {/* Featured Posts Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-wanderlust-navy">Featured Stories</h2>
          <Button variant="outline" className="border-wanderlust-teal text-wanderlust-teal hover:bg-wanderlust-teal/10">
            All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
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
                <div className="flex items-center justify-between mt-4">
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
      </div>

      {/* Subscribe Section */}
      <div className="bg-wanderlust-sand/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Newspaper className="w-12 h-12 text-wanderlust-teal mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest travel stories, tips, and inspiration delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wanderlust-teal"
              />
              <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-wanderlust-navy">Explore by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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

      {/* Coming Soon Message (for articles that will be added later) */}
      <div className="container mx-auto px-4 pb-16">
        <Card className="border-dashed border-2 border-wanderlust-teal/30 bg-wanderlust-teal/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-wanderlust-navy">More Content Coming Soon</h3>
            <p className="text-gray-600 mb-0">
              We're working on bringing you more inspiring travel content. Check back soon!
            </p>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  );
};

export default BlogPage;
