
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  MapPin, Calendar, Users, Plane, Car, Bus, Train, Bike, Truck 
} from 'lucide-react';

interface SearchFormProps {
  transportMode: string;
  setTransportMode: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ 
  transportMode, 
  setTransportMode, 
  priceRange, 
  setPriceRange 
}) => {
  return (
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
        
        {/* Travel Mode Selection */}
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
  );
};

export default SearchForm;
