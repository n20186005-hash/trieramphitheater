'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'zh-Hant', label: '繁體中文' },
];

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLabel = languages.find(l => l.code === i18n.language)?.label || 'Deutsch';

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lng', code);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)} aria-label="Language">
        {currentLabel}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="lang-menu">
          {languages.map(l => (
            <button
              key={l.code}
              className={`lang-option ${i18n.language === l.code ? 'active' : ''}`}
              onClick={() => switchLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
