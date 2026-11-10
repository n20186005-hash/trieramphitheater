'use client';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
const links = [
  ['/', 'Startseite'], ['/oeffnungszeiten/', 'Öffnungszeiten'], ['/eintrittspreise/', 'Eintritt'],
  ['/unterirdisch/', 'Unterirdisch'], ['/parken/', 'Anreise'], ['/#umgebung', 'Umgebung']
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return <nav className="nav" aria-label="Hauptnavigation"><div className="nav-inner">
    <a href="/" className="nav-brand">Amphitheater Trier</a>
    <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Menü schließen' : 'Menü öffnen'}</button>
    <ul id="main-navigation" className={`nav-links${open ? ' is-open' : ''}`}>{links.map(([href, text]) => <li key={href}><a href={href} onClick={() => setOpen(false)}>{text}</a></li>)}</ul>
    <div className="nav-controls"><ThemeToggle /></div>
  </div></nav>;
}
