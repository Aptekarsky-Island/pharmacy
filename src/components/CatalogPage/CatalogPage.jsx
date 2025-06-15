import React from 'react';
import './CatalogPage.css';
import Breadcrumbs from './Breadcrumbs';
import SortControls from './SortControls';
import Filters from './Filters';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

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
    }
  ];

  return (
    <main className="catalog-page">
      <Breadcrumbs />

      <section className="catalog-content">
        <h1 className="catalog-title">От боли и воспаления</h1>

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