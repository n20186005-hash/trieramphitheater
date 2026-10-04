import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import {
  getTodayOpeningLabel,
  openingHoursSchedule,
  siteConfig,
  ticketPrices,
} from '@/lib/site-data';

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: 'Amphitheater Trier Öffnungszeiten 2026 & Eintritt',
  description:
    'Aktuelle Öffnungszeiten 2026 für das Amphitheater Trier mit Monatsübersicht, letztem Einlass und Eintrittspreisen.',
  path: '/oeffnungszeiten/',
});

export default function OpeningHoursPage() {
  const todayOpening = getTodayOpeningLabel();
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Amphitheater Trier Öffnungszeiten 2026',
      url: `${siteConfig.url}/oeffnungszeiten/`,
      description:
        'Aktuelle Öffnungszeiten und Eintrittspreise für das Amphitheater Trier.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Öffnungszeiten', item: `${siteConfig.url}/oeffnungszeiten/` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main className="page-main">
        <section className="section page-hero">
          <div className="breadcrumbs">
            <a href="/">Startseite</a>
            <span>/</span>
            <span>Öffnungszeiten</span>
          </div>
          <p className="eyebrow">Monatszeiten und Eintritt 2026</p>
          <h1>Amphitheater Trier Öffnungszeiten 2026</h1>
          <p className="lede">
            {todayOpening}. Die Zeiten wechseln saisonal. Für Oktober gilt 09:00-17:00 Uhr, nicht 09:00-16:00 Uhr.
          </p>
        </section>

        <section className="section">
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Zeitraum</th>
                  <th>Öffnungszeiten</th>
                </tr>
              </thead>
              <tbody>
                {openingHoursSchedule.map((item) => (
                  <tr key={item.label}>
                    <td>{item.label}</td>
                    <td>{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="notice">
            Letzter Einlass ist 30 Minuten vor Schließung. An Rosenmontag, Weihnachten, Silvester und Neujahr bleibt
            das Monument geschlossen. Witterungsbedingte Änderungen sind möglich.
          </p>
        </section>

        <section className="section">
          <div className="split-grid">
            <article className="info-card">
              <h2 className="section-title">Eintrittspreise</h2>
              <ul className="price-list">
                {ticketPrices.map((price) => (
                  <li key={price.label}>
                    <span>{price.label}</span>
                    <strong>{price.value}</strong>
                  </li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h2 className="section-title">Wichtige Hinweise</h2>
              <ul className="quick-list">
                <li>Familienkarten und Gruppentarife folgen eigenen Regeln.</li>
                <li>Die AntikenCard kann für kombinierte Besuche sinnvoll sein.</li>
                <li>Bei kurzfristigen Änderungen ist die offizielle Monument-Seite maßgeblich.</li>
                <li>Für den Besuch am besten genügend Zeit für Arena und Kellergeschoss einplanen.</li>
              </ul>
              <a className="text-link" href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer">
                Offizielle Öffnungszeiten prüfen
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
