import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function PagesLayout() {
  return (
    <div className="page">
      <main className="page__layout">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default PagesLayout;