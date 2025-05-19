
import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Bed, Users, Calendar, Search, Wifi, Coffee, Car, Tv } from 'lucide-react';

const StayPage = () => {
  // Sample accommodations data
  const accommodations = [
    {
      id: 1,
      name: "Beachfront Villa Paradise",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      price: 329,
      rating: 4.9,
      reviews: 142,
      description: "Luxury villa with stunning caldera views, private infinity pool, and elegant modern design.",
      type: "Villa",
      capacity: "2-6 guests",
      amenities: ["Ocean view", "Private pool", "Kitchen", "Free parking", "Air conditioning"]
    },
    {
      id: 2,
      name: "Alpine Mountain Lodge",
      location: "Zermatt, Switzerland",
      image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=800",
      price: 249,
      rating: 4.8,
      reviews: 98,
      description: "Cozy wooden cabin surrounded by snowcapped peaks with panoramic mountain views.",
      type: "Cabin",
      capacity: "2-4 guests",
      amenities: ["Mountain view", "Fireplace", "Hot tub", "Hiking trails", "Ski-in/ski-out"]
    },
    {
      id: 3,
      name: "Skyline Luxury Apartment",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
      price: 199,
      rating: 4.7,
      reviews: 156,
      description: "Modern high-rise apartment with floor-to-ceiling windows overlooking the vibrant city.",
      type: "Apartment",
      capacity: "1-3 guests",
      amenities: ["City view", "Modern design", "Gym access", "Close to metro", "24/7 security"]
    },
    {
      id: 4,
      name: "Tropical Beachfront Resort",
      location: "Phuket, Thailand",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      price: 179,
      rating: 4.6,
      reviews: 203,
      description: "Elegant beachfront resort with direct access to crystal-clear waters and white sandy beaches.",
      type: "Resort",
      capacity: "2-4 guests",
      amenities: ["Beachfront", "Spa", "Swimming pool", "Restaurant", "Water sports"]
    },
    {
      id: 5,
      name: "Historic City Boutique Hotel",
      location: "Prague, Czech Republic",
      image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=800",
      price: 159,
      rating: 4.8,
      reviews: 187,
      description: "Charming hotel in a renovated historical building in the heart of the old town.",
      type: "Hotel",
      capacity: "1-2 guests",
      amenities: ["Central location", "Historic building", "Breakfast included", "Concierge", "Bar"]
    },
    {
      id: 6,
      name: "Desert Luxury Tent",
      location: "Marrakech, Morocco",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=800",
      price: 289,
      rating: 4.9,
      reviews: 94,
      description: "Upscale glamping experience with traditional Moroccan design and modern amenities in the desert.",
      type: "Glamping",
      capacity: "2 guests",
      amenities: ["Desert view", "Private bathroom", "Authentic cuisine", "Stargazing", "Camel tours"]
    }
  ];

  // Sample amenities for filter
  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, name: "Free WiFi" },
    { icon: <Coffee className="w-4 h-4" />, name: "Breakfast" },
    { icon: <Car className="w-4 h-4" />, name: "Free parking" },
    { icon: <Tv className="w-4 h-4" />, name: "Smart TV" }
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
            <TabsTrigger value="hotel" className="px-5">Hotels</TabsTrigger>
            <TabsTrigger value="villa" className="px-5">Villas</TabsTrigger>
            <TabsTrigger value="apartment" className="px-5">Apartments</TabsTrigger>
            <TabsTrigger value="cabin" className="px-5">Cabins</TabsTrigger>
            <TabsTrigger value="glamping" className="px-5">Glamping</TabsTrigger>
            <TabsTrigger value="resort" className="px-5">Resorts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accommodations.map(stay => (
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
                      {stay.amenities.slice(0, 3).map((amenity, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                          {amenity}
                        </Badge>
                      ))}
                      {stay.amenities.length > 3 && (
                        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                          +{stay.amenities.length - 3} more
                        </Badge>
                      )}
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
          
          {/* Filter tabs for different accommodation types */}
          {["hotel", "villa", "apartment", "cabin", "glamping", "resort"].map((type) => (
            <TabsContent key={type} value={type} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accommodations.filter(stay => stay.type.toLowerCase() === type).map(stay => (
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
                        {stay.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                            {amenity}
                          </Badge>
                        ))}
                        {stay.amenities.length > 3 && (
                          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                            +{stay.amenities.length - 3} more
                          </Badge>
                        )}
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
                {accommodations.filter(stay => stay.type.toLowerCase() === type).length === 0 && (
                  <div className="col-span-3 text-center py-16">
                    <h3 className="text-xl font-semibold text-wanderlust-navy mb-2">Coming Soon</h3>
                    <p className="text-gray-600">
                      We're currently working on adding more {type} options for you. Check back soon!
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
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
                  Join our mailing list for early access to special deals and exclusive properties before they're publicly available.
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
