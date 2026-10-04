export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/oeffnungszeiten/">Öffnungszeiten</a>
        <a href="/eintrittspreise/">Eintrittspreise</a>
        <a href="/kapazitaet/">Kapazität</a>
        <a href="/unterirdisch/">Unterirdisch</a>
        <a href="/parken/">Parken</a>
        <a href="/fotos/">Fotos</a>
        <a href="/geschichte/">Geschichte</a>
        <a href="/privacy-policy">Datenschutz</a>
        <a href="/terms-of-service">Nutzungsbedingungen</a>
        <a href="/cookie-settings">Cookie-Einstellungen</a>
      </div>
      <p className="footer-support">
        Offizielle Besucherinformationen:
        {' '}
        <a href="https://www.zentrum-der-antike.de/monumente/amphitheater" target="_blank" rel="noopener noreferrer">
          Zentrum der Antike
        </a>
      </p>
      <p className="footer-copyright">© 2026 Trier Amphitheater · Unabhängige deutschsprachige Informationsseite</p>
    </footer>
  );
}
