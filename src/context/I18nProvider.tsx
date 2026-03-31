'use client';

import { useEffect } from 'react';
import '@/i18n';
import i18n from '@/i18n';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem('lng');
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
  }, []);

  return <>{children}</>;
}
