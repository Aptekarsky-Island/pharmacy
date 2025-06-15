import React from 'react';

export default function SortControls() {
  return (
    <div className="sort-controls">
      <h1 className="catalog-title">От боли и воспаления</h1>
      <div className="sort-right-wrapper">
        <button className="sort-button">
          по цене <span>↓</span>
        </button>
        <button className="sort-button">
          по цене <span>↑</span>
        </button>
        <button className="sort-button sort-current-btn">
          по популярности
        </button>
      </div>
    </div>
  );
}