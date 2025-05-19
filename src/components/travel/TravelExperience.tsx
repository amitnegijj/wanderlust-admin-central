
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Hotel, Users, Camera } from 'lucide-react';

const TravelExperience = () => {
  const experiences = [
    { icon: <Plane className="w-5 h-5" />, title: "Flight + Hotel Packages" },
    { icon: <Hotel className="w-5 h-5" />, title: "All-Inclusive Resorts" },
    { icon: <Users className="w-5 h-5" />, title: "Guided Tours" },
    { icon: <Camera className="w-5 h-5" />, title: "Photography Trips" }
  ];

  return (
    <div className="bg-wanderlust-sand/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-wanderlust-navy">Popular Travel Experiences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {experiences.map((item, index) => (
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
  );
};

export default TravelExperience;
