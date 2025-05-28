// import { useEffect } from 'react';
import './Modal.css';
import lupa from '@assets/icons/searchbar_icons/Lupa.svg';

export default function Modal({ isOpen, setOpen, children }) {
  return (
    <div className={isOpen ? "modal active" : "modal"} onClick={() => setOpen(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__search__block">
          <div className="search-window__searchbar">
            <img className="search-window__lupa" src={lupa} alt="lupa" />
            <input className="search-window__input" type="text" placeholder="Найти" aria-label="Поиск товара" />
            <button className="search-window__btn"><img alt="" /></button>
          </div>
          <div className="search_window_container">
            {/* Сюда вставляете состояния списка товаров */}
          </div>
        </div>
        {/* Здесь будет переданный JSX */}
        {children}
      </div>
    </div>
  );
}