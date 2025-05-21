
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeartPulse } from 'lucide-react';

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
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg bg-pink-50 p-6 flex flex-col items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center mb-4">
                  <HeartPulse className="w-16 h-16 text-pink-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Smart Thermal-Sensing Technology</h3>
                  <p className="text-sm text-gray-600">Our innovative sports bra uses AI-powered thermal sensors to detect potential health concerns while providing comfort and support.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-700 mb-4">
                Our fitness tracking and events calendar will be available in the beta release.
                Join our waitlist to be notified when this feature becomes available.
              </p>
              <p className="text-gray-700">
                The Seraphina smart sports bra combines cutting-edge technology with everyday comfort, helping you stay on top of your health while supporting your active lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FitnessEvents;
