import React from 'react';
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
  { img: p1, name: 'Gls Витамины для волос капсулы 370мг 60шт', price: '480 ₽' },
  { img: p2, name: 'Гэвкамен мазь для наружного применения туба', price: '129 ₽' },
  { img: p3, name: 'Момат рино спрей назальный дозированный', price: '639 ₽' },
  { img: p4, name: 'Масло эфирное лаванда 10мл', price: '229 ₽' }
];

const products = Array(3).fill(baseProducts).flat();

export default function Bestsellers() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__header">
        <h2 className="bestsellers__title">Хиты продаж</h2>
      </div>
      <div className="bestsellers__swiper-wrapper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={24}
          pagination={{ clickable: true }}
          className="bestsellers__swiper"
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
      </div>
    </section>
  );
}