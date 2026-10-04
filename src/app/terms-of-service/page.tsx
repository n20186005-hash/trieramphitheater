import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="legal-content">
          <a href="/" className="legal-back">Zurück zur Startseite</a>
          <h1>Nutzungsbedingungen</h1>
          <p className="legal-updated">Letzte Aktualisierung: Oktober 2026</p>
          <div className="legal-section">
            <h2>1. Informationscharakter</h2>
            <p>
              Diese Seite dient der allgemeinen Besucherinformation. Verbindlich sind die Angaben der offiziellen
              Betreiberseiten und der zuständigen Institutionen.
            </p>
          </div>
          <div className="legal-section">
            <h2>2. Aktualität</h2>
            <p>
              Öffnungszeiten, Eintrittspreise, Veranstaltungen und Besuchsbedingungen können sich kurzfristig ändern.
              Prüfen Sie im Zweifel immer die offizielle Monument-Seite vor der Anreise.
            </p>
          </div>
          <div className="legal-section">
            <h2>3. Externe Links</h2>
            <p>
              Für Inhalte externer Webseiten, auf die verlinkt wird, sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
