
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pb-24">
      {/* Background blobs */}
      <div className="blur-blob w-[300px] h-[300px] top-20 -left-32"></div>
      <div className="blur-blob w-[400px] h-[400px] -bottom-40 -right-20 bg-seraphina-teal/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-2 text-seraphina-teal uppercase tracking-wider text-sm font-semibold">
              AdaVerse Health Division
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Early Breast Cancer <span className="text-seraphina-pink">Detection</span>
              <span className="text-seraphina-teal ml-2">⚕️</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-4">
              AI-powered thermal sensing technology for early breast cancer detection, fitness tracking, and wellness community.
            </p>
            
            <p className="text-md md:text-lg text-seraphina-pink font-medium max-w-xl mx-auto lg:mx-0 mb-8">
              "Intelligence With Impact" — Where AI Meets Humanity
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-seraphina-pink to-seraphina-darkBlue text-white px-6 py-6 rounded-full font-medium text-lg hover:shadow-lg hover:opacity-90 transition-all" asChild>
                <Link to="/waitlist">
                  Join Beta Waitlist
                </Link>
              </Button>
              <Button variant="outline" className="border-seraphina-teal text-seraphina-teal px-6 py-6 rounded-full font-medium text-lg hover:bg-seraphina-teal/10 transition-all">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Seraphina thermal sensing technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-seraphina-teal animate-pulse"></div>
                  <span className="text-sm font-medium">Smart Thermal Sensing</span>
                </div>
                <p className="font-medium text-lg">HIPAA-compliant early detection technology coming soon</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-seraphina-pink/20 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-seraphina-teal/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
