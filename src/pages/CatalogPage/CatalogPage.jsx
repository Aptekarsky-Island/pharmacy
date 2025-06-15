import React from 'react';
import './CatalogPage.css';
import Breadcrumbs from '@components/CatalogPage/Breadcrumbs';
import SortControls from '@components/CatalogPage/SortControls';
import Filters from '@components/CatalogPage/Filters';
import ProductCard from '@components/CatalogPage/ProductCard';
import Pagination from '@components/CatalogPage/Pagination';

export default function CatalogPage() {
  // Пример данных
  const products = [
  {
    id: 1,
    name: 'Анальгин таблетки 500мг 10шт',
    price: '19',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 2,
    name: 'Парацетамол таблетки 500мг',
    price: '22',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 3,
    name: 'Ибупрофен капсулы 200мг',
    price: '38',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 4,
    name: 'Нурофен таблетки 400мг',
    price: '119',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 5,
    name: 'Цитрамон П таблетки',
    price: '16',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 6,
    name: 'Найз гель 1% 30г',
    price: '175',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 7,
    name: 'Кетанов таблетки 10мг',
    price: '135',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 8,
    name: 'Диклофенак мазь 1% 50г',
    price: '67',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 9,
    name: 'Ренни жевательные таблетки 20шт',
    price: '210',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 10,
    name: 'Омепразол капсулы 20мг',
    price: '98',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 11,
    name: 'Эспумизан капли для приёма внутрь',
    price: '320',
    image: '/placeholder.svg?height=100&width=200'
  },
  {
    id: 12,
    name: 'Линекс капсулы 200мг',
    price: '275',
    image: '/placeholder.svg?height=100&width=200'
  }
];

  return (
    <main className="catalog-page">
      <Breadcrumbs />

      <section className="catalog-content">
        <SortControls />

        <div className="catalog-grid">
          <aside className="catalog-sidebar">
            <Filters />
          </aside>

          <div className="catalog-products">
            <div className="product-list">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="load-more-container">
              <button className="load-more-button">Ещё</button>
            </div>

            <Pagination />
          </div>
        </div>
      </section>
    </main>
  );
}