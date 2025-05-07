
import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Bed, Users, Calendar, Search, Coffee, Wifi, Car, Tv } from 'lucide-react';

const StayPage = () => {
  // Sample featured accommodations
  const featuredStays = [
    {
      id: 1,
      name: "Seaside Villa Retreat",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      price: 299,
      rating: 4.9,
      reviews: 124,
      description: "Luxurious villa with breathtaking ocean views and private pool.",
      type: "Villa",
      capacity: "2-6 guests",
      amenities: ["Ocean view", "Private pool", "Kitchen", "Free parking"]
    },
    {
      id: 2,
      name: "Mountain Lodge",
      location: "Aspen, Colorado",
      image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=800",
      price: 219,
      rating: 4.8,
      reviews: 98,
      description: "Cozy cabin surrounded by pine trees with stunning mountain views.",
      type: "Cabin",
      capacity: "2-4 guests",
      amenities: ["Mountain view", "Fireplace", "Hot tub", "Hiking trails"]
    },
    {
      id: 3,
      name: "Urban Luxury Apartment",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
      price: 189,
      rating: 4.7,
      reviews: 156,
      description: "Modern apartment in the heart of the city with skyline views.",
      type: "Apartment",
      capacity: "1-3 guests",
      amenities: ["City view", "Modern design", "Gym access", "Close to metro"]
    }
  ];

  // Sample amenities for filter
  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, name: "Free WiFi" },
    { icon: <Coffee className="w-4 h-4" />, name: "Breakfast" },
    { icon: <Car className="w-4 h-4" />, name: "Free parking" },
    { icon: <Tv className="w-4 h-4" />, name: "TV" }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-wanderlust-navy/90 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Places to Stay</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover handpicked accommodations that offer comfort, luxury, and unforgettable experiences. From boutique hotels to seaside villas.
            </p>
            
            {/* Search Box */}
            <Card className="bg-white shadow-lg p-5 mx-auto max-w-3xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-500 mb-1 text-left">Where</label>
                    <div className="flex items-center gap-2 border-b pb-2">
                      <MapPin className="h-4 w-4 text-wanderlust-teal" />
                      <input 
                        type="text" 
                        placeholder="Destination" 
                        className="w-full outline-none text-wanderlust-navy"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-500 mb-1 text-left">When</label>
                    <div className="flex items-center gap-2 border-b pb-2">
                      <Calendar className="h-4 w-4 text-wanderlust-teal" />
                      <input 
                        type="text" 
                        placeholder="Check in - Check out" 
                        className="w-full outline-none text-wanderlust-navy"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-500 mb-1 text-left">Guests</label>
                    <div className="flex items-center gap-2 border-b pb-2">
                      <Users className="h-4 w-4 text-wanderlust-teal" />
                      <select className="w-full outline-none text-wanderlust-navy bg-transparent">
                        <option>2 Guests</option>
                        <option>1 Guest</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>5+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 flex justify-center">
                  <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90 text-white px-8">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-wanderlust-navy">Browse by Property Type</h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
            <TabsTrigger value="all" className="px-5">All</TabsTrigger>
            <TabsTrigger value="hotels" className="px-5">Hotels</TabsTrigger>
            <TabsTrigger value="villas" className="px-5">Villas</TabsTrigger>
            <TabsTrigger value="apartments" className="px-5">Apartments</TabsTrigger>
            <TabsTrigger value="cabins" className="px-5">Cabins</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStays.map(stay => (
                <Card key={stay.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={stay.image} 
                      alt={stay.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-white text-wanderlust-navy">{stay.type}</Badge>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-wanderlust-navy group-hover:text-wanderlust-teal transition-colors">{stay.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{stay.rating}</span>
                        <span className="text-gray-500 text-sm">({stay.reviews})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{stay.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{stay.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stay.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4 text-wanderlust-teal" />
                        <span className="text-sm text-gray-600">{stay.capacity}</span>
                      </div>
                      <div>
                        <span className="font-bold text-lg text-wanderlust-navy">${stay.price}</span>
                        <span className="text-gray-500"> / night</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hotels" className="mt-0">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4 text-wanderlust-navy">Coming Soon</h2>
              <p className="text-gray-600">
                We're currently working on bringing you amazing hotel options. Check back soon!
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="villas" className="mt-0">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4 text-wanderlust-navy">Coming Soon</h2>
              <p className="text-gray-600">
                We're currently working on bringing you amazing villa options. Check back soon!
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="apartments" className="mt-0">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4 text-wanderlust-navy">Coming Soon</h2>
              <p className="text-gray-600">
                We're currently working on bringing you amazing apartment options. Check back soon!
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="cabins" className="mt-0">
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4 text-wanderlust-navy">Coming Soon</h2>
              <p className="text-gray-600">
                We're currently working on bringing you amazing cabin options. Check back soon!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Amenities Filter */}
      <div className="bg-wanderlust-sand/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-wanderlust-navy">Popular Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((item, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-md transition-all border-wanderlust-teal/20 hover:border-wanderlust-teal">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wanderlust-teal/10 flex items-center justify-center mb-4 group-hover:bg-wanderlust-teal/20 transition-colors">
                    <div className="text-wanderlust-teal">{item.icon}</div>
                  </div>
                  <span className="font-medium text-wanderlust-navy">{item.name}</span>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Book Your Dream Stay?</h3>
                <p className="text-white/80 max-w-lg">
                  Our full booking platform is coming soon. Sign up to be notified when we launch and get access to exclusive deals.
                </p>
              </div>
              <Button className="bg-white text-wanderlust-navy hover:bg-white/90 shadow-lg">
                Get Notified
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  );
};

export default StayPage;
