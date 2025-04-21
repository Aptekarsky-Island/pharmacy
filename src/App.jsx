import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Discounts from './components/Discounts/Discounts';
import AlphabetFilter from './components/AlphabetFilter/AlphabetFilter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Bestsellers />
      <Discounts />
      <AlphabetFilter />
      <Footer />
    </>
  );
}

export default App;