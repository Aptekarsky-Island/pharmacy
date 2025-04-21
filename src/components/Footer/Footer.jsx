import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__branding">
            <h2 className="footer__logo">
              АПТЕКАРСКИЙ <span className="footer__logo--accent">ОСТРОВ</span>
            </h2>
            <a href="tel:89119271787" className="footer__phone">
              8(911) 927‑17‑87
            </a>
            <p className="footer__hours">Мы открыты 10:00–21:00</p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h3>Помощь</h3>
              <ul>
                <li><a href="#">Оплата</a></li>
                <li><a href="#">Обмен и возврат</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h3>Клиентам</h3>
              <ul>
                <li><a href="#">Политика конфиденциальности</a></li>
                <li><a href="#">Пользовательское соглашение</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h3>О компании</h3>
              <ul>
                <li><a href="#">Лицензии</a></li>
                <li><a href="#">Вакансии</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__disclaimer">
            Согласно положению статьи 437(2) ГК РФ на сайте представлена информационного характера и не является публичной офертой. Рецептурные препараты отпускаются только по рецепту врача.
          </p>
          <div className="footer__info">
          <FaMapMarkerAlt className="footer__icon" aria-label="Адрес" />
            <span>СПб, Ярославский пр-т, 32, литер Г, помещение 2-Н</span>
          </div>
        </div>
        <div className="footer__copyright">
          © 2020 Аптекарский остров. Все права защищены.
        </div>
      </div>
    </footer>
  );
}