'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const photos = [
  { src: '/gallery/trier-amphitheater-1.jpg', alt: 'Roman amphitheater' },
  { src: '/gallery/trier-amphitheater-2.jpg', alt: 'Ancient stone walls' },
  { src: '/gallery/trier-amphitheater-3.jpg', alt: 'Underground vaults' },
  { src: '/gallery/trier-amphitheater-4.jpg', alt: 'Arena view' },
  { src: '/gallery/trier-amphitheater-5.jpg', alt: 'Roman arch' },
  { src: '/gallery/trier-amphitheater-6.jpg', alt: 'Archaeological site' },
  { src: '/gallery/trier-amphitheater-7.jpg', alt: 'Trier cityscape' },
  { src: '/gallery/trier-amphitheater-8.jpg', alt: 'Evening ruins' },
  { src: '/gallery/trier-amphitheater-9.jpg', alt: 'Historical view' },
  { src: '/gallery/trier-amphitheater-10.jpg', alt: 'Ancient architecture' },
  { src: '/gallery/trier-amphitheater-11.jpg', alt: 'Roman heritage' },
  { src: '/gallery/trier-amphitheater-12.jpg', alt: 'Archaeological remains' },
  { src: '/gallery/trier-amphitheater-13.jpg', alt: 'Ancient monument' },
  { src: '/gallery/trier-amphitheater-14.jpg', alt: 'Historical site' },
  { src: '/gallery/trier-amphitheater-15.jpg', alt: 'Roman construction' },
  { src: '/gallery/trier-amphitheater-16.jpg', alt: 'Ancient stones' },
  { src: '/gallery/trier-amphitheater-17.jpg', alt: 'Historical architecture' },
  { src: '/gallery/trier-amphitheater-18.jpg', alt: 'Roman era' },
  { src: '/gallery/trier-amphitheater-19.jpg', alt: 'Ancient history' },
];

export default function Gallery() {
  const { t } = useTranslation();
  const captions = t('gallery.captions', { returnObjects: true }) as string[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="section" id="gallery">
      <h2 className="section-title">{t('gallery.title')}</h2>
      <p className="section-subtitle">{t('gallery.subtitle')}</p>
      
      {/* 缩略图网格 */}
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div 
            key={i} 
            className="gallery-item"
            onClick={() => openModal(i)}
          >
            <img 
              src={photo.src} 
              alt={captions[i] || photo.alt} 
              loading="lazy" 
              className="gallery-thumbnail"
            />
            <div className="gallery-caption">{captions[i]}</div>
          </div>
        ))}
      </div>

      {/* 图片查看器模态框 */}
      {isModalOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={closeModal}>×</button>
            <button className="gallery-prev" onClick={prevPhoto}>‹</button>
            <button className="gallery-next" onClick={nextPhoto}>›</button>
            <img 
              src={photos[currentIndex].src} 
              alt={photos[currentIndex].alt}
              className="gallery-full-image"
            />
            <div className="gallery-modal-caption">
              {captions[currentIndex] || photos[currentIndex].alt}
            </div>
            <div className="gallery-counter">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}

      <p className="gallery-attr">
        {t('gallery.attribution')}{' '}
        <a href="https://maps.app.goo.gl/gAbKMdixtoGtafc99" target="_blank" rel="noopener noreferrer">
          {t('gallery.viewAll')}
        </a>
      </p>
    </section>
  );
}
