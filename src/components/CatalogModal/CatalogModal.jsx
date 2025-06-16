import './CatalogModal.css'
import lupa from '@assets/icons/searchbar_icons/Lupa.svg';
import ShoppingCartEmpty from '@assets/icons/cartEmp.svg';
import ShoppingCartFilled from '@assets/icons/cartFill.svg';
import textDeleteBtn from "@assets/icons/searchbar_icons/TextDeleteBtn.svg";

import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { useGlobalContext, types } from '@context/GlobalContext';
import Catalog from './Catalog/Catalog';

const modalCatalogRoot = document.getElementById('modal-catalog');

export default function CatalogModal({ isOpen, setOpen }) {
    const { totalCount, totalPrice, dispatch } = useGlobalContext();
    const hasItems = totalCount > 0;
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="catalog__modal__overlay">
            <div className="catalog__modal__container" >
                <div className="catalog__modal__wrapper" ref={modalRef}>
                    <div className="catalog__modal__header">
                        <button
                            className={"catalog__active__btn"}
                            aria-label="Закрыть каталог"
                            onClick={() => setOpen(false)}
                        >
                            <img src={textDeleteBtn} alt="Закрыть" className={"catalog__active__icon"} />
                            <span className={"catalog__active__text"}>Каталог</span>
                        </button>
                        <div className={"navtools__right"}>
                            <button
                                className="navtools__search__btn__catalog"
                                aria-label="Показать поиск"
                                onClick={() => {
                                    dispatch({ type: types.CLOSE_CATALOG });
                                    dispatch({ type: types.OPEN_SEARCH });
                                }}
                            >
                                <img src={lupa} alt="Поиск" className={"navtools__search__lupa"} />
                                <span className={"navtools__search__text"}>Найти</span>
                            </button>

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
                    {/* Catalog section */}
                    <div className='catalog__modal__content'>
                        <Catalog />
                    </div>
                </div>
            </div>
        </div>,
        modalCatalogRoot
    );
}