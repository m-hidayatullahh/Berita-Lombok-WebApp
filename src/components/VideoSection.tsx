import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';
import { videoData } from '../data/videoData';

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Video Terbaru</h2>
        <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
          Lihat Semua
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo.videoId}`} 
              title={activeVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-bold">{activeVideo.title}</h3>
            <p className="text-gray-600 mt-2">{activeVideo.description}</p>
            <div className="flex items-center mt-3">
              <img 
                src={activeVideo.channelImage} 
                alt={activeVideo.channel} 
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-700">{activeVideo.channel}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-500">{activeVideo.time}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-700">Video Lainnya</h3>
          
          {videoData.slice(1, 5).map((video) => (
            <div 
              key={video.id} 
              className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative flex-shrink-0 w-24 h-16 bg-gray-200 rounded overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-1">
                    <Play size={12} className="text-white" fill="white" />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
                <span className="text-xs text-gray-500 mt-1 block">{video.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;