import React, { useState } from 'react';
import { Menu, Search, User, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  setActiveCategory: (category: string) => void;
  activeCategory: string;
}

const Header: React.FC<HeaderProps> = ({ setActiveCategory, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'politik', name: 'Politik' },
    { id: 'ekonomi', name: 'Ekonomi' },
    { id: 'olahraga', name: 'Olahraga' },
    { id: 'teknologi', name: 'Teknologi' },
    { id: 'hiburan', name: 'Hiburan' },
    { id: 'pendidikan', name: 'Pendidikan' },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="md:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold text-blue-800">
            <span className="text-red-600">Lombok</span>Becerite
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari berita..." 
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User size={20} />
          </button>
        </div>
        
        <button className="md:hidden">
          <Search size={24} />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className={`bg-blue-800 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-3 text-white font-medium hover:bg-blue-700 block w-full text-left md:inline-block md:w-auto ${
                    activeCategory === category.id ? 'bg-blue-700' : ''
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Advertisement Banner */}
      <div className="bg-gray-200 py-2 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">Iklan: Temukan promo spesial di <span className="font-bold">LombokMall</span> - <span className="text-blue-600 underline">Klik di sini</span></p>
        </div>
      </div>
    </header>
  );
};

export default Header;