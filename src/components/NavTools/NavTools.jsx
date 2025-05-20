import React from 'react';
import './NavTools.css';
import lupa from '../../assets/icons/searchbar_icons/Lupa.svg';
import ShoppingCart from '../../assets/icons/cartEmp.svg';
import menuBar from '../../assets/icons/menuBar.svg';

export default function NavTools({ onSearchClick, hide, scrolledUp }) {
  if (hide) return null;
  return (
    <div className={`navtools${scrolledUp ? '' : ' navtools--hidden'}`}>
      <div className="navtools__inner">
        <button className="navbar__menu" aria-label="Меню">
          <img src={menuBar} alt="Меню" className="navbar__menu-icon" />
        </button>
        <div className="navtools__right">
          <button className="navtools__search-btn" onClick={onSearchClick} aria-label="Показать поиск">
            <img src={lupa} alt="Поиск" className="navtools__search-lupa" />
            <span className="navtools__search-text">Найти</span>
          </button>
          <button className="header__cart" aria-label="Корзина">
            <img src={ShoppingCart} alt="Корзина" className="header__cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
} 