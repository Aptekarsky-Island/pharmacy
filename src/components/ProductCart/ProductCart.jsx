import './ProductCart.css';
// import { useState } from 'react';



export default function ProductCart() {
    // const [count, updateCount] = useState(0);
    // const [isInCart, setInCart] = useState(false);
    
return (
    <div className="product__cart__container">
        <p>Наименование</p> //инфа приходит в параметры
        <p>Цена</p> //через параметры
        <button 
        className='product__cart_btn'
        // onClick={}
        >
            Купить
        </button>
    </div>
);

}