import React from 'react';
import './SearchWindow.css';
import lupa from '../../assets/icons/searchbar_icons/Lupa.svg';
import textDeleteBtn from '../../assets/icons/searchbar_icons/TextDeleteBtn.svg';

const SearchWindow = ({ isOpen, onClose }) => {
  // если окно закрыто, не рендерим ничего
  if (!isOpen) return null;

  // обработчик кликов по оверлею
  const handleOverlayClick = (e) => {
    // если клик был не по внутренней части модалки, а по самой подложке, закрываем
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="search-window__overlay" onClick={handleOverlayClick}>
      <div className="search-window__content">
        <div className="search-window__block">
          <div className="search-window__searchbar">
            <img className="search-window__lupa" src={lupa} alt="lupa" />
            <input className="search-window__input" type="text" placeholder="Найти" aria-label="Поиск товара" />
            <button className="search-window__btn"><img alt="" /></button>
          </div>
          <div className="search_window_container">
            {/* Сюда вставляете состояния списка товаров */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWindow;
