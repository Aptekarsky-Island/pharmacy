import './NavTools.css';
import lupa from '../../assets/icons/searchbar_icons/Lupa.svg';
import ShoppingCart from '../../assets/icons/cartEmp.svg';
import menuBar from '../../assets/icons/menuBar.svg';
import Modal from '../ModalWindowLayout/Modal';


export default function NavTools() {
  return (
    <div className="navtools">
      <div className="navtools__inner">
        <button
          className="navbar__catalog__btn"
          aria-label="Каталог"
        
        >
          <img src={menuBar} alt="Каталог" className="navbar__menu__icon" />
        </button>
        <div className="navtools__right">
          <button className="navtools__search__btn" aria-label="Показать поиск">
            <img src={lupa} alt="Поиск" className="navtools__search__lupa" />
            <span className="navtools__search__text">Найти</span>
          </button>
          <button className="header__cart" aria-label="Корзина">
            <img src={ShoppingCart} alt="Корзина" className="header__cart__icon" />
          </button>
        </div>
      </div>
    </div>
  );
} 