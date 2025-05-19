
import React, { useState } from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import HeroSection from '@/components/travel/HeroSection';
import DestinationList from '@/components/travel/DestinationList';
import TravelExperience from '@/components/travel/TravelExperience';
import CallToAction from '@/components/travel/CallToAction';
import { featuredDestinations, categories } from '@/data/destinationsData';

const TravelPage = () => {
  // State variables for filters
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
      {/* Hero Section with Search Form */}
      <HeroSection 
        transportMode={transportMode}
        setTransportMode={setTransportMode}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      {/* Destination Categories and Listings */}
      <DestinationList 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredDestinations={filteredDestinations}
      />

      {/* Featured Travel Experiences */}
      <TravelExperience />

      {/* Call to Action */}
      <CallToAction />
    </PublicLayout>
  );
};

export default TravelPage;
