import React from 'react';
import './Hero.css';
import PromoBanner from '../PromoBanner/PromoBanner';
import Categories from '../Categories/Categories';
import NavTools from '@components/NavTools/NavTools';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__box">
        <div className="hero__content">
          <NavTools />
          <PromoBanner />
          <Categories />
        </div>
      </div>
    </section>
  );
}