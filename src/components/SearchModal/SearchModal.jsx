import './SearchModal.css';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar/SearchBar';
import ProductList from './ProductList/ProductList';
import useSearch from '@hooks/useSearch';

const modalSearchRoot = document.getElementById('modal-search');

export default function SearchModal ({ isOpen, setOpen }) {
    const { query, setQuery, filteredProducts, isLoading, hasQuery, hasResults } = useSearch();
    const modalRef = useRef(null);

    const renderContent = () => {
        if (hasResults) {
            return (
                <div className="app-content">
                    {/* <div className="app-result-count">
                        Найдено <span>{filteredProducts.length}</span> товаров
                    </div> */}
                    <ProductList products={filteredProducts} />
                </div>
            );
        }

        return <div className='search__modal__noResults__container'>
            {hasQuery ? (
                <div className="app-no-results">
                    По вашему запросу ничего не найдено
                </div>
            ) : (
                <div className="search_modal_placeholder">
                    Подберем то, что нужно именно Вам!
                </div>
            )}
        </div>;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="search__modal__overlay">
            <div className="search__modal__container" >
                <div className="search__modal__wrapper" ref={modalRef}>
                    {/* Search Section */}
                    <div className="app-search-section">
                        <SearchBar
                            query={query}
                            onQueryChange={setQuery}
                            isLoading={isLoading}
                        />
                    </div>

                    {/* Results Section */}
                    <div className="app-results-section">
                        {renderContent()}
                    </div>
                </div>
                
            </div>
        </div>,
        modalSearchRoot
    );
};