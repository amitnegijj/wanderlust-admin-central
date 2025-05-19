
import React from 'react';
import SearchForm from './SearchForm';

interface HeroSectionProps {
  transportMode: string;
  setTransportMode: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  transportMode,
  setTransportMode,
  priceRange,
  setPriceRange
}) => {
  return (
    <div className="relative bg-wanderlust-navy/90 text-white py-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Destinations</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Explore our curated collection of beautiful destinations around the world. From beach getaways to mountain retreats, city adventures to cultural experiences.
          </p>
          
          {/* Search Box */}
          <SearchForm
            transportMode={transportMode}
            setTransportMode={setTransportMode}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
