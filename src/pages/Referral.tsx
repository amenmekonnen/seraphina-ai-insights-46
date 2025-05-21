
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Referral: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Medical Referrals</h1>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Connect with healthcare providers and schedule appointments based on your scan results.
        </p>
        
        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
          <p className="text-gray-700">
            Our healthcare provider referral system, appointment booking, and reporting features will be available in the beta release.
            Join our waitlist to be notified when these features become available.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Referral;
