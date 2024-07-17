import React, { useState } from 'react';
import { useTheme } from '../../../hook/theme';
import ThemeController from '../../themeController/ThemeController';
import LanguageController from '../../lenguageController/LenguageController';
import Options from './Options';

const Header: React.FC = () => {
  const { isDarkTheme } = useTheme();

  const navigationLinks = [
    { label: 'Inicio', url: '/' },
    { label: 'Presentación', url: '/presentacion' },
    { label: 'Estudios', url: '/studies' },
    { label: 'Experiencia', url: '/experience' },
    { label: 'Proyectos', url: '/proyects' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`flex items-center justify-between px-8 h-16 w-full ${isDarkTheme ? 'bg-dark text-dark-text' : 'bg-light'}`}>
      <Options />
      <div className="flex-1 flex justify-center items-center gap-2">
        <a href="https://www.linkedin.com/in/dayana-carrera-2a617031a/" target="_blank" rel="noopener noreferrer">
          <i className={`fab fa-linkedin ${isDarkTheme ? 'text-dark-text' : 'text-light-text'} text-xl`}></i>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <LanguageController />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;
