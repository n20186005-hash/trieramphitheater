'use client';

import { useTranslation } from 'react-i18next';

export default function PracticalInfo() {
  const { t } = useTranslation();
  const fields = ['address', 'hours', 'gettingThere', 'parking', 'accessibility'] as const;

  return (
    <section className="section">
      <h2 className="section-title">{t('practical.title')}</h2>
      <div className="practical-grid">
        {fields.map(field => (
          <div key={field} className="practical-card">
            <h3>{t(`practical.${field}.label`)}</h3>
            <p>{t(`practical.${field}.value`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
