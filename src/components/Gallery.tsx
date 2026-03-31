'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const photos = [
  { src: '/gallery/images (1).jpg', alt: 'Roman amphitheater' },
  { src: '/gallery/images (2).jpg', alt: 'Ancient stone walls' },
  { src: '/gallery/images (3).jpg', alt: 'Underground vaults' },
  { src: '/gallery/images (4).jpg', alt: 'Arena view' },
  { src: '/gallery/images (5).jpg', alt: 'Roman arch' },
  { src: '/gallery/images (6).jpg', alt: 'Archaeological site' },
  { src: '/gallery/images (7).jpg', alt: 'Trier cityscape' },
  { src: '/gallery/images (8).jpg', alt: 'Evening ruins' },
  { src: '/gallery/images (9).jpg', alt: 'Historical view' },
  { src: '/gallery/images (10).jpg', alt: 'Ancient architecture' },
  { src: '/gallery/images (11).jpg', alt: 'Roman heritage' },
  { src: '/gallery/images (12).jpg', alt: 'Archaeological remains' },
  { src: '/gallery/images (13).jpg', alt: 'Ancient monument' },
  { src: '/gallery/images (14).jpg', alt: 'Historical site' },
  { src: '/gallery/images (15).jpg', alt: 'Roman construction' },
  { src: '/gallery/images (16).jpg', alt: 'Ancient stones' },
  { src: '/gallery/images (17).jpg', alt: 'Historical architecture' },
  { src: '/gallery/images (18).jpg', alt: 'Roman era' },
  { src: '/gallery/images (19).jpg', alt: 'Ancient history' },
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
