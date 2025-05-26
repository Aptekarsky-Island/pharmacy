import React from 'react';
import './PromoBanner.css';
import MapImage from '@assets/map.png';

export default function PromoBanner() {
  return (
    <section className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title">
            ЗАКАЗЫВАЙТЕ НА САЙТЕ
          </h1>
          <p className="promo__subtitle">
            забирайте и оплачивайте в <br/>аптеке
          </p>
        </div>
          <div className="promo__map__container">
            <img src={MapImage} alt="Карта расположения" />
          </div>
    </section>
  );
}
