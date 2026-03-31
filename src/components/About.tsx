'use client';

import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true }) as string[];
  const keywords = t('about.keywords', { returnObjects: true }) as string[];

  return (
    <section className="section" id="about">
      <h2 className="section-title">{t('about.title')}</h2>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: '680px', fontSize: '1.05rem', lineHeight: 1.8 }}>
        {t('about.description')}
      </p>
      <ul className="highlights">
        {highlights.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="keyword-tags">
        {keywords.map((kw, i) => (
          <span key={i} className="keyword-tag">{kw}</span>
        ))}
      </div>
    </section>
  );
}
