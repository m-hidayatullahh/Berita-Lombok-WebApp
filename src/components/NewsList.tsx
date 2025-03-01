import React, { useState } from 'react';
import { Clock, MessageSquare, ChevronRight } from 'lucide-react';
import NewsItem from './NewsItem';
import { newsData } from '../data/newsData';

interface NewsListProps {
  category: string;
}

const NewsList: React.FC<NewsListProps> = ({ category }) => {
  const [visibleNews, setVisibleNews] = useState(5);
  
  const filteredNews = category === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === category);
  
  const displayedNews = filteredNews.slice(0, visibleNews);
  
  const loadMore = () => {
    setVisibleNews(prev => prev + 5);
  };
  
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Berita Terbaru</h2>
        <div className="flex space-x-2">
          {category === 'all' && (
            <>
              <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Terbaru</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Populer</button>
            </>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        {displayedNews.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
      
      {visibleNews < filteredNews.length && (
        <div className="text-center mt-8">
          <button 
            onClick={loadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            Muat Lebih Banyak
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsList;