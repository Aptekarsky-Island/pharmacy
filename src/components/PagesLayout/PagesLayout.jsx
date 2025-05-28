import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function PagesLayout() {
  return (
    <main className="page__layout">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default PagesLayout;