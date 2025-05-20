
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Features</h1>
        <p className="text-gray-700 text-center mb-12">
          Discover the powerful features of Seraphina Health AI Assistant.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature content would go here */}
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-3">AI-Driven Health Suggestions</h3>
            <p className="text-gray-600">Advanced machine learning provides personalized health recommendations based on your unique health profile and goals.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Real-Time Voice Diagnostics</h3>
            <p className="text-gray-600">Speak naturally about your symptoms and receive instant preliminary analysis and guidance from our AI assistant.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Personalized Insights</h3>
            <p className="text-gray-600">Get custom health advice that adapts to your progress, preferences, and changing health conditions.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
