import React, { useState } from 'react';
import { Menu, Search, User, Bell, ChevronDown, Play, MessageSquare, Image, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedNews from './components/FeaturedNews';
import NewsList from './components/NewsList';
import Sidebar from './components/Sidebar';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <FeaturedNews />
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="w-full md:w-2/3">
            <NewsList category={activeCategory} />
            
            {/* Video Section */}
            <VideoSection />
            
            {/* Gallery Section */}
            <GallerySection />
          </div>
          
          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;