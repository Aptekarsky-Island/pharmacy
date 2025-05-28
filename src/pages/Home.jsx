import './index.css'
import Hero from '../components/Hero/Hero';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import Discounts from '../components/Discounts/Discounts';
import AlphabetFilter from '../components/AlphabetFilter/AlphabetFilter';

function Home() {
  return (
    <>
      <Hero/>
      <Bestsellers />
      <Discounts />
      <AlphabetFilter />
    </>
  );
}

export default Home;