
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-seraphina-darkBlue/90 border-t border-seraphina-teal/10">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <HeartPulse className="w-8 h-8 text-seraphina-pink" />
              <div className="flex flex-col">
                <span className="text-xs text-seraphina-teal uppercase tracking-widest">AdaVerse</span>
                <span className="text-lg font-inter font-bold text-white">Seraphina</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Future-Driven. Human-Centered. Unapologetically Bold.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-seraphina-darkBlue/50 flex items-center justify-center hover:bg-seraphina-pink hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-seraphina-darkBlue/50 flex items-center justify-center hover:bg-seraphina-pink hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4 uppercase tracking-wider text-sm">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-300 hover:text-seraphina-teal">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-seraphina-teal">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-seraphina-teal">Demo</Link></li>
              <li><Link to="/integrations" className="text-gray-300 hover:text-seraphina-teal">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-300 hover:text-seraphina-teal">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-300 hover:text-seraphina-teal">Health Guides</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-seraphina-teal">Research</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-seraphina-teal">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-seraphina-teal">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-seraphina-teal">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-seraphina-teal">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-seraphina-teal">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-seraphina-teal/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 AdaVerse - Seraphina Health Division. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-seraphina-teal">Privacy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-seraphina-teal">Terms</Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-seraphina-teal">Cookies</Link>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-seraphina-teal">
            <span className="italic font-medium">"Intelligence With Impact"</span> — 
            <span className="text-gray-400"> Where AI Meets Humanity</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
