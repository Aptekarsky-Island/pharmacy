import React, { useEffect } from 'react';
import './ImageModal.css';

function ImageModal({ image, onClose }) {
  // Блокируем прокрутку страницы, когда модальное окно открыто
  useEffect(() => {
    // Сохраняем текущую позицию прокрутки
    const scrollY = window.scrollY;
    
    // Добавляем класс и стили для блокировки прокрутки
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Обработчик клавиши Escape для закрытия
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      // Восстанавливаем прокрутку при закрытии
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Предотвращаем закрытие при клике на изображение
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={handleContentClick}>
        <img src={image} alt="" className="image-modal-image" />
        <button className="image-modal-close" onClick={onClose} aria-label="Закрыть">×</button>
      </div>
    </div>
  );
}

export default ImageModal; 