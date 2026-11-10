import Nav from '@/components/Nav';
import SourceNote from '@/components/SourceNote';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { siteConfig, ticketNotes, ticketPrices } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Amphitheater Trier Eintritt – Preise, Familien & Gruppen',
  description:
    'Eintrittspreise für das Amphitheater Trier: Erwachsene, Ermäßigung, Kinder, Familienkarten, Gruppenpreise und Hinweise zur AntikenCard.',
  path: '/eintrittspreise/',
});

export default function TicketPricesPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Amphitheater Trier Eintrittspreise',
      url: `${siteConfig.url}/eintrittspreise/`,
      description:
        'Preise und Tarife für den Besuch des Amphitheaters Trier.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Eintrittspreise', item: `${siteConfig.url}/eintrittspreise/` },
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
            <span>Eintrittspreise</span>
          </div>
          <p className="eyebrow">Eintritt, Familien und Gruppen</p>
          <h1>Amphitheater Trier Eintrittspreise</h1>
          <p className="lede">
            Erwachsene, Kinder, Familien und Gruppen haben unterschiedliche Tarife. Vergleichen Sie vor dem Kauf auch die AntikenCard, wenn Sie mehrere Römerbauten besuchen möchten.
          </p>
        </section>

        <section className="section">
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tarif</th>
                  <th>Preis</th>
                </tr>
              </thead>
              <tbody>
                {ticketPrices.map((price) => (
                  <tr key={price.label}>
                    <td>{price.label}</td>
                    <td>{price.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <div className="split-grid">
            <article className="info-card">
              <h2 className="section-title">Was bedeuten die Tarife?</h2>
              <ul className="quick-list">
                {ticketNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
            <article className="info-card">
              <h2 className="section-title">Praktischer Zusammenhang</h2>
              <p>
                Vor dem Ticketkauf helfen die Hinweise zu <a href="/oeffnungszeiten/">Öffnungszeiten</a> und
                <a href="/parken/"> Parken</a> verknüpft.
              </p>
              <p>
                Für die aktuellste Preisbestätigung bleibt die offizielle Monument-Seite die maßgebliche Quelle.
              </p>
              <a className="text-link" href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer">
                Preise auf offizieller Seite prüfen
              </a>
            </article>
          </div>
        </section>
        <SourceNote />
      </main>
      <Footer />
    </>
  );
}
