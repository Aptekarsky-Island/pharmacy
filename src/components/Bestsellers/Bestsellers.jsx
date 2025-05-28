import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Bestsellers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';

const baseProducts = [
  { id: '1', img: p1, name: 'Gls Витамины для волос капсулы 370мг 60шт', price: '480 ₽' },
  { id: '2', img: p2, name: 'Гэвкамен мазь для наружного применения туба', price: '129 ₽' },
  { id: '3', img: p3, name: 'Момат рино спрей назальный дозированный', price: '639 ₽' },
  { id: '4', img: p4, name: 'Масло эфирное лаванда 10мл', price: '229 ₽' }
];

// Создаем дублированный массив для имитации большего количества товаров
const products = Array(2).fill(baseProducts).flat();

export default function Bestsellers() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Определяем режим отображения на основе ширины экрана
  const isMobileView = screenWidth < 969;
  const isTabletView = screenWidth <= 1100 && screenWidth >= 969;
  const isDesktopView = screenWidth > 1100;
  
  // Определяем количество карточек для отображения в мобильном режиме
  const displayedProducts = isMobileView && !showAllProducts ? products.slice(0, 4) : products;
  
  // Функция для отображения всех карточек
  const handleShowAllProducts = () => {
    setShowAllProducts(true);
  };
  
  // Определяем параметры Swiper на основе размера экрана
  const swiperParams = {
    slidesPerView: isDesktopView ? 4 : 2,
    slidesPerGroup: isDesktopView ? 4 : 2,
    spaceBetween: 24,
    pagination: { clickable: true }
  };
  
  // Рендерим карточку товара
  const renderProductCard = (product, index) => (
    <div key={index} className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <img src={product.img} alt={product.name} className="product-card__image" loading="lazy" />
        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          <span className="product-card__price">{product.price}</span>
          <button className="product-card__btn">Купить</button>
        </div>
      </Link>
    </div>
  );
  
  return (
    <section className="bestsellers">
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">Хиты продаж</h2>
      </div>
      
      {/* Desktop и Tablet режим с прокруткой */}
      {!isMobileView && (
        <div className="bestsellers__swiper-wrapper">
          <Swiper
            modules={[Pagination]}
            {...swiperParams}
            className="bestsellers__swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                {renderProductCard(product, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      
      {/* Мобильный режим с сеткой 2x2 */}
      {isMobileView && (
        <div className="bestsellers__grid">
          {displayedProducts.map((product, index) => (
            <div key={index} className="bestsellers__grid-item">
              {renderProductCard(product, index)}
            </div>
          ))}
          
          {/* Кнопка "Смотреть все" */}
          {!showAllProducts && (
            <div className="bestsellers__show-all-wrapper">
              <button 
                className="bestsellers__show-all-btn"
                onClick={handleShowAllProducts}
              >
                Смотреть все
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}