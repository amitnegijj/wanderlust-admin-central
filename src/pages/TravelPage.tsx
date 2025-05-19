
import React, { useState } from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';
import HeroSection from '@/components/travel/HeroSection';
import DestinationList from '@/components/travel/DestinationList';
import TravelExperience from '@/components/travel/TravelExperience';
import CallToAction from '@/components/travel/CallToAction';
import { featuredDestinations, categories } from '@/data/destinationsData';

// Update the type definition to include tripType and ageGroup
type Destination = typeof featuredDestinations[0] & {
  tripType?: string;
  ageGroup?: string;
};

const TravelPage = () => {
  // State variables for filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([1000, 3000]);
  const [transportMode, setTransportMode] = useState("");
  const [tripType, setTripType] = useState(""); // "party" or "normal"
  const [ageGroup, setAgeGroup] = useState(""); // "18-30" or "30plus"
  
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
    
    // Filter by trip type (if selected)
    if (tripType && (destination as Destination).tripType !== tripType) {
      return false;
    }
    
    // Filter by age group (if selected)
    if (ageGroup && (destination as Destination).ageGroup !== ageGroup) {
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
        tripType={tripType}
        setTripType={setTripType}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
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
