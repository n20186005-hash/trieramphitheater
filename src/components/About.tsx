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
          <strong>免责声明：</strong>本站为独立的第三方旅游科普资讯站，旨在提供客观的广场周边游览建议。所有信息来源于公开资源（旅游局官网、维基百科等）和Google地图，仅供参考。请在实际出行前核实最新信息。
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
