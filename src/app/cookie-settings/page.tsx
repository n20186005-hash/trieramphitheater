'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function CookieSettings() {
  const { t } = useTranslation();
  const categories = t('cookieSettings.categories', { returnObjects: true }) as {
    id: string; name: string; description: string; required: boolean;
  }[];

  const [prefs, setPrefs] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookiePrefs');
    if (stored) {
      setPrefs(JSON.parse(stored));
    } else {
      const defaults: Record<string, boolean> = {};
      categories.forEach(c => { defaults[c.id] = c.required; });
      setPrefs(defaults);
    }
  }, []);

  const toggle = (id: string) => {
    setPrefs(prev => ({ ...prev, [id]: !prev[id] }));
    setSaved(false);
  };

  const save = () => {
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <>
      <Nav />
      <div className="legal-page">
        <div className="legal-content">
          <a href="/" className="legal-back">{t('nav.backHome')}</a>
          <h1>{t('cookieSettings.title')}</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.75 }}>
            {t('cookieSettings.description')}
          </p>
          <div>
            {categories.map(cat => (
              <div key={cat.id} className="cookie-category">
                <div className="cookie-info">
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={prefs[cat.id] ?? cat.required}
                    onChange={() => toggle(cat.id)}
                    disabled={cat.required}
                  />
                  <span className="toggle-slider" />
                </label>
              </div>
            ))}
          </div>
          <button className="cookie-save-btn" onClick={save}>
            {saved ? t('cookieSettings.saved') : t('cookieSettings.save')}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
