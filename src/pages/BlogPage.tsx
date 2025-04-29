
import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';

const BlogPage = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Travel Blog</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Stories, tips, and insights from seasoned travelers. Get inspired for your next adventure.
        </p>

        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            We're currently working on bringing you inspiring travel content. Check back soon!
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default BlogPage;
