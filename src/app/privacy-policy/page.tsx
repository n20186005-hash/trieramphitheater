'use client';

import { useTranslation } from 'react-i18next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const sections = t('privacy.sections', { returnObjects: true }) as {
    heading: string; content: string;
  }[];

  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-content">
          <a href="/" className="legal-back">{t('nav.backHome')}</a>
          <h1>{t('privacy.title')}</h1>
          <p className="legal-updated">{t('privacy.lastUpdated')}</p>
          {sections.map((s, i) => (
            <div key={i} className="legal-section">
              <h2>{s.heading}</h2>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
