import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-red-500">Lombok</span>Becerite
            </h2>
            <p className="text-gray-400 mb-4">
              Portal berita terpercaya dengan informasi terkini seputar Lombok dan sekitarnya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/z.dayatt" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Politik</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ekonomi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Olahraga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Teknologi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hiburan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Redaksi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pedoman Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ketentuan Layanan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <p className="text-gray-400 mb-2">Jl. Raya Mataram No. 123</p>
            <p className="text-gray-400 mb-2">Lombok, Nusa Tenggara Barat</p>
            <p className="text-gray-400 mb-2">Indonesia</p>
            <p className="text-gray-400 mb-4">83126</p>
            <div className="flex items-center text-gray-400">
              <Mail size={16} className="mr-2" />
              <span>info@lombokbecerite.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 LombokBecerite. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;