
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, Calendar, Star, Plane, Car, Bus, Train, Bike, Truck
} from 'lucide-react';

interface DestinationCardProps {
  destination: {
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
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const transportIcons = {
    car: <Car className="w-3 h-3 text-wanderlust-navy" />,
    bus: <Bus className="w-3 h-3 text-wanderlust-navy" />,
    train: <Train className="w-3 h-3 text-wanderlust-navy" />,
    plane: <Plane className="w-3 h-3 text-wanderlust-navy" />,
    bike: <Bike className="w-3 h-3 text-wanderlust-navy" />,
    truck: <Truck className="w-3 h-3 text-wanderlust-navy" />
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
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
          {destination.transportModes.map((mode) => (
            <span key={mode} className="bg-gray-100 p-1 rounded" title={mode.charAt(0).toUpperCase() + mode.slice(1)}>
              {transportIcons[mode as keyof typeof transportIcons]}
            </span>
          ))}
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
  );
};

export default DestinationCard;
