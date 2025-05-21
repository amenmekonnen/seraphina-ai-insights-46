
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our beta waitlist. We'll contact you soon!",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join the Seraphina Beta Waitlist</h1>
          <p className="text-gray-700 text-center mb-10">
            Be among the first to experience our revolutionary thermal sensing technology for early breast cancer detection.
            The beta version will be available mid-July 2025.
          </p>
          
          <Card className="border-seraphina-light/50 shadow-md">
            <CardHeader className="bg-gradient-to-r from-seraphina-purple/10 to-seraphina-accent/5 rounded-t-lg">
              <CardTitle className="text-2xl text-seraphina-purple">Sign Up for Early Access</CardTitle>
              <CardDescription>
                Limited spots available for our exclusive beta program
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="font-medium">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-seraphina-purple"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-seraphina-purple to-seraphina-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  By joining our waitlist, you agree to our Terms of Service and Privacy Policy.
                  We value your privacy and will never share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 bg-white/50 p-6 rounded-lg border border-seraphina-light/30">
            <h3 className="text-xl font-bold mb-4">What to expect from our beta:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI scan reports and thermal analysis</li>
              <li>Fitness tracking integration</li>
              <li>Access to our exclusive wellness community</li>
              <li>Thermal wellness tips</li>
              <li>Opportunity to provide feedback on our technology</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist;
