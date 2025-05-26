import ShoppingCart from '@assets/icons/cartEmp.svg';

export default function CartTrigger({ onClick }) {
  return (
    <button className="header__cart" aria-label="Корзина" onClick={onClick}>
      <img src={ShoppingCart} alt="Корзина" className="header__cart-icon" />
    </button>
  );
}

