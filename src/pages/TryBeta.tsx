
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";
import { HeartPulse } from 'lucide-react';

const TryBeta: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login successful!",
        description: "Redirecting to the beta app...",
      });
      setIsLoading(false);
      navigate('/beta-demo');
    }, 1500);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      toast({
        title: "Account created!",
        description: "You can now log in to access the beta.",
      });
      setIsLoading(false);
      setIsLoginView(true);
    }, 1500);
  };

  const skipToDemo = () => {
    navigate('/beta-demo');
  };

  return (
    <div className="min-h-screen bg-seraphina-darkBlue">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-seraphina-teal/20 bg-seraphina-black/50 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-seraphina-teal/10 rounded-t-lg">
              <div className="mx-auto mb-4">
                <HeartPulse className="w-12 h-12 text-seraphina-pink" />
              </div>
              <CardTitle className="text-2xl text-white text-center">
                {isLoginView ? "Login to Try Beta" : "Sign Up for Beta Access"}
              </CardTitle>
              <CardDescription className="text-center text-white/70">
                Experience our thermal scanning technology
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {isLoginView ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="font-medium text-white">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="px-4 py-2 bg-seraphina-black border border-seraphina-teal/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-seraphina-teal"
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="password" className="font-medium text-white">Password</label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="px-4 py-2 bg-seraphina-black border border-seraphina-teal/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-seraphina-teal"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-seraphina-teal hover:bg-seraphina-teal/80"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                  
                  <div className="text-center">
                    <button 
                      type="button" 
                      onClick={() => setIsLoginView(false)}
                      className="text-seraphina-pink hover:underline text-sm"
                    >
                      Don't have an account? Sign up
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="signup-email" className="font-medium text-white">Email</label>
                    <input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="px-4 py-2 bg-seraphina-black border border-seraphina-teal/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-seraphina-teal"
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="signup-password" className="font-medium text-white">Password</label>
                    <input
                      id="signup-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="px-4 py-2 bg-seraphina-black border border-seraphina-teal/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-seraphina-teal"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-seraphina-teal hover:bg-seraphina-teal/80"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Sign Up'}
                  </Button>
                  
                  <div className="text-center">
                    <button 
                      type="button" 
                      onClick={() => setIsLoginView(true)}
                      className="text-seraphina-pink hover:underline text-sm"
                    >
                      Already have an account? Login
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-8 pt-4 border-t border-seraphina-teal/20 text-center">
                <p className="mb-4 text-sm text-white/70">
                  Don't want to sign up right now?
                </p>
                <Button 
                  onClick={skipToDemo} 
                  variant="outline" 
                  className="w-full border-seraphina-pink text-seraphina-pink hover:bg-seraphina-pink/10"
                >
                  Try Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TryBeta;
