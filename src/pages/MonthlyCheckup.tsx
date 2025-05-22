
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CalendarCheck, CalendarClock, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MonthlyCheckup: React.FC = () => {
  return (
    <div className="min-h-screen bg-seraphina-darkBlue">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Monthly Checkup Results</h1>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Track your monthly thermal scans and monitor changes over time.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-seraphina-teal/20 bg-seraphina-black/50 backdrop-blur-sm shadow-lg mb-8">
            <CardHeader className="bg-seraphina-teal/10 rounded-t-lg">
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Calendar className="w-6 h-6 text-seraphina-pink" />
                Monthly Reports
              </CardTitle>
              <CardDescription className="text-white/70">
                Your thermal scan history and trends
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-seraphina-teal/5 p-6 rounded-lg text-center mb-6">
                <CalendarClock className="w-12 h-12 text-seraphina-pink mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">Coming Soon in Beta</h3>
                <p className="text-white/70">
                  Monthly checkup results will be available once you join the beta program and start using Seraphina's smart sports bra.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-seraphina-teal/20 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-seraphina-pink" />
                    Timeline
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l border-seraphina-teal/30">
                      <div className="absolute w-3 h-3 rounded-full bg-seraphina-pink -left-1.5 top-1.5"></div>
                      <p className="text-xs text-seraphina-pink font-medium">UPCOMING</p>
                      <p className="text-white font-medium">Set your first scan</p>
                      <p className="text-white/50 text-sm">Schedule your first thermal scan to establish a baseline</p>
                    </div>
                    
                    <div className="relative pl-6 border-l border-seraphina-teal/30">
                      <div className="absolute w-3 h-3 rounded-full bg-seraphina-teal/50 -left-1.5 top-1.5"></div>
                      <p className="text-xs text-seraphina-teal/70 font-medium">FUTURE</p>
                      <p className="text-white/70 font-medium">Regular monthly comparisons</p>
                      <p className="text-white/50 text-sm">Track changes and receive insights over time</p>
                    </div>
                    
                    <div className="relative pl-6">
                      <div className="absolute w-3 h-3 rounded-full bg-seraphina-teal/50 -left-1.5 top-1.5"></div>
                      <p className="text-xs text-seraphina-teal/70 font-medium">FUTURE</p>
                      <p className="text-white/70 font-medium">Personalized recommendations</p>
                      <p className="text-white/50 text-sm">Get AI-powered health insights based on your data</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-seraphina-teal/20 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-seraphina-pink" />
                    Benefits
                  </h3>
                  
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-seraphina-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-seraphina-pink text-xs">✓</span>
                      </div>
                      <span>Early detection of potential health concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-seraphina-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-seraphina-pink text-xs">✓</span>
                      </div>
                      <span>Track subtle changes in breast tissue temperature over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-seraphina-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-seraphina-pink text-xs">✓</span>
                      </div>
                      <span>AI-powered analysis of your thermal patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-seraphina-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-seraphina-pink text-xs">✓</span>
                      </div>
                      <span>Share reports securely with healthcare providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-seraphina-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-seraphina-pink text-xs">✓</span>
                      </div>
                      <span>Receive personalized health recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild className="bg-seraphina-pink hover:bg-seraphina-pink/80">
                  <Link to="/try-beta">Try Beta Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-white p-1">
                <img src="/adaverse-logo.png" alt="Adaverse Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Adaverse</p>
                <p className="text-white/70 text-sm">Founded by Adaora Onwumelu</p>
              </div>
            </div>
            <p className="text-white/70 max-w-lg mx-auto text-sm">
              Seraphina is developed by Adaverse, founded by Adaora Onwumelu with a mission to revolutionize women's health through accessible AI-powered technology.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MonthlyCheckup;
