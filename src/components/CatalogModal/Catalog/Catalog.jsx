import React, { useState } from 'react';
import './Catalog.css';

export default function Catalog ()  {
  const [activeCategory, setActiveCategory] = useState("Лекарства");
  const [activeSubcategory, setActiveSubcategory] = useState("От боли и воспаления");

  // Category data
  const categories = [
    "Лекарства",
    "Медтовары", 
    "Гигиена",
    "Мама и малыш",
    "Витамины и бады",
    "Косметика и уход",
    "Здоровое питание",
    "Интимные товары"
  ];

  // Subcategory data
  const subcategoriesData = {
    "Лекарства": [
      "Акушерство, гинекология",
      "Антибиотики", 
      "От боли и воспаления",
      "Сердечнососудистая система",
      "Для пищеварения",
      "Имунная система",
      "Лечение и профилактика зрения",
      "Аллергия",
      "Болезни крови",
      "Противогрибковые средства",
      "Ухо, горло, нос",
      "Анастезия, реанимация",
      "Антисептики"
    ]
  };

  const currentSubcategories = subcategoriesData[activeCategory] || [];

  return (
    <div className="catalog">
      {/* Left sidebar - Categories */}
      <div className="catalog__sidebar">
        <div className="catalog__categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`catalog__category__btn ${
                activeCategory === category ? 'catalog__category-btn--active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right content - Subcategories */}
      <div className="catalog__content">
        <div className="catalog__subcategories">
          {currentSubcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => setActiveSubcategory(subcategory)}
              className={`catalog__subcategory__btn ${
                activeSubcategory === subcategory ? 'catalog__subcategory-btn--active' : ''
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
