
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard: React.FC = () => {
  // This is just a placeholder for now - we would integrate with actual data in a real implementation
  const placeholderData = {
    lastScan: "May 15, 2025",
    riskStatus: "Low Risk",
    completedScans: 12,
    nextScheduledScan: "May 22, 2025",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
          <div className="bg-seraphina-light/50 px-4 py-1 rounded-full text-sm text-seraphina-purple">
            Beta Demo Mode
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Last Scan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{placeholderData.lastScan}</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Risk Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <p className="text-2xl font-bold">{placeholderData.riskStatus}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Completed Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{placeholderData.completedScans}</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Next Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{placeholderData.nextScheduledScan}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Thermal Scan Results</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2">
                <div className="aspect-square bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                    Thermal Heatmap Placeholder
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">Analysis Summary</h3>
                  <p className="text-gray-700">
                    This is a placeholder for thermal scan results that would be generated by the AI model. 
                    In the actual app, this would display real-time analysis of thermal patterns from the smart bra.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Temperature Variation</span>
                    <span className="font-medium">Normal Range</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Asymmetry Detection</span>
                    <span className="font-medium">None Detected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Areas of Concern</span>
                    <span className="font-medium">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="space-y-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-seraphina-light/70 flex items-center justify-center text-seraphina-purple">
                    {index}
                  </div>
                  <div>
                    <h4 className="font-medium">Scan Completed</h4>
                    <p className="text-sm text-gray-500">May {10 + index}, 2025</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
