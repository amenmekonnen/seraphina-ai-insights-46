
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Activity, CheckCircle, AlertCircle } from 'lucide-react';

const BetaDemo: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [results, setResults] = useState<{
    leftBreast: { temperature: number; status: 'normal' | 'elevated' | 'abnormal' };
    rightBreast: { temperature: number; status: 'normal' | 'elevated' | 'abnormal' };
  } | null>(null);

  const startScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setResults(null);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      
      // Generate demo results - usually normal but occasionally show an elevated reading
      const randomValue = Math.random();
      const leftTemp = 35.2 + (randomValue * 2.5);
      const rightTemp = 35.0 + (randomValue * 2.5);
      
      let leftStatus: 'normal' | 'elevated' | 'abnormal' = 'normal';
      let rightStatus: 'normal' | 'elevated' | 'abnormal' = 'normal';
      
      if (leftTemp > 37) leftStatus = 'elevated';
      if (leftTemp > 38) leftStatus = 'abnormal';
      if (rightTemp > 37) rightStatus = 'elevated';
      if (rightTemp > 38) rightStatus = 'abnormal';
      
      setResults({
        leftBreast: { 
          temperature: parseFloat(leftTemp.toFixed(1)), 
          status: leftStatus 
        },
        rightBreast: { 
          temperature: parseFloat(rightTemp.toFixed(1)), 
          status: rightStatus 
        }
      });
    }, 3000);
  };
  
  // Start a scan automatically when the page loads
  useEffect(() => {
    startScan();
  }, []);
  
  const getStatusColor = (status: 'normal' | 'elevated' | 'abnormal') => {
    switch (status) {
      case 'normal':
        return 'text-green-400';
      case 'elevated':
        return 'text-yellow-400';
      case 'abnormal':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="min-h-screen bg-seraphina-darkBlue">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Thermal Scan Demo</h1>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          This is a demonstration of how our thermal scanning technology works to detect potential health concerns.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-seraphina-teal/20 bg-seraphina-black/50 backdrop-blur-sm shadow-lg">
            <CardHeader className="bg-seraphina-teal/10 rounded-t-lg border-b border-seraphina-teal/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-white">
                  Seraphina Thermal Scan
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${isScanning ? 'bg-seraphina-pink animate-pulse' : 'bg-green-400'}`}></div>
                  <span className="text-sm text-white/70">
                    {isScanning ? 'Scanning...' : 'Ready'}
                  </span>
                </div>
              </div>
              <CardDescription className="text-white/70">
                Our AI-powered thermal scanning technology for early detection
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-seraphina-black/40 rounded-lg p-6 relative overflow-hidden">
                  <h3 className="text-lg font-medium text-white mb-4">Thermal Visualization</h3>
                  
                  {isScanning ? (
                    <div className="aspect-square rounded-lg bg-seraphina-darkBlue flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-seraphina-teal/20 to-transparent opacity-50"></div>
                        <Thermometer className="w-16 h-16 text-seraphina-pink animate-pulse" />
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-seraphina-pink" style={{ animation: 'scan 3s ease-in-out infinite' }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-square rounded-lg overflow-hidden">
                      {scanComplete && (
                        <div className="relative w-full h-full bg-gradient-to-b from-seraphina-teal/10 to-seraphina-darkBlue">
                          <div className="absolute inset-0 flex flex-col">
                            <div className="flex-1 border-b border-dashed border-white/20 flex items-center justify-center">
                              <div className={`w-24 h-24 rounded-full ${results?.leftBreast.status === 'normal' ? 'bg-green-500/50' : results?.leftBreast.status === 'elevated' ? 'bg-yellow-500/50' : 'bg-red-500/50'} blur-sm`}></div>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                              <div className={`w-24 h-24 rounded-full ${results?.rightBreast.status === 'normal' ? 'bg-green-500/50' : results?.rightBreast.status === 'elevated' ? 'bg-yellow-500/50' : 'bg-red-500/50'} blur-sm`}></div>
                            </div>
                          </div>
                          <div className="absolute top-2 left-2 text-xs text-white/50">Demo visualization only</div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <Button 
                    onClick={startScan} 
                    className="w-full mt-4 bg-seraphina-teal hover:bg-seraphina-teal/80"
                    disabled={isScanning}
                  >
                    {isScanning ? 'Scanning...' : scanComplete ? 'Scan Again' : 'Start Scan'}
                  </Button>
                </div>
                
                <div className="bg-seraphina-black/40 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Results</h3>
                  
                  {isScanning && (
                    <div className="flex flex-col items-center justify-center h-64">
                      <Activity className="w-12 h-12 text-seraphina-pink animate-pulse mb-4" />
                      <p className="text-white/70">Processing thermal data...</p>
                    </div>
                  )}
                  
                  {scanComplete && results && (
                    <div className="space-y-6">
                      <div className="p-4 border border-seraphina-teal/20 rounded-md">
                        <h4 className="font-medium text-white mb-2">Left Breast</h4>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-semibold text-white">
                              {results.leftBreast.temperature}°C
                            </div>
                            <div className={`flex items-center gap-1 ${getStatusColor(results.leftBreast.status)}`}>
                              {results.leftBreast.status === 'normal' ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <AlertCircle className="w-4 h-4" />
                              )}
                              <span className="capitalize">{results.leftBreast.status}</span>
                            </div>
                          </div>
                          <div className={`w-12 h-12 rounded-full ${results.leftBreast.status === 'normal' ? 'bg-green-500' : results.leftBreast.status === 'elevated' ? 'bg-yellow-500' : 'bg-red-500'} flex items-center justify-center`}>
                            <Thermometer className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-seraphina-teal/20 rounded-md">
                        <h4 className="font-medium text-white mb-2">Right Breast</h4>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-semibold text-white">
                              {results.rightBreast.temperature}°C
                            </div>
                            <div className={`flex items-center gap-1 ${getStatusColor(results.rightBreast.status)}`}>
                              {results.rightBreast.status === 'normal' ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <AlertCircle className="w-4 h-4" />
                              )}
                              <span className="capitalize">{results.rightBreast.status}</span>
                            </div>
                          </div>
                          <div className={`w-12 h-12 rounded-full ${results.rightBreast.status === 'normal' ? 'bg-green-500' : results.rightBreast.status === 'elevated' ? 'bg-yellow-500' : 'bg-red-500'} flex items-center justify-center`}>
                            <Thermometer className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-seraphina-teal/10 rounded-lg">
                        <h4 className="font-medium text-white mb-2">Analysis</h4>
                        <p className="text-white/70 text-sm">
                          {(results.leftBreast.status === 'normal' && results.rightBreast.status === 'normal') 
                            ? "No unusual thermal patterns detected. Your results are within normal parameters." 
                            : "Some thermal asymmetry detected. In a real scenario, our AI would analyze this further and suggest follow-up steps if needed."}
                        </p>
                        <p className="text-white/50 text-xs mt-4 italic">
                          Note: This is a simulated demo. Actual thermal scanning would be performed using our specialized smart sports bra.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-white/70 mb-4">
                  Want to experience the full beta version with personalized insights?
                </p>
                <Button asChild className="bg-seraphina-pink hover:bg-seraphina-pink/80">
                  <a href="/waitlist">Join Our Beta Program</a>
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

export default BetaDemo;
