import type { Metadata } from 'next';
import './globals.css';
import I18nProvider from '@/context/I18nProvider';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Amphitheater Trier',
    template: '%s',
  },
  description:
    'Deutschsprachige Besucherinformationen zum Amphitheater Trier mit Öffnungszeiten, Eintritt, Kapazität, Parken, Fotos und Geschichte.',
  authors: [{ name: 'Trier Amphitheater' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
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
