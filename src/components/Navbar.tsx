
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between relative z-50 bg-white/80 backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-seraphina-purple to-seraphina-accent text-white flex items-center justify-center font-playfair text-lg font-bold">S</div>
        <span className="text-xl font-playfair font-semibold text-gray-800">Seraphina</span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-seraphina-purple transition-colors">Home</Link>
        <Link to="/features" className="text-gray-700 hover:text-seraphina-purple transition-colors">Features</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-seraphina-purple transition-colors">Dashboard</Link>
        <Link to="/health-data" className="text-gray-700 hover:text-seraphina-purple transition-colors">Health Data</Link>
        <Link to="/blog" className="text-gray-700 hover:text-seraphina-purple transition-colors">Blog</Link>
        <Link to="/about" className="text-gray-700 hover:text-seraphina-purple transition-colors">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-seraphina-purple transition-colors">Contact</Link>
      </div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Call to Action Button */}
      <div className="hidden md:block">
        <Button className="bg-gradient-to-r from-seraphina-purple to-seraphina-dark hover:opacity-90 transition-opacity" asChild>
          <Link to="/waitlist">Join Beta</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50 flex flex-col gap-4">
          <Link to="/" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link to="/health-data" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Health Data</Link>
          <Link to="/blog" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-seraphina-purple transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Button className="bg-gradient-to-r from-seraphina-purple to-seraphina-dark hover:opacity-90 transition-opacity w-full mt-2" asChild>
            <Link to="/waitlist" onClick={() => setMobileMenuOpen(false)}>Join Beta</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
