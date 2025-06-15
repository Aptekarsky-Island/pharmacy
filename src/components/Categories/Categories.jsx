import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Добавляем Link
import './Categories.css';

// Иконки
import PillsIcon from '../../assets/icons/categories_icons/pills.svg?react';
import SyringeIcon from '../../assets/icons/categories_icons/syringe.svg?react';
import HygieneIcon from '../../assets/icons/categories_icons/hygiene.svg?react';
import BabyIcon from '../../assets/icons/categories_icons/baby.svg?react';
import DietaryIcon from '../../assets/icons/categories_icons/dietary.svg?react';
import CosmeticsIcon from '../../assets/icons/categories_icons/cosmetics.svg?react';
import FoodsIcon from '../../assets/icons/categories_icons/foods.svg?react';

const items = [
  { icon: PillsIcon, label: 'Лекарства' },
  { icon: SyringeIcon, label: 'Медтовары' },
  { icon: HygieneIcon, label: 'Гигиена' },
  { icon: BabyIcon, label: 'Мама и малыш' },
  { icon: DietaryIcon, label: 'Витамины и Бады' },
  { icon: CosmeticsIcon, label: 'Косметика и уход' },
  { icon: FoodsIcon, label: 'Здоровое питание' },
  { icon: null, label: 'Интимные товары', isAdult: true },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__inner">
        {items.map(({ icon: Icon, label, isAdult }) => (
          <Link
            key={label}
            to="/catalog"
            className="categories__card-link"
            onClick={(e) => isAdult && e.preventDefault()} // ❌ блокируем переход для 18+ (опционально)
          >
            <div className="categories__card">
              <div className="categories__icon">
                {Icon ? (
                  <Icon className="categories__svg" />
                ) : (
                  <span className="categories__icon-text">18+</span>
                )}
              </div>
              <div className={`categories__label${isAdult ? ' categories__label--adult' : ''}`}>
                {label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
