import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cookie-Einstellungen',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookieSettingsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="legal-content">
          <a href="/" className="legal-back">Zurück zur Startseite</a>
          <h1>Cookie-Einstellungen</h1>
          <p className="legal-updated">Letzte Aktualisierung: Oktober 2026</p>
          <div className="legal-section">
            <h2>Wesentliche Cookies</h2>
            <p>
              Diese Website speichert nur notwendige Einstellungen wie das gewählte Farbschema lokal im Browser, damit
              die Darstellung konsistent bleibt.
            </p>
          </div>
          <div className="legal-section">
            <h2>Optionale Cookies</h2>
            <p>
              Zurzeit werden keine zusätzlichen Marketing- oder Analyse-Cookies aktiv über ein eigenes Einstellungsmenü
              geschaltet.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
