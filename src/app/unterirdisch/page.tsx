import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { siteConfig, undergroundFacts } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Amphitheater Trier unterirdisch – Keller & Arena entdecken',
  description:
    'Die unterirdischen Gänge des Amphitheaters Trier: Keller, Käfige, Zugänge, Treppen und was Besucher heute sehen können.',
  path: '/unterirdisch/',
});

export default function UndergroundPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Die unterirdischen Gänge des Amphitheaters Trier',
      url: `${siteConfig.url}/unterirdisch/`,
      description:
        'Informationen zu Kellern, Käfigen und den unterirdischen Räumen des Amphitheaters Trier.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Unterirdisch', item: `${siteConfig.url}/unterirdisch/` },
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
            <span>Unterirdisch</span>
          </div>
          <p className="eyebrow">Keller, Käfige und Wege unter der Arena</p>
          <h1>Die unterirdischen Gänge des Amphitheaters Trier</h1>
          <p className="lede">
            Wer nach „amphitheater trier unterirdisch“ sucht, meint meistens genau das: das Kellergeschoss unter der
            Arena mit seinen Funktionsräumen, Käfigen und Wegen für Inszenierungen.
          </p>
        </section>

        <section className="section">
          <div className="facts-grid">
            {undergroundFacts.map((fact) => (
              <article key={fact} className="info-card">
                <p>{fact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="faq-list">
            <article className="faq-item">
              <h3>Was ist im unterirdischen Bereich zu sehen?</h3>
              <p>
                Besucher sehen heute vor allem Räume unter der Arena, Wegeführung, Käfigbereiche und Spuren der
                antiken Bühnentechnik.
              </p>
            </article>
            <article className="faq-item">
              <h3>Warum ist dieser Teil so besonders?</h3>
              <p>
                Das Hypogäum macht die Funktionsweise der römischen Arena anschaulich. Man erkennt, dass das
                Amphitheater nicht nur Zuschauerraum, sondern auch aufwendige Infrastruktur für Inszenierungen war.
              </p>
            </article>
            <article className="faq-item">
              <h3>Ist der Untergrund barrierefrei?</h3>
              <p>
                Nicht vollständig. Der Eingang und die Arena sind stufenlos erreichbar, Kellergeschoss und Ränge
                dagegen nur über Stufen.
              </p>
            </article>
          </div>
          <p className="notice">
            Für viele Besucher sind die unterirdischen Räume das eigentliche Highlight des Amphitheaters Trier.
            Entsprechend sinnvoll ist eine eigene, klar fokussierte SEO-Seite zu diesem Thema.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
