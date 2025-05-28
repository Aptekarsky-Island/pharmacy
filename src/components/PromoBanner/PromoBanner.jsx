import React, { useState, useEffect } from 'react';
import './PromoBanner.css';
import MapImage from '@assets/map.png';
import MobileMapImage from '@assets/mapMobileSize.svg';

export default function PromoBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            <img src={isMobile ? MobileMapImage : MapImage} alt="Карта расположения" />
          </div>
    </section>
  );
}
