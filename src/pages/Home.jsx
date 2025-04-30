import './index.css'

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import Discounts from '../components/Discounts/Discounts';
import AlphabetFilter from '../components/AlphabetFilter/AlphabetFilter';
import FooterPageLayout from '../components/PagesLayout/PagesLayout';

function Home() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <Discounts />
      <AlphabetFilter />
    </>
  );
}

export default Home;