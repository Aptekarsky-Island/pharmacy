import React from 'react';
import './PromoBanner.css';
import MapImage from '../../assets/map.png';

export default function PromoBanner({ onSearchClick }) {
  return (
    <section className="promo">
      <div className="promo__inner">
        <div className="promo__info">
          <h1 className="promo__title">
            ЗАКАЗЫВАЙТЕ НА САЙТЕ
          </h1>
          <p className="promo__subtitle">
            забирайте и оплачивайте в аптеке
          </p>
        </div>
        <div className="promo__map">
          <div className="promo__map-container">
            <img src={MapImage} alt="Карта расположения" />
            {/* <div className="promo__marker">
              <span>СПБ, Ярославский пр-т, 32, литер Г, помещение 2-Н</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
