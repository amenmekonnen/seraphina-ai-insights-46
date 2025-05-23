
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to server endpoint (update URL when deployed)
      const response = await fetch('http://localhost:3001/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to join waitlist');
      }

      toast({
        title: "Success!",
        description: "You've been added to our beta waitlist. We've sent you a confirmation email!",
      });
      
      setEmail('');
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Failed to add you to the waitlist. Please try again.",
        variant: "destructive",
      });
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          
          {submissionStatus === 'success' ? (
            <Card className="border-seraphina-light/50 shadow-md bg-green-50">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold text-green-600 mb-4">Thank You for Joining!</h3>
                  <p className="mb-2">We've added you to our beta waitlist.</p>
                  <p>Please check your email for a confirmation message.</p>
                </div>
              </CardContent>
            </Card>
          ) : (
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
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="focus:ring-seraphina-purple"
                      disabled={isSubmitting}
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
          )}
          
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
