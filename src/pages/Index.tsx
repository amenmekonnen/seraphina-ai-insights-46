
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <Hero />
      <Features />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default Index;
