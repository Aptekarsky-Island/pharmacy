// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import '../components/ProductPage/ProductPage.css';
// import '../components/ProductPage/ProductNavTools.css';
// import NavTools from '../components/NavTools/NavTools';
// import ImageModal from '../components/ProductPage/ImageModal';
// import SearchWindow from '../components/SearchWindow/SearchWindow';

// // Импортируем реальные изображения из assets
// import p1 from '../assets/p1.png';
// import p2 from '../assets/p2.png';
// import p3 from '../assets/p3.png';
// import p4 from '../assets/p4.png';

// // Пример данных с реальными изображениями
// const products = [
//   {
//     id: '1',
//     name: 'Лайфевит капсулы 400мг 30шт',
//     price: '650 ₽',
//     images: [p1, p2, p3, p4],
//     description: 'витамин Е',
//     form: 'капсулы',
//     prescription: 'без рецепта'
//   },
//   // ... другие товары
// ];

// function ProductPage() {
//   const { id } = useParams();
//   const product = products.find(p => p.id === id);
//   const [mainImage, setMainImage] = useState(product?.images[0]);
  
//   // Состояние для модального окна изображения
//   const [modalOpen, setModalOpen] = useState(false);
  
//   // Состояние для модального окна поиска
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   // При монтировании компонента прокручиваем страницу вверх
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!product) return <div>Товар не найден</div>;

//   return (
//     <div className="product-page">
//       {/* Модальное окно поиска */}
//       <SearchWindow isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
//       {/* Добавляем NavTools с фиксированными параметрами для страницы товара */}
//       <div className="product-page-navtools-container">
//         <NavTools onSearchClick={() => setIsSearchOpen(true)} hide={false} scrolledUp={true} />
//       </div>
      
//       <div className="product-page-outer">
//         <div className="product-page-card" style={{ position: 'relative' }}>
//           <div className="product-page-gallery">
//             <div className="product-page-thumbs">
//               {product.images.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt=""
//                   className={`product-page-thumb${mainImage === img ? ' active' : ''}`}
//                   onClick={() => setMainImage(img)}
//                 />
//               ))}
//             </div>
//             <div className="product-page-main-image-block">
//               <img 
//                 src={mainImage} 
//                 alt={product.name} 
//                 className="product-page-main-image" 
//                 onClick={() => setModalOpen(true)}
//                 style={{ cursor: 'pointer' }}
//               />
//             </div>
//           </div>
//           <div className="product-page-info">
//             <div className="product-page-tabs">
//               <button className="product-page-tab active">Основное</button>
//               <button className="product-page-tab">Аналоги</button>
//               <button className="product-page-tab">Описание</button>
//               <button className="product-page-tab">Показания</button>
//               <button className="product-page-tab">Способ применения</button>
//             </div>
//             <h1 className="product-page-title">{product.name}</h1>
//             <table className="product-page-meta">
//               <tbody>
//                 <tr>
//                   <td>Отпуск</td>
//                   <td className="dotted"><span>{product.prescription}</span></td>
//                 </tr>
//                 <tr>
//                   <td>Действующее вещество</td>
//                   <td className="dotted"><span>{product.description}</span></td>
//                 </tr>
//                 <tr>
//                   <td>Форма выпуска</td>
//                   <td className="dotted"><span>{product.form}</span></td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className="product-page-price">{product.price}</div>
//             <button className="product-page-buy-btn">Купить</button>
//           </div>
          
//           {/* Модальное окно с увеличенным изображением внутри карточки товара */}
//           {modalOpen && (
//             <ImageModal 
//               image={mainImage} 
//               onClose={() => setModalOpen(false)} 
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;