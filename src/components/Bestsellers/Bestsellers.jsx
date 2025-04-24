import React from 'react';
import './Bestsellers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';

const products = [
  { img: p1, name: 'Gls Витамины для волос', price: '480 ₽' },
  { img: p2, name: 'Гевискон мазь', price: '129 ₽' },
  { img: p3, name: 'Монта рино спрей', price: '639 ₽' },
  { img: p4, name: 'Масло эфирное лаванда', price: '229 ₽' }
];

export default function Bestsellers() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">Хиты продаж</h2>
      </div>
      <Swiper
        className="bestsellers__slider"
        slidesPerView={4}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {products.map(({ img, name, price }, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={img} alt={name} className="product-card__image" loading="lazy" />
              <div className="product-card__info">
                <h3 className="product-card__name">{name}</h3>
                <span className="product-card__price">{price}</span>
                <button className="product-card__btn">Купить</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}