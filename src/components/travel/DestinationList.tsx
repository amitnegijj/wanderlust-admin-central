
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DestinationCard from './DestinationCard';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  category: string;
  transportModes: string[];
}

interface DestinationListProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredDestinations: Destination[];
}

const DestinationList: React.FC<DestinationListProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  filteredDestinations
}) => {
  return (
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
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DestinationList;
