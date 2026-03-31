'use client';

import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const { t } = useTranslation();
  const items = t('reviews.items', { returnObjects: true }) as {
    name: string; date: string; text: string;
  }[];

  return (
    <section className="section" id="reviews">
      <h2 className="section-title">{t('reviews.title')}</h2>
      <p className="reviews-declaration">{t('reviews.declaration')}</p>
      <div className="reviews-grid">
        {items.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-header">
              <div className="review-avatar">{review.name.charAt(0)}</div>
              <div className="review-meta">
                <span className="review-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="reviews-more">
        <a
          href="https://maps.app.goo.gl/gAbKMdixtoGtafc99"
          target="_blank"
          rel="noopener noreferrer"
          title={t('reviews.viewAll')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
