import React from 'react';
import './Categories.css';
import { FaPills, FaSyringe, FaSpa, FaBaby, FaAppleAlt, FaTablets, FaPaintBrush } from 'react-icons/fa';

const items = [
  { icon: <FaPills />, label: 'Лекарства' },
  { icon: <FaSyringe />, label: 'Медтовары' },
  { icon: <FaSpa />, label: 'Гигиена' },
  { icon: <FaBaby />, label: 'Мама и малыш' },
  { icon: <FaTablets />, label: 'Витамины и Бады' },
  { icon: <FaPaintBrush />, label: 'Косметика и уход' },
  { icon: <FaAppleAlt />, label: 'Здоровое питание' },
  { icon: <span className="categories__icon-text">18+</span>, label: 'Интимные товары' },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__inner">
        {items.map(({ icon, label }) => (
          <div key={label} className="categories__card">
            <div className="categories__icon">{icon}</div>
            <div className="categories__label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
