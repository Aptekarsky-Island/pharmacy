import React from 'react';
import './SearchBar.css';
import textDeleteBtn from "@assets/icons/searchbar_icons/TextDeleteBtn.svg";
import lupa from '@assets/icons/searchbar_icons/Lupa.svg';

export default function SearchBar ({ query, onQueryChange, isLoading }) {
  const handleClear = () => {
    onQueryChange('');
  };

  return (
    <div className={"serchBar__modal__container"}>
      <div className={"searchBar__modal__wrapper"}>
        {/* Иконка поиска (лупа) */}
        <img 
          src={lupa} 
          alt="Search" 
          className={"searchBarIcon"} 
        />
        <input
          type="text"
          value={query}
          name='Найти'
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Найти"
          className={"searchInput"}
        />
        {/* Кнопка очистки с иконкой X (крестик) */}
        {query && (
          <button
            onClick={handleClear}
            className={"clearButton"}
          >
            <img 
              src={textDeleteBtn} 
              alt="Clear" 
              className="clearBtnIcon" 
            />
          </button>
        )}
        {/* Индикатор загрузки */}
        {isLoading && (
          <div className={"loadingIndicator"}>
            <div className={"loadingSpinner"}></div>
          </div>
        )}
      </div>
    </div>
  );
};