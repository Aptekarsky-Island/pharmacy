import './index.css'
import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import Discounts from '../components/Discounts/Discounts';
import AlphabetFilter from '../components/AlphabetFilter/AlphabetFilter';
import Modal from '../components/ModalWindowLayout/Modal';

function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hero />
      <Bestsellers />
      <Discounts />
      <AlphabetFilter />
      {/* <Modal isOpen={isOpen} setOpen={setOpen}/> */}
    </>
  );
}

export default Home;