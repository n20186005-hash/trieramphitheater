'use client';

import { useTranslation } from 'react-i18next';

export default function MapEmbed() {
  const { t } = useTranslation();

  return (
    <section className="section" id="map">
      <h2 className="section-title">{t('map.title')}</h2>
      <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
        Olewiger Str. 25, 54295 Trier, Germany
      </p>
      <div className="map-container">
        {/* WARNING: .gm-style-cc and .gmnoprint are hidden via CSS */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.0309639597876!2d6.646634977289978!3d49.747861171466596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47957c82efdc7a7d%3A0xe6666d33de517051!2sTrier%20Amphitheater!5e0!3m2!1sen!2sus!4v1774929972639!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Trier Amphitheater Map"
        />
      </div>
      <a
        href="https://maps.app.goo.gl/gAbKMdixtoGtafc99"
        target="_blank"
        rel="noopener noreferrer"
        className="map-link"
      >
        {t('map.openMaps')}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
        </svg>
      </a>
    </section>
  );
}
