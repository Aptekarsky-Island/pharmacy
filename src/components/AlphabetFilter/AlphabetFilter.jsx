import React, { useState, useEffect } from 'react';
import './AlphabetFilter.css';
import { useNavigate, useLocation } from 'react-router-dom';

const ALPHABETS = {
  rus: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'],
  eng: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

export default function AlphabetFilter() {
  const location = useLocation();
  const navigate = useNavigate();

  // Состояние
  const [lang, setLang] = useState(null);
  const [showAlphabet, setShowAlphabet] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);

  // Получаем данные из URL при монтировании
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlLang = searchParams.get('lang');
    const urlLetter = searchParams.get('letter');

    if (urlLang) {
      setLang(urlLang);
      setShowAlphabet(true); // 👈 Открываем алфавит
    }

    if (urlLetter) {
      setActiveLetter(urlLetter);
    }
  }, [location.search]);

  // Обработчик выбора языка
  const handleLangClick = (selectedLang) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('lang', selectedLang);
    if (activeLetter) {
      searchParams.set('letter', activeLetter);
    } else {
      searchParams.delete('letter');
    }

    navigate(`?${searchParams.toString()}`);
    setLang(selectedLang);
    setShowAlphabet(true);
  };

  // Обработчик клика по букве
  const handleLetterClick = (letter) => {
    const searchParams = new URLSearchParams(location.search);
    if (!searchParams.has('lang')) {
      searchParams.set('lang', lang || 'rus');
    }
    searchParams.set('letter', letter);

    // ✅ Теперь происходит переход на /alphabet-list
    navigate(`/alphabet-list?${searchParams.toString()}`);
    setActiveLetter(letter);
  };

  const letters = lang ? ALPHABETS[lang] : [];

  return (
    <section className="alphabet">
      <div className="alphabet__header">
        <h2 className="alphabet__title">ПРЕПАРАТЫ ПО АЛФАВИТУ</h2>
        <div className="alphabet__controls">
          <button
            className={`alphabet__btn${lang === 'rus' ? ' active' : ''}`}
            onClick={() => handleLangClick('rus')}
          >
            A–Я
          </button>
          <button
            className={`alphabet__btn${lang === 'eng' ? ' active' : ''}`}
            onClick={() => handleLangClick('eng')}
          >
            A–Z
          </button>
        </div>
      </div>

      {/* Кнопки алфавита */}
      {showAlphabet && lang && (
        <div className="alphabet__grid">
          {letters.map((l) => (
            <button
              key={l}
              className={`alphabet__letter${activeLetter === l ? ' active' : ''}`}
              onClick={() => handleLetterClick(l)}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}