import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { parkingFacts, siteConfig } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Amphitheater Trier Parken – Parkplatz & Anfahrt',
  description:
    'Parken am Amphitheater Trier: begrenzte Stellplätze vor Ort, Busparkplätze und praktische Anreise ab Hauptbahnhof.',
  path: '/parken/',
});

export default function ParkingPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Amphitheater Trier Parken – Parkplatz & Anfahrt',
      url: `${siteConfig.url}/parken/`,
      description:
        'Parkplätze, Busparkplätze und Anreise-Tipps für das Amphitheater Trier.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Parken', item: `${siteConfig.url}/parken/` },
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
            <span>Parken</span>
          </div>
          <p className="eyebrow">Parkplatz, Bus und Anfahrt</p>
          <h1>Amphitheater Trier Parken</h1>
          <p className="lede">
            Direkt vor dem Amphitheater Trier gibt es Parkplätze in begrenzter Zahl. Genau diese Formulierung ist
            hilfreicher und präziser als eine pauschale Aussage, alle Stellplätze seien kostenlos und jederzeit frei.
          </p>
        </section>

        <section className="section">
          <div className="facts-grid">
            {parkingFacts.map((fact) => (
              <article key={fact} className="info-card">
                <p>{fact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="split-grid">
            <article className="info-card">
              <h2 className="section-title">Mit dem Auto</h2>
              <p>
                Das Amphitheater liegt an der Olewiger Straße in Trier. Wer mit dem Auto kommt, sollte wegen der
                begrenzten Zahl an Stellplätzen möglichst früh anreisen.
              </p>
              <p>
                Für Navigation und Echtzeit-Verkehr ist Google Maps weiterhin die einfachste Ergänzung.
              </p>
              <a className="text-link" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                Route in Google Maps öffnen
              </a>
            </article>
            <article className="info-card">
              <h2 className="section-title">Mit Bus und Bahn</h2>
              <p>
                Vom Trierer Hauptbahnhof erreichen Besucher das Amphitheater mit den Linien 6, 7, 16 oder 30. Je
                nach Linie bleibt ab der Haltestelle noch ein kurzer Fußweg.
              </p>
              <p>
                Für Reisebusse gibt es 2-3 kostenlose Bus-Parkplätze unmittelbar vor dem Eingang. Weitere
                Busparkplätze liegen bei den Kaiserthermen, rund 500 Meter entfernt.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
