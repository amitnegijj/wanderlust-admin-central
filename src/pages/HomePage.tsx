
import React from 'react';
import { Link } from 'react-router-dom';
import PublicLayout from '@/components/layouts/PublicLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  // Featured destinations data
  const featuredDestinations = [
    {
      id: 1,
      title: 'Santorini, Greece',
      description: 'White-washed buildings, blue domes, and stunning sunsets.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    },
    {
      id: 2,
      title: 'Kyoto, Japan',
      description: 'Ancient temples, traditional gardens, and cherry blossoms.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800',
    },
    {
      id: 3,
      title: 'Banff, Canada',
      description: 'Majestic mountains, crystal-clear lakes, and wildlife.',
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800',
    },
  ];

  const popularBlogs = [
    {
      id: 1,
      title: '10 Hidden Gems in Southeast Asia',
      excerpt: 'Discover offbeat destinations that most tourists miss...',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800',
      date: 'Apr 15, 2023',
    },
    {
      id: 2,
      title: 'Ultimate Guide to Budget Travel in Europe',
      excerpt: 'How to explore Europe without breaking the bank...',
      image: 'https://images.unsplash.com/photo-1471874276752-65e2d717604a?q=80&w=800',
      date: 'Mar 22, 2023',
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="hero h-[600px] flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Unique travel experiences, luxury stays, and unforgettable destinations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-wanderlust-teal hover:bg-wanderlust-teal/90 text-white">
              <Link to="/travel">Explore Destinations</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-wanderlust-navy border-white hover:bg-white/90">
              <Link to="/stay">Find Places to Stay</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section className="py-20 bg-wanderlust-sand/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-wanderlust-navy">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link to="/travel" className="text-wanderlust-teal font-medium hover:underline">
                    Discover More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-wanderlust-navy">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-wanderlust-teal/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wanderlust-teal">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Travel Guides</h3>
              <p className="text-gray-600">Expertly curated travel guides for destinations around the world.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-wanderlust-teal/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wanderlust-teal">
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
                  <path d="M9 12v6"/>
                  <path d="M13 12v6"/>
                  <path d="M14 7.5c-1 0-1.64.4-2.4 1.1A32.57 32.57 0 0 0 10 10"/>
                  <path d="M5.7 7.8c.6-.7 1.4-1.3 2.3-1.6"/>
                  <path d="M4 12c0-2.2 1.8-4 4-4"/>
                  <path d="M15 5H9.5C7 5 7 3 9 3h6c2 0 2 2 0 2"/>
                  <path d="M13 5v2"/>
                  <path d="M11 5v2"/>
                  <path d="M14 16v4"/>
                  <path d="M10 16v4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Luxury Stays</h3>
              <p className="text-gray-600">Handpicked accommodations for unforgettable experiences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-wanderlust-teal/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wanderlust-teal">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Travel Blog</h3>
              <p className="text-gray-600">Inspiring stories and practical tips from seasoned travelers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-wanderlust-navy">Latest Blog Posts</h2>
            <Link to="/blog" className="text-wanderlust-teal font-medium hover:underline">
              View All Posts →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularBlogs.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-wanderlust-teal font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-wanderlust-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered their perfect getaway with Wanderlust.
          </p>
          <Button size="lg" className="bg-wanderlust-teal hover:bg-wanderlust-teal/90 text-white">
            <Link to="/travel">Start Exploring</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HomePage;
