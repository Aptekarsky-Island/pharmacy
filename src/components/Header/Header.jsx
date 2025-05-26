// import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import SearchWindow from '../SearchWindow/SearchWindow';
import NavTools from '../NavTools/NavTools';
import MainIcon from '../../assets/icons/categories_icons/mainIcon.svg?react';
import MainLogo from '../MainLogo/MainLogo';

export default function Header() {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const lastScrollY = useRef(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
  //       setShowNavTools(false);
  //     } else {
  //       setShowNavTools(true);
  //     }
  //     lastScrollY.current = window.scrollY;
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div>
      <header className="header">
        {/* <SearchWindow isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} /> */}
        <div className="header__container">
          {/* Логотип и телефон */}
          <div className="header__top-row">
            <div className="header__logo">
              <a href="/" aria-label="Главная">
                {/* <MainIcon className="mainLogo mainLogo-size"/> */}
                <MainLogo width={300} height={40}></MainLogo>
              </a>
            </div>
            <a href="tel:89119271787" className="header__phone">8 (911) 927-17-87</a>
          </div>
        </div>
      </header>

    </div>
  );
}