import { createBrowserRouter } from 'react-router-dom';
import PagesLayout from '@components/PagesLayout/PagesLayout';
import Home from '@pages/Home';
import PaymentPage from '@pages/FooterPages/PaymentPage';
import PaymentAndRefundPage from '@pages/FooterPages/PaymentAndRefundPage';
import PrivacyPolicy from '@pages/FooterPages/PrivacyPolicy';
import TermsOfUsePage from '@pages/FooterPages/TermsOfUsePage';
import Cart from '@pages/Cart/Cart';
// import ProductPage from './pages/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
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
  {
    path: '/refund',
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <PaymentAndRefundPage />
      }
    ]
  },
  {
    path: '/policy',
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <PrivacyPolicy />
      }
    ]
  },
  {
    path: '/terms-of-use',
    element: <PagesLayout />,
    children: [
      {
        index: true,
        element: <TermsOfUsePage />
      }
    ]
  },
  // ЗДЕСЯ МОЖНО ЧЕКАТЬ ВЕРСТКУ
  {
    path: '/danchik',
    element: <PagesLayout />,
    children: [
      {
        index: true,
        //element: Сюда вставь компонент с карточкой
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