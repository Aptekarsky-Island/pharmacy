import './Header.css';
import MainLogo from '../MainLogo/MainLogo';

export default function Header() {

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип и телефон */}
        <div className="header__top-row">
          <div className="header__logo">
            <a href="/" aria-label="Главная">
              <MainLogo width={300} height={40}></MainLogo>
            </a>
          </div>
        </div>
        <a href="tel:89119271787" className="header__phone">
          <span className="header__phone-text">8 (911) 927-17-87</span>
          {/* <TelePhone className="header__phone-icon" /> */}
        </a>
      </div>
    </header>
  );
}