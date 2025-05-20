
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pb-24">
      {/* Background blobs */}
      <div className="blur-blob w-[300px] h-[300px] top-20 -left-32"></div>
      <div className="blur-blob w-[400px] h-[400px] -bottom-40 -right-20 bg-seraphina-accent/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              AI-Powered <span className="text-seraphina-purple">Health</span> Assistant
              <span className="text-seraphina-accent ml-2">🧠</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 mb-8">
              Revolutionize your healthcare journey with personalized AI diagnostics, real-time insights, and intelligent wellness recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-seraphina-purple to-seraphina-dark text-white px-6 py-6 rounded-full font-medium text-lg hover:shadow-lg hover:opacity-90 transition-all">
                Try Live Demo
              </Button>
              <Button variant="outline" className="border-seraphina-purple text-seraphina-purple px-6 py-6 rounded-full font-medium text-lg hover:bg-seraphina-light transition-all">
                Book a Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="AI Health Assistant in action" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium">AI Analysis Active</span>
                </div>
                <p className="font-medium text-lg">Personalized health insights processed in real-time</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-seraphina-accent/20 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-seraphina-purple/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
