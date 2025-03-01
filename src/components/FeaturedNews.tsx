import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';

const FeaturedNews: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main Featured News */}
      <div className="md:col-span-2 relative rounded-lg overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Pantai Kuta Lombok" 
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">Pariwisata</span>
          <h2 className="text-white text-2xl font-bold mt-2 mb-2">Pantai Kuta Lombok Jadi Destinasi Favorit Wisatawan Mancanegara</h2>
          <div className="flex items-center text-gray-300 text-sm">
            <Clock size={14} className="mr-1" />
            <span className="mr-4">2 jam yang lalu</span>
            <MessageSquare size={14} className="mr-1" />
            <span>24 Komentar</span>
          </div>
        </div>
      </div>
      
      {/* Secondary Featured News */}
      <div className="space-y-4">
        <div className="relative rounded-lg overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1580974852861-c381510bc98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Festival Bau Nyale" 
            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">Budaya</span>
            <h3 className="text-white text-lg font-bold mt-1 mb-1">Festival Bau Nyale 2025 Siap Digelar Bulan Depan</h3>
            <div className="flex items-center text-gray-300 text-xs">
              <Clock size={12} className="mr-1" />
              <span className="mr-3">5 jam yang lalu</span>
              <MessageSquare size={12} className="mr-1" />
              <span>12 Komentar</span>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-lg overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Pembangunan Bandara" 
            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">Ekonomi</span>
            <h3 className="text-white text-lg font-bold mt-1 mb-1">Pembangunan Bandara Baru di Lombok Timur Mulai Dikerjakan</h3>
            <div className="flex items-center text-gray-300 text-xs">
              <Clock size={12} className="mr-1" />
              <span className="mr-3">1 hari yang lalu</span>
              <MessageSquare size={12} className="mr-1" />
              <span>18 Komentar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;