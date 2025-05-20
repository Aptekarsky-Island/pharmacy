import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import SearchWindow from '../SearchWindow/SearchWindow';
import NavTools from '../NavTools/NavTools';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNavTools, setShowNavTools] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowNavTools(false);
      } else {
        setShowNavTools(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className="header">
        <SearchWindow isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <div className="header__container">
          {/* Логотип и телефон */}
          <div className="header__top-row">
            <div className="header__logo">
              <a href="/" aria-label="Главная">
                <span className="logo__text--bold">АПТЕКАРСКИЙ <span className="logo__text--accent">ОСТРОВ</span></span>
              </a>
            </div>
            <a href="tel:89119271787" className="header__phone">8 (911) 927-17-87</a>
          </div>
        </div>
      </header>
      <NavTools onSearchClick={() => setIsSearchOpen(true)} hide={isSearchOpen} scrolledUp={showNavTools} />
    </div>
  );
}