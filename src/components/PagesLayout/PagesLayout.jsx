import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import '../Footer/Footer.css'

function PagesLayout() {
  return (
    <div className="page">
      <Header />
      <main className="footer__page__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PagesLayout;