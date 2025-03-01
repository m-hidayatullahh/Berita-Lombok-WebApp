import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import { News } from '../types';

interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      politik: 'bg-red-600',
      ekonomi: 'bg-green-600',
      olahraga: 'bg-blue-600',
      teknologi: 'bg-purple-600',
      hiburan: 'bg-pink-600',
      pendidikan: 'bg-yellow-600',
      budaya: 'bg-indigo-600',
      pariwisata: 'bg-teal-600',
    };
    
    return colors[category] || 'bg-gray-600';
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4 pb-6 border-b border-gray-200">
      <div className="md:w-1/3 rounded-lg overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-48 md:h-40 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="md:w-2/3">
        <div className="flex items-center mb-2">
          <span className={`${getCategoryColor(news.category)} text-white px-2 py-0.5 rounded-full text-xs font-medium`}>
            {news.categoryName}
          </span>
          <div className="flex items-center text-gray-500 text-xs ml-3">
            <Clock size={12} className="mr-1" />
            <span>{news.time}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
          <a href="#">{news.title}</a>
        </h3>
        
        <p className="text-gray-600 mb-3 line-clamp-2">{news.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <img 
              src={news.authorImage} 
              alt={news.author} 
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            <span>{news.author}</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm">
            <MessageSquare size={14} className="mr-1" />
            <span>{news.comments} Komentar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;