import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { historySections, siteConfig } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Amphitheater Trier Geschichte – Römerzeit bis UNESCO',
  description:
    'Geschichte des Amphitheaters Trier: Bau gegen Ende des 2. Jahrhunderts, Nutzung in der Römerzeit, spätere Veränderungen und UNESCO-Welterbe.',
  path: '/geschichte/',
});

export default function HistoryPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Geschichte des Amphitheaters Trier',
      url: `${siteConfig.url}/geschichte/`,
      description:
        'Historischer Überblick zum Amphitheater Trier von der Römerzeit bis zur UNESCO-Auszeichnung.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Geschichte', item: `${siteConfig.url}/geschichte/` },
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
            <span>Geschichte</span>
          </div>
          <p className="eyebrow">Vom Arenabau bis zum Welterbe</p>
          <h1>Geschichte des Amphitheaters Trier</h1>
          <p className="lede">
            Das Amphitheater Trier ist nicht nur eine Besucherattraktion, sondern ein zentrales Zeugnis der antiken
            Stadt Augusta Treverorum. Diese Seite bündelt die historische Entwicklung in einer Form, die für Suchanfragen
            nach „geschichte amphitheater trier“ direkt brauchbar ist.
          </p>
        </section>

        <section className="section history-sections">
          {historySections.map((section) => (
            <article key={section.title} className="info-card">
              <h2 className="section-title">{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </section>

        <section className="section">
          <div className="split-grid">
            <article className="info-card">
              <h2 className="section-title">Warum die Geschichte SEO-relevant ist</h2>
              <p>
                Der Hauptbegriff „Amphitheater Trier“ konkurriert oft mit Ergebnislisten, die Öffnungszeiten,
                Tickets, Tourismus und Geschichte zugleich abdecken. Eine eigene Geschichtsseite stärkt die thematische
                Tiefe und entlastet die Startseite.
              </p>
            </article>
            <article className="info-card">
              <h2 className="section-title">Passende Anschlussseiten</h2>
              <p>
                Wer sich für die Geschichte interessiert, wechselt häufig weiter zur <a href="/unterirdisch/">unterirdischen
                Anlage</a>, zur Seite über die <a href="/kapazitaet/">Kapazität</a> oder zu den <a href="/fotos/">Fotos</a>.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
