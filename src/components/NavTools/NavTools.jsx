import './NavTools.css';
import lupa from '../../assets/icons/searchbar_icons/Lupa.svg';
import ShoppingCart from '../../assets/icons/cartEmp.svg';
import menuBar from '../../assets/icons/menuBar.svg';
import Modal from '../ModalWindowLayout/Modal';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function NavTools() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className={isHomePage ? 'navtools__home' : 'navtools'}>
      <div className={isHomePage ? 'navtools__inner__home' : "navtools__inner"}>
        <button
          className="navbar__catalog__btn"
          aria-label="Каталог"
          onClick={() => setOpen(true)}
        >
          <img src={menuBar} alt="Каталог" className="navbar__catalog__icon" />
        </button>
        <div className="navtools__right">
          <button 
          className="navtools__search__btn"
          aria-label="Показать поиск"
          onClick={() => setOpen(true)}
          >
            <img src={lupa} alt="Поиск" className="navtools__search__lupa" />
            <span className="navtools__search__text">Найти</span>
          </button>
          <Link to="/cart" className="navtools__cart__btn" aria-label="Корзина">
            <img src={ShoppingCart} alt="Корзина" className="header__cart__icon" />
          </Link>
          <Modal isOpen={isOpen} setOpen={setOpen}></Modal>
          {console.log(isOpen)}
        </div>
      </div>
    </div>
  );
} 