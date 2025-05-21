
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HealthData: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Health Data Dashboard</h1>
          <div className="bg-seraphina-light/50 px-4 py-1 rounded-full text-sm text-seraphina-purple">
            Beta Demo Mode
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Vital Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Heart Rate</span>
                  <span className="font-medium">75 bpm</span>
                </div>
                <div className="flex justify-between">
                  <span>Body Temperature</span>
                  <span className="font-medium">98.6°F</span>
                </div>
                <div className="flex justify-between">
                  <span>Blood Pressure</span>
                  <span className="font-medium">120/80 mmHg</span>
                </div>
                <div className="flex justify-between">
                  <span>Respiratory Rate</span>
                  <span className="font-medium">16 breaths/min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Fitness Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Daily Steps</span>
                  <span className="font-medium">8,456</span>
                </div>
                <div className="flex justify-between">
                  <span>Calories Burned</span>
                  <span className="font-medium">1,850 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Minutes</span>
                  <span className="font-medium">45 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Sleep Duration</span>
                  <span className="font-medium">7h 15m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-seraphina-light/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Health Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-md border border-green-100">
                  <p className="text-green-800 text-sm">Your vital signs are within normal range.</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <p className="text-blue-800 text-sm">You're 400 steps short of your daily goal.</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
                  <p className="text-amber-800 text-sm">Consider improving your sleep schedule.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Scan History</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Time</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Analysis Result</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3">May {15 - index}, 2025</td>
                    <td className="px-4 py-3">09:30 AM</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">No Concerns</span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-seraphina-purple hover:underline text-sm">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 mb-12">
          <h2 className="text-2xl font-bold mb-6">Health Progress</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="aspect-[3/1] bg-gray-50 rounded flex items-center justify-center">
              <p className="text-gray-500">Health trends and progress charts will appear here</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthData;
