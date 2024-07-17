import React, { useState } from 'react';
import { useLanguage } from '../../../hook/lenguage';

const Options: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { translations } = useLanguage();
    
  const navigationLinks = [
    { label: translations['options.home'], url: '/' },
    { label: translations['options.presentation'], url: '/presentacion' },
    { label: translations['options.stuies'], url: '/studies' },
    { label: translations['options.work_experience'], url: '/experience' },
    { label: translations['options.proyects'], url: '/proyects' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        className="text-sm bg-transparent border border-gray-300 rounded-md py-1 px-2 focus:outline-none"
      >
        Menú
      </button>
      {menuOpen && (
        <div className="absolute bg-white border border-gray-300 mt-1 py-1 rounded-md shadow-lg z-50">
          {navigationLinks.map((link, index) => (
            <a key={index} href={link.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Options;
