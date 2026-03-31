import type { Metadata } from 'next';
import './globals.css';
import I18nProvider from '@/context/I18nProvider';

export const metadata: Metadata = {
  title: 'Amphitheater Trier — Römisches Amphitheater, UNESCO-Welterbe',
  description: 'Umfassender Reiseführer zum Amphitheater Trier: Römische Arena aus dem 2. Jahrhundert, UNESCO-Weltkulturerbe und Zeugnis der antiken Gladiatorenkultur.',
  keywords: 'Trier Amphitheater, Amphitheater Trier, Roman Amphitheater, UNESCO, Gladiators, Trier Germany',
  authors: [{ name: 'Trier Amphitheater Guide' }],
  alternates: {
    languages: {
      'de': 'https://www.trieramphitheater.com',
      'en': 'https://www.trieramphitheater.com/en',
      'fr': 'https://www.trieramphitheater.com/fr',
      'zh-Hant': 'https://www.trieramphitheater.com/zh-hant',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="de" href="https://www.trieramphitheater.com" />
        <link rel="alternate" hrefLang="en" href="https://www.trieramphitheater.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://www.trieramphitheater.com/fr" />
        <link rel="alternate" hrefLang="zh-Hant" href="https://www.trieramphitheater.com/zh-hant" />
        <link rel="alternate" hrefLang="x-default" href="https://www.trieramphitheater.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
