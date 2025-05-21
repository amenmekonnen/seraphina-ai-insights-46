
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Thermal Sensing Technology in Breast Cancer Detection",
      excerpt: "Learn how thermal sensing technology is revolutionizing early detection of breast cancer and what this means for preventative care.",
      date: "May 15, 2025",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 2,
      title: "The Importance of Regular Breast Examinations",
      excerpt: "Regular breast examinations are crucial for early detection of abnormalities. Here's what you need to know about establishing a routine.",
      date: "May 10, 2025",
      category: "Health",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 3,
      title: "Fitness and Breast Health: What's the Connection?",
      excerpt: "Discover the important relationship between regular physical activity and maintaining optimal breast health.",
      date: "May 5, 2025",
      category: "Fitness",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-seraphina-light/10">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Educational Resources</h1>
        <p className="text-gray-600 mb-10">
          Stay informed with the latest research and information on breast health, fitness, and wellness.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-seraphina-light rounded-full text-seraphina-purple">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-seraphina-purple hover:underline font-medium">
                  Read More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Research</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="space-y-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex gap-4 pb-6 border-b last:border-0 border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-seraphina-light/70 flex items-center justify-center text-seraphina-purple shrink-0">
                    {index}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">New Study on Early Detection Methods</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      A recent study published in the Journal of Medical Research highlights the effectiveness of thermal sensing in detecting abnormalities.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">May {index + 1}, 2025</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">Research</span>
                    </div>
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

export default Blog;
