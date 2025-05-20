
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-6">
            Seraphina Health AI was founded with a mission to revolutionize healthcare through artificial intelligence.
            Our team of medical professionals and AI experts work together to create intelligent health solutions
            that are accessible to everyone.
          </p>
          <p className="text-gray-700 mb-6">
            We believe that AI can transform the way people manage their health by providing personalized insights,
            early detection of health issues, and ongoing support for wellness goals.
          </p>
          <p className="text-gray-700">
            Our commitment is to maintain the highest standards of medical accuracy while leveraging cutting-edge
            technology to empower individuals to take control of their health journey.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
