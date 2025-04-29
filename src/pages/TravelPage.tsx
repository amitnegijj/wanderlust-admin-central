
import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';

const TravelPage = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Travel Destinations</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore our curated collection of beautiful destinations around the world. From beach getaways to mountain retreats, city adventures to cultural experiences.
        </p>

        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            We're currently working on bringing you amazing travel content. Check back soon!
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default TravelPage;
