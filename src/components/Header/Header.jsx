import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import SearchWindow from '../SearchWindow/SearchWindow';
import mainIcon from '../../assets/mainIcon.png';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="header">
      <SearchWindow  isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <div className="header__container">
        {/* Логотип */}
        <div className="header__logo">
          <a href="/" aria-label="Главная">
            <img src={mainIcon} alt="Аптекарский Остров" className="header__logo-image" />
          </a>
        </div>
        {/* Поиск и корзина */}
        <div className="header__actions">
          <div
          className="header__search"
          onClick={() => setIsSearchOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Открыть поиск">
        <input type="text" placeholder="Найти" aria-label="Поиск товара" />
        <FaSearch className="search__icon" />
      </div>
          <a href="tel:89119271787" className="header__phone">8 (911) 927‑17‑87</a>
          <button className="header__cart" aria-label="Корзина">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
}