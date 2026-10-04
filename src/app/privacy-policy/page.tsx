import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="legal-content">
          <a href="/" className="legal-back">Zurück zur Startseite</a>
          <h1>Datenschutzerklärung</h1>
          <p className="legal-updated">Letzte Aktualisierung: Oktober 2026</p>
          <div className="legal-section">
            <h2>1. Allgemeines</h2>
            <p>
              Diese Website ist ein unabhängiges Informationsangebot zum Amphitheater Trier. Personenbezogene Daten
              werden nur in dem Umfang verarbeitet, der für den technischen Betrieb der Seite erforderlich ist.
            </p>
          </div>
          <div className="legal-section">
            <h2>2. Eingebundene Dienste</h2>
            <p>
              Verlinkungen zu Google Maps und zur offiziellen Monument-Seite können beim Aufruf der Zielseiten eigene
              Datenverarbeitungen der jeweiligen Anbieter auslösen. Es gelten dort die Datenschutzhinweise dieser
              Dienste.
            </p>
          </div>
          <div className="legal-section">
            <h2>3. Kontakt</h2>
            <p>
              Bei datenschutzbezogenen Fragen verwenden Sie bitte nach Möglichkeit die Kontaktangaben auf der jeweils
              zuständigen offiziellen Seite des Anbieters.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
