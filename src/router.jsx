import { createBrowserRouter } from 'react-router-dom';
import PagesLayout from './components/PagesLayout/PagesLayout';
import Home from './pages/Home';
import PaymentPage from './pages/PaymentPage';

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
  }
]);