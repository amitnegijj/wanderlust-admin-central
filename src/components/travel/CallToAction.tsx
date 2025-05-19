
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
