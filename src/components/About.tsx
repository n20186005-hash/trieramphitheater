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
      <div style={{ 
        backgroundColor: 'var(--color-bg-alt)', 
        border: '1px solid var(--color-border)', 
        borderRadius: '8px', 
        padding: '1.5rem', 
        marginTop: '2rem',
        maxWidth: '680px'
      }}>
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          fontSize: '0.9rem', 
          lineHeight: 1.6,
          margin: 0
        }}>
          <strong>{t('disclaimer.title')}：</strong>{t('disclaimer.content')}
        </p>
      </div>
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
