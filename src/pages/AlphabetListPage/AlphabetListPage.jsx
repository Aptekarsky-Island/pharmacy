import './AlphabetListPage.css';
import React, { useState, useEffect } from 'react';
import AlphabetFilter from '@components/AlphabetFilter/AlphabetFilter';
import DRUGS from '../../data/search_by_letter.json';

export default function AlphabetListPage() {
    const [letter, setLetter] = useState('');
    const [filteredDrugs, setFilteredDrugs] = useState([]);

    // Получаем параметры из URL
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const selectedLetter = searchParams.get('letter');

        if (selectedLetter) {
            setLetter(selectedLetter);

            const filtered = DRUGS.filter(drug =>
                drug.drug.trim().toUpperCase().startsWith(selectedLetter.toUpperCase())
            );

            setFilteredDrugs(filtered);
        }
    }, [window.location.search]);

    return (
        <div className="alphabet-list-page">
            {/* Алфавитный фильтр */}
            <AlphabetFilter />
            {letter && (
                <>
                    {filteredDrugs.length > 0 ? (
                        <div className="drug-grid">
                            <ul className="drug-list">
                                {filteredDrugs.map((drug) => (
                                    <li key={drug.drug_id} className="drug-item">
                                        {drug.drug}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Нет препаратов на эту букву.</p>
                    )}
                </>
            )}
        </div>
    );
}