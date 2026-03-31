'use client';

import { useTranslation } from 'react-i18next';

export default function Guide() {
  const { t } = useTranslation();
  const items = t('guide.items', { returnObjects: true }) as { title: string; text: string }[];

  return (
    <section className="section">
      <h2 className="section-title">{t('guide.title')}</h2>
      <div className="guide-grid">
        {items.map((item, i) => (
          <div key={i} className="guide-item">
            <span className="guide-number">{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
