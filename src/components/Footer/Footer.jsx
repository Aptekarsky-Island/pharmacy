import React from 'react';
import MainLogo from '../MainLogo/MainLogo';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <h2 className="footer__logo">
        <MainLogo width={250} height={30}></MainLogo>
        </h2>
        <div className="footer__inner">
          <div className="footer__info">
            <a href="tel:89119271787" className="footer__phone">
              <b>8(911) 927‑17‑87</b>
            </a>
            <p className="footer__hours">Мы открыты <b>10:00–21:00</b></p>
          </div>
          <div className="footer__col">
            <h3>Помощь</h3>
            <ul>
              <li><Link to="/payment">Оплата</Link></li> 
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
        <p className="footer__disclaimer">
          Согласно положениями Статьи 437(2) ГК РФ представленная на сайте информация носит исключительно ознакомительный характер и не является публичной офертой.
          Рецептурные лекарственные средства можно получить только при предоставлении рецепта, выписанного врачом.
        </p>
        

      </div>
      <div className="footer__bottom">
          <div className="footer__adress">
            <FaMapMarkerAlt className="footer__icon" aria-label="Адрес" />
            <span><b>СПБ</b>, Ярославский пр-т, 32, литер Г, помещение 2-Н</span>
          </div>
          <div className="footer__copyright">
          <p>© 2020 Аптекарский остров. Все права защищены <br></br>
            Лицензия: ЛО-78-02-008888, ОГРН 00000000000 ИНН 00000000000</p>
          </div>
        </div>
    </footer>
  );
}