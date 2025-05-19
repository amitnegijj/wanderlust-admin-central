
import React, { useState } from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  MapPin, Calendar, Users, Star, Plane, Hotel, Camera, 
  Car, Bus, Train, Bike, TramFront, Truck, 
} from 'lucide-react';

const TravelPage = () => {
  // Sample featured destinations
  const featuredDestinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800",
      description: "Experience breathtaking sunsets and iconic white-washed buildings perched on cliffs overlooking the azure Aegean Sea.",
      rating: 4.9,
      reviews: 245,
      price: 1299,
      duration: "7 days",
      category: "Beach",
      transportModes: ["plane", "bus"]
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
      description: "Immerse yourself in Japanese culture with ancient temples, traditional tea houses, and serene bamboo forests.",
      rating: 4.8,
      reviews: 188,
      price: 1599,
      duration: "10 days",
      category: "Cultural",
      transportModes: ["plane", "train", "bike"]
    },
    {
      id: 3,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=800",
      description: "Discover pristine mountain landscapes with world-class skiing, hiking trails, and charming alpine villages.",
      rating: 4.7,
      reviews: 156,
      price: 1899,
      duration: "8 days",
      category: "Mountain",
      transportModes: ["train", "car"]
    },
    {
      id: 4,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800",
      description: "Relax on beautiful beaches, explore rice terraces, and experience the unique blend of culture and natural beauty.",
      rating: 4.6,
      reviews: 321,
      price: 1199,
      duration: "12 days",
      category: "Beach",
      transportModes: ["plane", "bike", "car"]
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800",
      description: "Trek through misty mountains to discover the ancient Incan citadel with spectacular views of the Andes.",
      rating: 4.9,
      reviews: 278,
      price: 2199,
      duration: "9 days",
      category: "Adventure",
      transportModes: ["plane", "train", "bus"]
    },
    {
      id: 6,
      name: "Serengeti, Tanzania",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=800",
      description: "Witness the incredible wildlife and the Great Migration across the endless plains of one of Africa's most iconic safari destinations.",
      rating: 4.8,
      reviews: 142,
      price: 2899,
      duration: "10 days",
      category: "Safari",
      transportModes: ["plane", "truck", "car"]
    }
  ];

  const categories = ["All", "Beach", "Mountain", "Cultural", "Safari", "Adventure"];
  
  // New state variables for filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([1000, 3000]);
  const [transportMode, setTransportMode] = useState("");
  
  // Filter destinations based on selected filters
  const filteredDestinations = featuredDestinations.filter(destination => {
    // Filter by category
    if (selectedCategory !== "All" && destination.category !== selectedCategory) {
      return false;
    }
    
    // Filter by price range
    if (destination.price < priceRange[0] || destination.price > priceRange[1]) {
      return false;
    }
    
    // Filter by transport mode (if selected)
    if (transportMode && !destination.transportModes.includes(transportMode)) {
      return false;
    }
    
    return true;
  });
  
  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-wanderlust-navy/90 text-white py-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Destinations</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Explore our curated collection of beautiful destinations around the world. From beach getaways to mountain retreats, city adventures to cultural experiences.
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
                        placeholder="Travel dates" 
                        className="w-full outline-none text-wanderlust-navy"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-500 mb-1 text-left">Travelers</label>
                    <div className="flex items-center gap-2 border-b pb-2">
                      <Users className="h-4 w-4 text-wanderlust-teal" />
                      <select className="w-full outline-none text-wanderlust-navy bg-transparent">
                        <option>2 Travelers</option>
                        <option>1 Traveler</option>
                        <option>3 Travelers</option>
                        <option>4 Travelers</option>
                        <option>5+ Travelers</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* New Travel Mode Selection */}
                <div className="mt-5 border-t pt-4">
                  <label className="text-xs font-medium text-gray-500 mb-2 block text-left">Travel Mode</label>
                  <ToggleGroup 
                    type="single" 
                    value={transportMode} 
                    onValueChange={(value) => setTransportMode(value)}
                    className="flex flex-wrap justify-start gap-2"
                  >
                    <ToggleGroupItem value="car" aria-label="Car">
                      <Car className="h-4 w-4 mr-1" />
                      <span className="text-xs">Car</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="bus" aria-label="Bus">
                      <Bus className="h-4 w-4 mr-1" />
                      <span className="text-xs">Bus</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="train" aria-label="Train">
                      <Train className="h-4 w-4 mr-1" />
                      <span className="text-xs">Train</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="plane" aria-label="Plane">
                      <Plane className="h-4 w-4 mr-1" />
                      <span className="text-xs">Plane</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="bike" aria-label="Bike">
                      <Bike className="h-4 w-4 mr-1" />
                      <span className="text-xs">Bike</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="truck" aria-label="Truck">
                      <Truck className="h-4 w-4 mr-1" />
                      <span className="text-xs">Truck</span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                {/* Price Range Slider */}
                <div className="mt-5 border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-medium text-gray-500">Price Range</label>
                    <span className="text-xs font-medium text-wanderlust-teal">
                      ${priceRange[0]} - ${priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[1000, 3000]}
                    min={500}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                </div>
                
                <div className="mt-5 flex justify-center">
                  <Button className="bg-wanderlust-teal hover:bg-wanderlust-teal/90 text-white px-8">
                    <Plane className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Destination Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-wanderlust-navy">Explore Destinations</h2>
        <Tabs 
          defaultValue="All" 
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-5">{category}</TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => (
                <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-white text-wanderlust-navy">{destination.category}</Badge>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-wanderlust-navy group-hover:text-wanderlust-teal transition-colors">{destination.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{destination.rating}</span>
                        <span className="text-gray-500 text-sm">({destination.reviews})</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{destination.description}</p>
                    
                    {/* Transport modes */}
                    <div className="flex gap-2 mb-3">
                      {destination.transportModes.includes('car') && (
                        <span className="bg-gray-100 p-1 rounded" title="Car">
                          <Car className="w-3 h-3 text-wanderlust-navy" />
                        </span>
                      )}
                      {destination.transportModes.includes('bus') && (
                        <span className="bg-gray-100 p-1 rounded" title="Bus">
                          <Bus className="w-3 h-3 text-wanderlust-navy" />
                        </span>
                      )}
                      {destination.transportModes.includes('train') && (
                        <span className="bg-gray-100 p-1 rounded" title="Train">
                          <Train className="w-3 h-3 text-wanderlust-navy" />
                        </span>
                      )}
                      {destination.transportModes.includes('plane') && (
                        <span className="bg-gray-100 p-1 rounded" title="Plane">
                          <Plane className="w-3 h-3 text-wanderlust-navy" />
                        </span>
                      )}
                      {destination.transportModes.includes('bike') && (
                        <span className="bg-gray-100 p-1 rounded" title="Bike">
                          <Bike className="w-3 h-3 text-wanderlust-navy" />
                        </span>
                      )}
                      {destination.transportModes.includes('truck') && (
                        <span className="bg-gray-100 p-1 rounded" title="Truck">
                          <Truck className="w-3 h-3 text-wanderlust-navy" />
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-wanderlust-teal" />
                        <span className="text-sm text-gray-600">{destination.duration}</span>
                      </div>
                      <div>
                        <span className="font-bold text-lg text-wanderlust-navy">${destination.price}</span>
                        <span className="text-gray-500"> / person</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Featured Travel Experiences */}
      <div className="bg-wanderlust-sand/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-wanderlust-navy">Popular Travel Experiences</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Plane className="w-5 h-5" />, title: "Flight + Hotel Packages" },
              { icon: <Hotel className="w-5 h-5" />, title: "All-Inclusive Resorts" },
              { icon: <Users className="w-5 h-5" />, title: "Guided Tours" },
              { icon: <Camera className="w-5 h-5" />, title: "Photography Trips" }
            ].map((item, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-md transition-all border-wanderlust-teal/20 hover:border-wanderlust-teal">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wanderlust-teal/10 flex items-center justify-center mb-4 group-hover:bg-wanderlust-teal/20 transition-colors">
                    <div className="text-wanderlust-teal">{item.icon}</div>
                  </div>
                  <span className="font-medium text-wanderlust-navy">{item.title}</span>
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
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready for Your Next Adventure?</h3>
                <p className="text-white/80 max-w-lg">
                  Sign up for our newsletter to receive exclusive travel deals, insider tips, and inspiration for your next journey.
                </p>
              </div>
              <Button className="bg-white text-wanderlust-navy hover:bg-white/90 shadow-lg">
                Get Inspired
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  );
};

export default TravelPage;
