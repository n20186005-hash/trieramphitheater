import type { Metadata } from 'next';
import './globals.css';
import I18nProvider from '@/context/I18nProvider';

export const metadata: Metadata = {
  title: 'Amphitheater Trier — Römisches Amphitheater, UNESCO-Welterbe',
  description: 'Umfassender Reiseführer zum Amphitheater Trier: Römische Arena aus dem 2. Jahrhundert, UNESCO-Weltkulturerbe und Zeugnis der antiken Gladiatorenkultur.',
  keywords: 'Trier Amphitheater, Amphitheater Trier, Roman Amphitheater, UNESCO, Gladiators, Trier Germany',
  authors: [{ name: 'Trier Amphitheater Guide' }],
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
