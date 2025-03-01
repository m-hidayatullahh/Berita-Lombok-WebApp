import React from 'react';
import { Newspaper, TrendingUp, Calendar, ExternalLink } from 'lucide-react';
import { popularNews, categories } from '../data/newsData';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-1/3 space-y-8">
      {/* Popular News */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingUp size={20} className="text-red-600 mr-2" />
          <h3 className="text-lg font-bold">Berita Populer</h3>
        </div>
        
        <div className="space-y-4">
          {popularNews.map((news, index) => (
            <div key={news.id} className="flex gap-3">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <span className="text-xs text-gray-500 mb-1 block">{news.time}</span>
                <h4 className="font-medium text-sm line-clamp-2 hover:text-blue-600 transition-colors">
                  <a href="#">{news.title}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Newspaper size={20} className="text-blue-600 mr-2" />
          <h3 className="text-lg font-bold">Kategori</h3>
        </div>
        
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">{category.name}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Advertisement */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <p className="text-xs text-gray-500 mb-2">IKLAN</p>
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-bold text-lg mb-2">Promo Spesial!</h4>
          <p className="text-sm text-gray-600 mb-3">Dapatkan diskon 50% untuk semua produk lokal Lombok</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors flex items-center mx-auto">
            Kunjungi Sekarang
            <ExternalLink size={14} className="ml-1" />
          </button>
        </div>
      </div>
      
      {/* Events */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Calendar size={20} className="text-green-600 mr-2" />
          <h3 className="text-lg font-bold">Event Mendatang</h3>
        </div>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-3">
            <h4 className="font-bold">Festival Bau Nyale 2025</h4>
            <p className="text-sm text-gray-600">15-17 Februari 2025</p>
            <p className="text-sm text-gray-600">Pantai Seger, Kuta Lombok</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-bold">Lombok Marathon</h4>
            <p className="text-sm text-gray-600">23 Maret 2025</p>
            <p className="text-sm text-gray-600">Mataram City Center</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-3">
            <h4 className="font-bold">Pameran Kerajinan Lombok</h4>
            <p className="text-sm text-gray-600">5-10 April 2025</p>
            <p className="text-sm text-gray-600">Islamic Center, Mataram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;