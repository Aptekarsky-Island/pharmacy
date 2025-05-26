import lupa from '../../../assets/icons/searchbar_icons/Lupa.svg';

export default function SearchTrigger({ onClick }) {
  return (
    <button className="navtools__search-btn" onClick={onClick} aria-label="Показать поиск">
      <img src={lupa} alt="Поиск" className="navtools__search-lupa" />
      <span className="navtools__search-text">Найти</span>
    </button>
  );
}