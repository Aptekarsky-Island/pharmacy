import React, { createContext, useReducer, useContext, useEffect } from 'react';

// === 1. Начальное состояние ===
const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
  totalProductsCount: 0,
  isCatalogOpen: false,
  isSearchOpen: false,
};

// === 2. Типы действий (action types) ===
export const types = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  OPEN_CATALOG: 'OPEN_CATALOG',
  CLOSE_CATALOG: 'CLOSE_CATALOG',
  OPEN_SEARCH: 'OPEN_SEARCH',
  CLOSE_SEARCH: 'CLOSE_SEARCH',
  UPDATE_METRICS: 'UPDATE_METRICS', // 👈 новый тип для обновления метрик
};

// === 3. Вычисляем метрики из cartItems ===
const getMetrics = (cartItems) => {
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalProductsCount = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
    return acc + (price * item.quantity);
  }, 0);

  return { totalCount, totalProductsCount, totalPrice };
};

// === 4. Обработчики действий (ACTION_HANDLERS) ===
const ACTION_HANDLERS = {
  [types.ADD_TO_CART]: (state, action) => {
    const product = action.payload;
    const existingItem = state.cartItems.find(item => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = state.cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return { ...state, cartItems: updatedCart };
  },

  [types.REMOVE_FROM_CART]: (state, action) => {
    const updatedCart = state.cartItems.filter(
      item => item.id !== action.payload
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { ...state, cartItems: updatedCart };
  },

  [types.UPDATE_QUANTITY]: (state, action) => {
    const { productId, quantity } = action.payload;

    if (quantity <= 0) {
      return ACTION_HANDLERS[types.REMOVE_FROM_CART](state, {
        payload: productId,
      });
    }

    const updatedCart = state.cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return { ...state, cartItems: updatedCart };
  },

  [types.CLEAR_CART]: (state) => {
    localStorage.setItem('cart', JSON.stringify([]));
    return { ...state, cartItems: [] };
  },

  [types.OPEN_CATALOG]: (state) => ({ ...state, isCatalogOpen: true }),
  [types.CLOSE_CATALOG]: (state) => ({ ...state, isCatalogOpen: false }),

  [types.OPEN_SEARCH]: (state) => ({ ...state, isSearchOpen: true }),
  [types.CLOSE_SEARCH]: (state) => ({ ...state, isSearchOpen: false }),

  [types.UPDATE_METRICS]: (state, action) => ({
    ...state,
    totalCount: action.payload.totalCount,
    totalProductsCount: action.payload.totalProductsCount,
    totalPrice: action.payload.totalPrice,
  }),
};

// === 5. Редьюсер через ACTION_HANDLERS ===
const globalReducer = (state, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

// === 6. Контекст и провайдер ===
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Получаем сохранённую корзину из localStorage
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

  const [state, dispatch] = useReducer(globalReducer, {
    ...initialState,
    cartItems: savedCart,
  });

  // Флаг, чтобы не запускать эффект при первом рендере
  const isInitialMount = React.useRef(true);

  // Пересчитываем метрики при изменении cartItems
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const { totalCount, totalProductsCount, totalPrice } = getMetrics(state.cartItems);

    dispatch({
      type: types.UPDATE_METRICS,
      payload: { totalCount, totalProductsCount, totalPrice },
    });
  }, [state.cartItems]);

  // Объединяем state и вычисленные метрики
  const contextValue = {
    ...state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// === 7. Хук для удобного доступа к контексту ===
export const useGlobalContext = () => useContext(GlobalContext);