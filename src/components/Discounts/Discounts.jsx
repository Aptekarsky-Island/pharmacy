import React from 'react';
import './Discounts.css';
import icon from '../../assets/icons/discountsLogo.svg';

export default function Discounts() {
  return (
    <section className="discounts">
      <div className="discounts__inner">
        <div className="discounts__info">
          <h2 className="discounts__title">СКИДКИ</h2>
          <div className="discounts__subtitle">ВЫХОДНОГО ДНЯ</div>
          <div className="discounts__desc">
            Каждую <span className="discounts__strong">субботу</span> и <span className="discounts__strong">воскресенье</span> предоставляется <span className="discounts__badge">скидка 3%</span> <span className="discounts__blue">на все товары</span>, <span className="discounts__lightblue">не входящие в перечень жизненно важных лекарственных препаратов.</span>
          </div>
        </div>
        <div className="discounts__graphic">
          <img src={icon} alt="Скидки выходного дня" className="discounts__svg" />
        </div>
      </div>
    </section>
  );
}