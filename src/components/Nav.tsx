'use client';

import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-brand">{t('hero.title')}</a>
        <ul className="nav-links">
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#history">{t('nav.history')}</a></li>
          <li><a href="#gallery">{t('nav.gallery')}</a></li>
          <li><a href="#reviews">{t('nav.reviews')}</a></li>
          <li><a href="#itinerary">{t('nav.itinerary')}</a></li>
          <li><a href="#map">{t('nav.map')}</a></li>
        </ul>
        <div className="nav-controls">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
