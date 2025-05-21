
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FitnessEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Fitness & Events</h1>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Track your workouts and join exclusive training sessions with our wellness experts.
        </p>
        
        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
          <p className="text-gray-700">
            Our fitness tracking and events calendar will be available in the beta release.
            Join our waitlist to be notified when this feature becomes available.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FitnessEvents;
