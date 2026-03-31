'use client';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">{t('footer.privacy')}</a>
        <a href="/terms-of-service">{t('footer.terms')}</a>
        <a href="/cookie-settings">{t('footer.cookies')}</a>
      </div>
      <p className="footer-support">
        {t('footer.support')}{' '}
        <a href="mailto:N20186005@gmail.com">N20186005@gmail.com</a>
      </p>
      <p className="footer-copyright">{t('footer.copyright')}</p>
    </footer>
  );
}
