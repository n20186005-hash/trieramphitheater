'use client';

import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const tags = t('hero.tags', { returnObjects: true }) as string[];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="animate-in">{t('hero.title')}</h1>
        <p className="hero-subtitle animate-in delay-1">{t('hero.subtitle')}</p>
        <div className="hero-meta animate-in delay-2">
          <span className="hero-rating">
            <span className="star">★★★★★</span>
            <strong>{t('hero.rating')}</strong>
            <span style={{ opacity: 0.7 }}>({t('hero.reviewCount')})</span>
          </span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>{t('hero.hours')}</span>
        </div>
        <div className="hero-tags animate-in delay-3">
          {tags.map((tag, i) => (
            <span key={i} className="hero-tag">{tag}</span>
          ))}
        </div>
        <a
          href="https://maps.app.goo.gl/gAbKMdixtoGtafc99"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta animate-in delay-4"
        >
          {t('hero.openMaps')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
