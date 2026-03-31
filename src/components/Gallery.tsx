'use client';

import { useTranslation } from 'react-i18next';

const photos = [
  { src: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&q=80', alt: 'Roman amphitheater' },
  { src: 'https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?w=600&q=80', alt: 'Ancient stone walls' },
  { src: 'https://images.unsplash.com/photo-1553521041-d81913c689b4?w=600&q=80', alt: 'Underground vaults' },
  { src: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=600&q=80', alt: 'Arena view' },
  { src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80', alt: 'Roman arch' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Archaeological site' },
  { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80', alt: 'Trier cityscape' },
  { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80', alt: 'Evening ruins' },
];

export default function Gallery() {
  const { t } = useTranslation();
  const captions = t('gallery.captions', { returnObjects: true }) as string[];

  return (
    <section className="section" id="gallery">
      <h2 className="section-title">{t('gallery.title')}</h2>
      <p className="section-subtitle">{t('gallery.subtitle')}</p>
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div key={i} className="gallery-item">
            <img src={photo.src} alt={captions[i] || photo.alt} loading="lazy" />
            <div className="gallery-caption">{captions[i]}</div>
          </div>
        ))}
      </div>
      <p className="gallery-attr">
        {t('gallery.attribution')}{' '}
        <a href="https://maps.app.goo.gl/gAbKMdixtoGtafc99" target="_blank" rel="noopener noreferrer">
          {t('gallery.viewAll')}
        </a>
      </p>
    </section>
  );
}
