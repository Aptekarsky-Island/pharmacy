import './NavTools.css';
import lupa from '@assets/icons/searchbar_icons/Lupa.svg';
import ShoppingCartEmpty from '@assets/icons/cartEmp.svg';
import ShoppingCartFilled from '@assets/icons/cartFill.svg';
import menuBar from '@assets/icons/menuBar.svg';

import { Link } from 'react-router-dom';
import { useGlobalContext, types } from '@context/GlobalContext';

import CatalogModal from '@components/CatalogModal/CatalogModal';
import SearchModal from '@components/SearchModal/SearchModal';

export default function NavTools({ isHomePage }) {
  const { totalCount, totalPrice, isCatalogOpen, isSearchOpen, dispatch } = useGlobalContext();
  const hasItems = totalCount > 0;

  return (
    <div className={`${isHomePage ? "navtools__home" : "navtools"}`}>
      <div className={`${isHomePage ? "navtools__inner__home" : "navtools__inner"}`}>
        {/* Каталог */}
        <button
          className="navbar__catalog__btn"
          aria-label="Каталог"
          onClick={() => dispatch({ type: types.OPEN_CATALOG })}
        >
          <img src={menuBar} alt="Каталог" className="navbar__catalog__icon" />
        </button>

        <CatalogModal
          isOpen={isCatalogOpen}
          setOpen={(isOpen) =>
            dispatch({ type: isOpen ? types.OPEN_CATALOG : types.CLOSE_CATALOG })}
        />


        {/* Поиск */}
        <div className={"navtools__right"}>
          <button
            className={`${isHomePage ? "navtools__search__btn__home": "navtools__search__btn"}`}
            aria-label="Показать поиск"
            onClick={() => dispatch({ type: types.OPEN_SEARCH })}
          >
            <img src={lupa} alt="Поиск" className={"navtools__search__lupa"} />
            <span className={"navtools__search__text"}>Найти</span>
          </button>

          <SearchModal
            isOpen={isSearchOpen}
            setOpen={(isOpen) =>
              dispatch({ type: isOpen ? types.OPEN_SEARCH : types.CLOSE_SEARCH })}
          />

          {/* Корзина */}
          <div className="navtools__cart-wrapper">
            <Link
              to="/cart"
              className={
                hasItems
                  ? "navtools__cart__btn navtools__cart__btn--filled"
                  : "navtools__cart__btn"
              }
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
        </div>
      </div>
    </div>
  );
}