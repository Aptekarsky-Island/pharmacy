import React, { useState } from 'react';
import './AlphabetFilter.css';

const ALPHABETS = {
  rus: ['А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Э','Ю','Я'],
  eng: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
};

export default function AlphabetFilter() {
  const [lang, setLang] = useState(null);
  const [showAlphabet, setShowAlphabet] = useState(false);
  const letters = lang ? ALPHABETS[lang] : [];

  const handleLangClick = (selectedLang) => {
    setLang(selectedLang);
    setShowAlphabet(true);
  };

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
      {showAlphabet && lang && (
        <div className="alphabet__grid">
          {letters.map((l) => (
            <button key={l} className="alphabet__letter">
              {l}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}