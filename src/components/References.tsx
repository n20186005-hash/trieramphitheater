'use client';

import { useTranslation } from 'react-i18next';

export default function References() {
  const { t } = useTranslation();
  const sources = t('references.sources', { returnObjects: true }) as string[];

  return (
    <section className="section">
      <h2 className="section-title">{t('references.title')}</h2>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', maxWidth: '640px', lineHeight: 1.75 }}>
        {t('references.disclaimer')}
      </p>
      <ul className="references-list">
        {sources.map((source, i) => (
          <li key={i}>{source}</li>
        ))}
      </ul>
    </section>
  );
}
