import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__inner">
        <Link to="/" className="breadcrumbs__link">Главная</Link>
        <span className="breadcrumbs__separator">/</span>
        <Link to="/catalog" className="breadcrumbs__link">Каталог</Link>
        <span className="breadcrumbs__separator">/</span>
        <Link to="/catalog/medicine" className="breadcrumbs__link">Лекарства</Link>
        <span className="breadcrumbs__separator">/</span>
        <span className="breadcrumbs__current">От боли и воспаления</span>
      </div>
    </div>
  );
}