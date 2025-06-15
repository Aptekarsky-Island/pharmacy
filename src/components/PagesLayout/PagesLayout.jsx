// src/PagesLayout.jsx
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavTools from '../NavTools/NavTools';
import { Outlet, useLocation } from 'react-router-dom';

export default function PagesLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main className="page__layout">
      <Header />
      {!isHomePage && <NavTools isHomePage={false} />}
      <div className="page__content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}