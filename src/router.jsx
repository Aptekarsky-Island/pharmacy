import { createBrowserRouter } from 'react-router-dom';
import PagesLayout from './components/PagesLayout/PagesLayout';
import Home from './pages/Home';
import PaymentPage from './pages/PaymentPage';
// import ProductPage from './pages/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PagesLayout />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      }
    ]
  },
  {
    path: '/payment',
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <PaymentPage />
      }
    ]
  },
  // {
  //   path: '/product/:id', // добавить маршрут товара
  //   element: <PagesLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <ProductPage />
  //     }
  //   ]
  // }
]);