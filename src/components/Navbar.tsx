
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, HeartPulse, Instagram, Facebook } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between relative z-50 bg-seraphina-darkBlue text-white">
      <Link to="/" className="flex items-center gap-2">
        <HeartPulse className="w-10 h-10 text-seraphina-pink" />
        <span className="text-xl font-playfair font-semibold italic">Seraphina</span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-white hover:text-seraphina-pink transition-colors font-playfair">Home</Link>
        <Link to="/dashboard" className="text-white hover:text-seraphina-pink transition-colors font-playfair">Dashboard</Link>
        <Link to="/health-data" className="text-white hover:text-seraphina-pink transition-colors font-playfair">Health Data</Link>
        <Link to="/fitness-events" className="text-white hover:text-seraphina-pink transition-colors font-playfair">Fitness</Link>
        <Link to="/monthly-checkup" className="text-white hover:text-seraphina-pink transition-colors font-playfair">Monthly Checkup</Link>
        <Link to="/blog" className="text-white hover:text-seraphina-pink transition-colors font-playfair">Blog</Link>
        <Link to="/about" className="text-white hover:text-seraphina-pink transition-colors font-playfair">About</Link>
      </div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Social Links & CTA */}
      <div className="hidden md:flex items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="w-5 h-5 text-white hover:text-seraphina-pink transition-colors" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="w-5 h-5 text-white hover:text-seraphina-pink transition-colors" />
        </a>
        <Button className="bg-seraphina-teal hover:bg-seraphina-teal/80 transition-colors font-playfair" asChild>
          <Link to="/waitlist">Join Beta</Link>
        </Button>
        <Button className="bg-seraphina-pink hover:bg-seraphina-pink/80 transition-colors font-playfair" asChild>
          <Link to="/try-beta">Try Beta</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-seraphina-darkBlue shadow-lg py-4 px-6 z-50 flex flex-col gap-4">
          <Link to="/" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/dashboard" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link to="/health-data" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>Health Data</Link>
          <Link to="/fitness-events" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>Fitness</Link>
          <Link to="/monthly-checkup" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>Monthly Checkup</Link>
          <Link to="/blog" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/about" className="text-white hover:text-seraphina-pink transition-colors py-2 font-playfair" onClick={() => setMobileMenuOpen(false)}>About</Link>
          
          <div className="flex items-center gap-4 py-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-white hover:text-seraphina-pink transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-white hover:text-seraphina-pink transition-colors" />
            </a>
          </div>
          
          <Button className="bg-seraphina-teal hover:bg-seraphina-teal/80 transition-colors w-full mt-1 font-playfair" asChild>
            <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>Join Beta</Link>
          </Button>
          <Button className="bg-seraphina-pink hover:bg-seraphina-pink/80 transition-colors w-full mt-1 font-playfair" asChild>
            <Link to="/try-beta" onClick={() => setMobileMenuOpen(false)}>Try Beta</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
