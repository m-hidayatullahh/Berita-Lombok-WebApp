import React from 'react';
import { Image, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/galleryData';

const GallerySection: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Galeri Foto</h2>
        <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
          Lihat Semua
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryData.map((item) => (
          <div key={item.id} className="group relative rounded-lg overflow-hidden">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-3">
                <h4 className="text-white text-sm font-medium">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;