import menuBar from '@assets/icons/menuBar.svg';

export default function CatalogTrigger({ onClick }) {
  return (
    <button className="navbar__catalog" aria-label="Каталог" onClick={onClick}>
      <img src={menuBar} alt="Каталог" className="navbar__catalog-icon" />
    </button>
  );
}