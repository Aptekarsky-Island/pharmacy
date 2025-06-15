/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from 'react';
import { searchProducts } from '../data/modalProducts';

export default function useSearch () {
  const [query, setQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load products on mount
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const products = await searchProducts('');
        setAllProducts(products);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter products based on regex query
  const filteredProducts = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    try {
      // Create regex from query (case insensitive, global)
      const regex = new RegExp(query, 'gi');
      
      return allProducts.filter(product => 
        regex.test(product.name) || 
        regex.test(product.description) ||
        regex.test(product.category)
      );
    } catch (error) {
      // If regex is invalid, fall back to simple string matching
      const lowerQuery = query.toLowerCase();
      return allProducts.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
      );
    }
  }, [query, allProducts]);

  return {
    query,
    setQuery,
    filteredProducts,
    isLoading,
    hasQuery: query.trim().length > 0,
    hasResults: filteredProducts.length > 0
  };
};