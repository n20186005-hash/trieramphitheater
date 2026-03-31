import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import zhHant from './locales/zh-Hant.json';

const resources = {
  de: { translation: de },
  en: { translation: en },
  fr: { translation: fr },
  'zh-Hant': { translation: zhHant },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'de',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
