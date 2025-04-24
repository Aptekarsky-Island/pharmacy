import React from 'react';
import './PromoBanner.css';
import MapImage from '../../assets/map.png';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function PromoBanner() {
  return (
    <section className="promo">
      <div className="promo__inner">
        <div className="promo__info">
          <h1 className="promo__title">
            Заказывайте онлайн —<br />
            забирайте в аптеке!
          </h1>
          <p className="promo__subtitle">
            Удобный онлайн‑каталог и быстрая самовывоз — экономьте время.
          </p>
        </div>
        <div className="promo__map">
          <div className="promo__map-container">
            <img src={MapImage} alt="Карта расположения" />
            <div className="promo__marker">
              <FaMapMarkerAlt />
              <span>СПб, Ярославский пр-т, 32</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
