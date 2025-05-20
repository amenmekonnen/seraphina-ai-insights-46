
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const DemoSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-seraphina-purple/90 to-seraphina-dark rounded-3xl overflow-hidden text-white relative">
          {/* Background graphic elements */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20"></div>
            <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-white/10"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-white/15"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Seraphina in Action</h2>
                
                <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                  See how our AI assistant can analyze symptoms, provide health insights, and offer personalized recommendations in real-time.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button className="bg-white text-seraphina-purple hover:bg-seraphina-light hover:text-seraphina-dark transition-colors">
                    Watch Demo Video
                  </Button>
                  
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 transition-colors">
                    Schedule Live Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 max-w-md">
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="flex-1 text-center text-sm text-white/60">Seraphina Demo</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-seraphina-accent flex items-center justify-center text-xs font-medium shrink-0">
                        U
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-sm">
                        I've been experiencing headaches and fatigue for the past week.
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-seraphina-purple flex items-center justify-center text-xs font-medium shrink-0">
                        S
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-sm">
                        <div className="mb-1 font-medium">Analyzing symptoms...</div>
                        <p>Your symptoms could indicate dehydration or stress. I recommend increasing water intake and tracking sleep patterns. Would you like personalized recommendations?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-seraphina-accent flex items-center justify-center text-xs font-medium shrink-0">
                        U
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-sm">
                        Yes, please give me recommendations for reducing stress.
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-seraphina-purple flex items-center justify-center text-xs font-medium shrink-0">
                        S
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-sm shimmer">
                        <div className="h-3 bg-white/20 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-white/20 rounded w-full mb-2"></div>
                        <div className="h-3 bg-white/20 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
