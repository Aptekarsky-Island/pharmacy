import { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст для корзины
export const CartContext = createContext();

// Хук для использования контекста корзины
export const useCart = () => useContext(CartContext);

// Провайдер контекста корзины
export const CartProvider = ({ children }) => {
  // Загружаем состояние корзины из localStorage при инициализации
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Общая стоимость всех товаров в корзине
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Общее количество товаров в корзине
  const [totalCount, setTotalCount] = useState(0);

  // Обновляем localStorage при изменении корзины
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Обновляем общую стоимость и количество
    const newTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCount(newTotalCount);
    
    const newTotalPrice = cartItems.reduce((acc, item) => {
      // Обрабатываем строку с ценой, удаляя символ рубля и пробелы
      const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      return acc + (price * item.quantity);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  // Добавить товар в корзину
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Если товар уже есть, увеличиваем его количество
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Если товара нет, добавляем его с количеством 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Удалить товар из корзины
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Изменить количество товара в корзине
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Очистить корзину
  const clearCart = () => {
    setCartItems([]);
  };

  // Значения и функции, предоставляемые контекстом
  const value = {
    cartItems,
    totalPrice,
    totalCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}; 