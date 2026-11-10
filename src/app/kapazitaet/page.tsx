import Nav from '@/components/Nav';
import SourceNote from '@/components/SourceNote';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { capacityFacts, galleryImages, siteConfig } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Amphitheater Trier Kapazität – Zuschauer, Plätze & Konzerte',
  description:
    'Wie viele Zuschauer fasste das Amphitheater Trier? Historische Kapazität, Plätze, Maße und Einordnung heutiger Konzertkapazitäten.',
  path: '/kapazitaet/',
});

export default function CapacityPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Kapazität des Amphitheaters Trier',
      url: `${siteConfig.url}/kapazitaet/`,
      description:
        'Informationen zu Zuschauerzahl, Plätzen und Konzertkapazität des Amphitheaters Trier.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Kapazität', item: `${siteConfig.url}/kapazitaet/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${siteConfig.url}${galleryImages[0].src}`,
      caption: galleryImages[0].caption,
      width: galleryImages[0].width,
      height: galleryImages[0].height,
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
            <span>Kapazität</span>
          </div>
          <p className="eyebrow">Zuschauer, Plätze und Größenordnung</p>
          <h1>Kapazität des Amphitheaters Trier</h1>
          <p className="lede">
            Nach Angaben des Zentrums der Antike bot das Amphitheater in römischer Zeit Platz für rund
            18.000 Zuschauerinnen und Zuschauer. Die Angabe beschreibt die antike Nutzung und ist keine heutige Veranstaltungszulassung.
          </p>
        </section>

        <section className="section">
          <div className="facts-grid">
            {capacityFacts.map((fact) => (
              <article key={fact} className="info-card">
                <p>{fact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="split-grid">
            <article className="info-card">
              <h2 className="section-title">Historische Kapazität</h2>
              <p>
                Das Amphitheater war eine Anlage für Massenunterhaltung. Die Zahl von rund 18.000 bezieht sich
                auf die antike Nutzung mit dicht belegten Zuschauerrängen und ohne heutige Sicherheitsanforderungen.
              </p>
              <p>
                Die heutige begrünte Form hilft, die Ausdehnung zu verstehen, auch wenn die antiken Sitzreihen nicht vollständig erhalten sind.
              </p>
            </article>
            <article className="info-card">
              <h2 className="section-title">Konzerte und Veranstaltungen heute</h2>
              <p>
                Bei modernen Konzerten hängt die reale Kapazität von Bühne, Bestuhlung, Fluchtwegen und
                Sperrbereichen ab. Eine allgemeingültige feste Konzertzahl wäre daher irreführend.
              </p>
              <p>
                Maßgeblich für eine Veranstaltung sind deshalb die Angaben des jeweiligen Veranstalters und der konkrete Bestuhlungsplan.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Häufige Fragen zur Kapazität</h2>
          <div className="faq-list">
            <article className="faq-item">
              <h3>Wie viele Zuschauer fasste das Amphitheater Trier?</h3>
              <p>Rund 18.000 Menschen konnten in römischer Zeit die Spiele verfolgen.</p>
            </article>
            <article className="faq-item">
              <h3>Wie groß ist die Anlage?</h3>
              <p>Die Gesamtanlage misst etwa 120 x 145 Meter und nutzt den Hang des Petrisbergs.</p>
            </article>
            <article className="faq-item">
              <h3>Gibt es heute noch Sitzplätze wie früher?</h3>
              <p>
                Nein. Die antiken Sitzreihen sind nicht im ursprünglichen Zustand erhalten. Besucher erleben heute
                vor allem die Form der Ränge und die baulichen Strukturen.
              </p>
            </article>
          </div>
          <p className="notice">
            Ergänzende Besuchsinformationen finden Sie auf den Seiten zu <a href="/oeffnungszeiten/">Öffnungszeiten</a>,
            <a href="/unterirdisch/"> unterirdischen Räumen</a> und <a href="/parken/">Parken</a>.
          </p>
        </section>
        <SourceNote />
      </main>
      <Footer />
    </>
  );
}
