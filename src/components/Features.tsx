
import React from 'react';
import { Brain, Mic, UserCircle } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-seraphina-purple" />,
      title: "AI-Driven Health Suggestions",
      description: "Advanced machine learning provides personalized health recommendations based on your unique health profile and goals."
    },
    {
      icon: <Mic className="w-8 h-8 text-seraphina-purple" />,
      title: "Real-Time Voice Diagnostics",
      description: "Speak naturally about your symptoms and receive instant preliminary analysis and guidance from our AI assistant."
    },
    {
      icon: <UserCircle className="w-8 h-8 text-seraphina-purple" />,
      title: "Personalized Insights",
      description: "Get custom health advice that adapts to your progress, preferences, and changing health conditions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-seraphina-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience the next generation of healthcare technology with our powerful AI assistant designed to enhance your wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
            >
              <div className="mb-6 p-3 rounded-xl bg-seraphina-light/50 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-seraphina-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/80 border border-seraphina-light/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your health journey?</h3>
              <p className="text-gray-700 mb-6">
                Join thousands of users who have already improved their wellness with Seraphina's AI Health Assistant.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>Join 10,000+ users</span>
              </div>
            </div>
            <div className="shrink-0">
              <button className="rounded-full bg-gradient-to-r from-seraphina-purple to-seraphina-dark text-white font-medium py-3 px-6 hover:shadow-lg transition-all">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
