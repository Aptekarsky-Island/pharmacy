import { Link } from 'react-router-dom';
import './Cart.css';
import NavTools from '../../components/NavTools/NavTools';
import { useCart } from './CartContext.jsx';

export default function Cart() {
    // Используем контекст корзины
    const { cartItems, totalPrice, removeFromCart, updateQuantity } = useCart();
    const cartIsEmpty = cartItems.length === 0;

    return (
        <>
            <NavTools />
            <main className="cart">
                <div className="cart__container">
                    <h1 className="cart__title">Корзина</h1>
                    
                    {cartIsEmpty ? (
                        <div className="cart__empty">
                            <h2 className="cart__empty-title">Ваша корзина пуста!</h2>
                            <p className="cart__empty-text">Начните поиск и добавьте товар в корзину</p>
                            <Link to="/" className="cart__empty-button">
                                Начать поиск
                            </Link>
                        </div>
                    ) : (
                        <div className="cart__content">
                            <div className="cart__items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart__item">
                                        <div className="cart__item-image-container">
                                            <img src={item.img} alt={item.name} className="cart__item-image" />
                                        </div>
                                        <div className="cart__item-details">
                                            <h3 className="cart__item-name">{item.name}</h3>
                                            <div className="cart__item-price">{item.price}</div>
                                        </div>
                                        <div className="cart__item-controls">
                                            <div className="cart__item-quantity">
                                                <button 
                                                    className="cart__item-quantity-btn"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    −
                                                </button>
                                                <span className="cart__item-quantity-value">{item.quantity} шт</span>
                                                <button 
                                                    className="cart__item-quantity-btn"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                className="cart__item-remove"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="cart__summary">
                                <div className="cart__summary-content">
                                    <h3 className="cart__summary-title">Итого</h3>
                                    <div className="cart__summary-total">
                                        <span className="cart__summary-total-count">{cartItems.length} товар</span>
                                        <span className="cart__summary-total-price">{totalPrice} ₽</span>
                                    </div>
                                    <button className="cart__checkout-button">Оформить</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}