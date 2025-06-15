import React from 'react';

export default function Filters() {
  return (
    <div className="filters">
      {/* Фильтр по названию */}
      <div className="filter-section">
        <h3 className="filter-title">Название</h3>
        <div className="filter-options">
          <div className="filter-option">
            <label className="filter-label">Ацетилсалицилон</label>
            <span className="filter-count">1</span>
          </div>
          <div className="filter-option">
            <label className="filter-label">Амигренин</label>
            <span className="filter-count">5</span>
          </div>
          <div className="filter-option">
            <label className="filter-label">Анальгин</label>
            <span className="filter-count">7</span>
          </div>
          <button className="filter-show-more">Ещё ↓</button>
        </div>
      </div>

      {/* Форма выпуска */}
      <div className="filter-section">
        <h3 className="filter-title">Форма выпуска</h3>
        <div className="filter-options">
          <div className="filter-option">
            <label className="filter-label">Порошок</label>
            <span className="filter-count">23</span>
          </div>
          <div className="filter-option filter-option--active">
            <label className="filter-label">Таблетки</label>
            <span className="filter-count">14</span>
          </div>
          <div className="filter-option">
            <label className="filter-label">Капсулы</label>
            <span className="filter-count">12</span>
          </div>
          <button className="filter-show-more">Ещё ↓</button>
        </div>
      </div>

      {/* Производитель */}
      <div className="filter-section">
        <h3 className="filter-title">Производитель</h3>
        <div className="filter-options">
          <div className="filter-option">
            <label className="filter-label">Озон</label>
            <span className="filter-count">3</span>
          </div>
          <div className="filter-option">
            <label className="filter-label">Велфарм</label>
            <span className="filter-count">7</span>
          </div>
          <div className="filter-option">
            <label className="filter-label">Вертекс</label>
            <span className="filter-count">1</span>
          </div>
          <button className="filter-show-more">Ещё ↓</button>
        </div>
      </div>

      {/* Цена */}
      <div className="filter-section">
        <h3 className="filter-title">Цена</h3>
        <div className="price-range">
          <input className="price-range-input" type="text" placeholder="от" defaultValue="50" />
          <input className="price-range-input" type="text" placeholder="до" defaultValue="2 000" />
        </div>
      </div>

      {/* Рецепт */}
      <div className="filter-section">
        <h3 className="filter-title">Отпуск по рецепту</h3>
        <div className="filter-options">
          <div className="filter-option">
            <label className="filter-label">По рецепту</label>
            <span className="filter-count">4</span>
          </div>
          <div className="filter-option">
            <label className="filter-label">Без рецепта</label>
            <span className="filter-count">45</span>
          </div>
        </div>
      </div>

      <button className="reset-button">Сбросить всё</button>
    </div>
  );
}