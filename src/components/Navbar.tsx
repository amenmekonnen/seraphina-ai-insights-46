
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-seraphina-purple to-seraphina-accent text-white flex items-center justify-center font-playfair text-lg font-bold">S</div>
        <span className="text-xl font-playfair font-semibold text-gray-800">Seraphina</span>
      </Link>
      
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-seraphina-purple transition-colors">Home</Link>
        <Link to="/features" className="text-gray-700 hover:text-seraphina-purple transition-colors">Features</Link>
        <Link to="/about" className="text-gray-700 hover:text-seraphina-purple transition-colors">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-seraphina-purple transition-colors">Contact</Link>
      </div>
      
      <Button className="bg-gradient-to-r from-seraphina-purple to-seraphina-dark hover:opacity-90 transition-opacity">
        Try Live Demo
      </Button>
    </nav>
  );
};

export default Navbar;
