import './index.css'
import Discounts from '@components/Discounts/Discounts';
import AlphabetFilter from '@components/AlphabetFilter/AlphabetFilter';
import NavTools from '@components/NavTools/NavTools';
import PromoBanner from '@components/PromoBanner/PromoBanner';
import Categories from '@components/Categories/Categories';

export default function Home() {
  return (
    <>
      <div className="home-content-wrapper">
        <div className="home-content">
          <NavTools isHomePage={true} />
          <PromoBanner />
          <Categories />
        </div>
      </div>
      <Discounts />
      <AlphabetFilter />
    </>
  );
}

