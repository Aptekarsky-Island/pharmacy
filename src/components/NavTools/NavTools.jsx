import './NavTools.css';
import lupa from '../../assets/icons/searchbar_icons/Lupa.svg';
import ShoppingCartEmpty from '../../assets/icons/cartEmp.svg';
import ShoppingCartFilled from '../../assets/icons/cartFill.svg';
import menuBar from '../../assets/icons/menuBar.svg';
import Modal from '../ModalWindowLayout/Modal';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../pages/Cart/CartContext.jsx';

export default function NavTools() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCartPage = location.pathname === '/cart';
  
  // Используем хук контекста корзины
  const { totalCount, totalPrice } = useCart();
  const hasItems = totalCount > 0;
  
  return (
    <div className={isHomePage ? 'navtools__home' : 'navtools'}>
      <div className={isHomePage ? 'navtools__inner__home' : "navtools__inner"}>
        <button
          className="navbar__catalog__btn"
          aria-label="Каталог"
          onClick={() => setOpen(true)}
          style={{ pointerEvents: 'auto' }}
        >
          <img src={menuBar} alt="Каталог" className="navbar__catalog__icon" />
        </button>
        <div className="navtools__right">
          <button 
          className="navtools__search__btn"
          aria-label="Показать поиск"
          onClick={() => setOpen(true)}
          style={{ pointerEvents: 'auto' }}
          >
            <img src={lupa} alt="Поиск" className="navtools__search__lupa" />
            <span className="navtools__search__text">Найти</span>
          </button>
          <div className="navtools__cart-wrapper">
            <Link 
              to="/cart" 
              className={hasItems ? "navtools__cart__btn navtools__cart__btn--filled" : "navtools__cart__btn"} 
              aria-label="Корзина" 
              style={{ pointerEvents: 'auto' }}
            >
              <img 
                src={hasItems ? ShoppingCartFilled : ShoppingCartEmpty} 
                alt="Корзина" 
                className="header__cart__icon"
              />
              {hasItems && (
                <div className="navtools__cart-counter">{totalCount}</div>
              )}
            </Link>
            {hasItems && (
              <div className="navtools__cart-total">{totalPrice} ₽</div>
            )}
          </div>
          <Modal isOpen={isOpen} setOpen={setOpen}></Modal>
        </div>
      </div>
    </div>
  );
} 