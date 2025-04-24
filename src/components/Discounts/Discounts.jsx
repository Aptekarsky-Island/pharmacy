import React from 'react';
import './Discounts.css';
import { FaCalendarAlt, FaPercent } from 'react-icons/fa';

export default function Discounts() {
  return (
    <section className="discounts">
      <div className="discounts__inner">
        <div className="discounts__info">
          <FaCalendarAlt className="discounts__icon" />
          <div className="discounts__text">
            <h2 className="discounts__title">Скидки выходного дня</h2>
            <p className="discounts__desc">
              Каждый <strong>суббота</strong> и <strong>воскресенье</strong> —<br />получи <span className="discounts__highlight">3% cashback</span> на все товары.
            </p>
            <a href="#discounts" className="discounts__btn">
              Узнать больше <FaPercent />
            </a>
          </div>
        </div>
        <div className="discounts__graphic">
          <div className="discounts__circle">
            <FaPercent className="discounts__percent-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}