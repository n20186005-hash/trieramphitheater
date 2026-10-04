'use client';

import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-brand">Amphitheater Trier</a>
        <ul className="nav-links">
          <li><a href="/oeffnungszeiten/">Öffnungszeiten</a></li>
          <li><a href="/eintrittspreise/">Eintritt</a></li>
          <li><a href="/kapazitaet/">Kapazität</a></li>
          <li><a href="/unterirdisch/">Unterirdisch</a></li>
          <li><a href="/parken/">Parken</a></li>
          <li><a href="/geschichte/">Geschichte</a></li>
        </ul>
        <div className="nav-controls">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
