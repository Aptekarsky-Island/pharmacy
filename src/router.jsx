import AppWithProviders from './App';
import { createBrowserRouter } from 'react-router-dom';
import PagesLayout from '@components/PagesLayout/PagesLayout';
import Home from '@pages/Home';
import Cart from '@pages/Cart/Cart';
import PaymentPage from '@pages/FooterPages/PaymentPage';
import TermsOfUsePage from '@pages/FooterPages/TermsOfUsePage';
import PaymentAndRefundPage from '@pages/FooterPages/PaymentAndRefundPage';
import PrivacyPolicy from '@pages/FooterPages/PrivacyPolicy';
import AlphabetListPage from '@pages/AlphabetListPage/AlphabetListPage';
import CatalogPage from '@pages/CatalogPage/CatalogPage';
// import ProductPage from './pages/ProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppWithProviders>
        <PagesLayout />
      </AppWithProviders>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'payment', element: <PaymentPage /> },
      { path: 'refund', element: <PaymentAndRefundPage /> },
      { path: 'terms-of-use', element: <TermsOfUsePage /> },
      { path: 'policy', element: <PrivacyPolicy /> },
      { path: 'alphabet-list', element: <AlphabetListPage /> },
      { path: 'catalog', element: <CatalogPage />}
    ],
  },
]);