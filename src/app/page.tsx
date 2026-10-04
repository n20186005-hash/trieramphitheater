import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import {
  galleryImages,
  getTodayOpeningLabel,
  homeHighlights,
  homeSections,
  openingHoursSchedule,
  pageLinks,
  quickFacts,
  references,
  reviews,
  siteConfig,
  ticketPrices,
  visitorTips,
} from '@/lib/site-data';

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: 'Amphitheater Trier – Öffnungszeiten, Eintritt & Geschichte',
  description:
    'Amphitheater Trier besuchen: aktuelle Öffnungszeiten, Eintrittspreise, Parkmöglichkeiten, Geschichte, unterirdische Keller, Fotos und praktische Tipps für Ihren Besuch.',
  path: '/',
});

export default function Home() {
  const todayOpening = getTodayOpeningLabel();
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': ['TouristAttraction', 'Place'],
      name: siteConfig.name,
      description:
        'Römisches Amphitheater in Trier mit Arena, Zuschauerrängen und unterirdischem Kellergeschoss.',
      url: siteConfig.url,
      image: galleryImages.map((image) => `${siteConfig.url}${image.src}`),
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.postalAddress,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      telephone: siteConfig.officialPhone,
      sameAs: [siteConfig.officialUrl, siteConfig.mapsUrl],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: siteConfig.ratingValue,
        reviewCount: siteConfig.reviewCount,
        bestRating: 5,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.siteName,
      url: siteConfig.url,
      inLanguage: 'de-DE',
    },
  ];

  return (
    <>
      <JsonLd data={homeSchema} />
      <Nav />
      <main>
        <section className="hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url('${galleryImages[0].src}')` }}
          />
          <div className="hero-content hero-content-left">
            <p className="eyebrow">Römisches UNESCO-Welterbe in Trier</p>
            <h1 className="animate-in">Amphitheater Trier</h1>
            <p className="hero-subtitle animate-in delay-1">
              Aktuelle deutsche Besucherinfos zu Öffnungszeiten, Eintritt, Kapazität,
              unterirdischen Räumen, Parken und Fotos.
            </p>
            <div className="hero-meta animate-in delay-2">
              <span className="hero-rating">
                <span className="star">★★★★★</span>
                <strong>4,5</strong>
                <span style={{ opacity: 0.8 }}>(7.493 Bewertungen)</span>
              </span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>{todayOpening}</span>
            </div>
            <div className="button-row animate-in delay-3">
              <a className="button-link" href="/oeffnungszeiten/">
                Öffnungszeiten ansehen
              </a>
              <a className="button-link secondary" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                Route in Google Maps
              </a>
              <a className="button-link secondary" href={siteConfig.officialUrl} target="_blank" rel="noopener noreferrer">
                Offizielle Seite
              </a>
            </div>
            <div className="hero-panel animate-in delay-4">
              <div>
                <strong>Adresse</strong>
                <p>{siteConfig.address}</p>
              </div>
              <div>
                <strong>Telefon</strong>
                <p>{siteConfig.officialPhone}</p>
              </div>
              <div>
                <strong>Letzter Einlass</strong>
                <p>30 Minuten vor Schließung</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Schnell orientieren</h2>
          <p className="section-subtitle">
            Die wichtigsten Themen, auf die Nutzer bei Google bereits konkret suchen.
          </p>
          <div className="topic-grid">
            {pageLinks.map((page) => (
              <a key={page.href} className="topic-card" href={page.href}>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span>Mehr erfahren</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Warum diese Seite relevant ist</h2>
          <p className="lede">{homeSections.intro}</p>
          <div className="facts-grid">
            {quickFacts.map((fact) => (
              <article key={fact.title} className="info-card">
                <p className="fact-title">{fact.title}</p>
                <p className="fact-value">{fact.value}</p>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
          <div className="split-grid">
            <div className="info-card">
              <h3>Das Wichtigste zum Monument</h3>
              <p>{homeSections.history}</p>
              <ul className="quick-list">
                {homeHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h3>Unterirdische Räume als Alleinstellungsmerkmal</h3>
              <p>{homeSections.underground}</p>
              <p className="notice">
                Für Suchanfragen rund um <strong>unterirdisch</strong>, <strong>Keller</strong> und
                <strong> Arena</strong> gibt es jetzt eine eigene Seite mit fokussierter Information.
              </p>
              <a className="text-link" href="/unterirdisch/">
                Zur Untergrund-Seite
              </a>
            </div>
          </div>
          <p className="notice">
            Die historische Entwicklung des Monuments ist jetzt auch auf einer eigenen Seite gebündelt:
            <a href="/geschichte/"> Geschichte des Amphitheaters Trier</a>.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Öffnungszeiten und Eintritt</h2>
          <p className="section-subtitle">
            Die Öffnungszeiten wechseln nach Monat. Die pauschale Angabe 9-16 Uhr gilt nicht ganzjährig.
          </p>
          <div className="split-grid">
            <div className="info-card">
              <p className="fact-value">{todayOpening}</p>
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
            </div>
            <div className="info-card">
              <h3>Eintrittspreise im Überblick</h3>
              <ul className="price-list">
                {ticketPrices.slice(0, 5).map((price) => (
                  <li key={price.label}>
                    <span>{price.label}</span>
                    <strong>{price.value}</strong>
                  </li>
                ))}
              </ul>
              <p className="small-text">
                Gruppen-, Familien- und Kombitickets haben eigene Regeln. Die vollständige Übersicht steht auf
                der eigenständigen Preiseseite.
              </p>
              <a className="text-link" href="/eintrittspreise/">
                Eintrittspreise im Detail
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Besuch planen</h2>
          <div className="split-grid">
            <div className="info-card">
              <h3>Praktische Hinweise</h3>
              <ul className="quick-list">
                {visitorTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="info-card">
              <h3>Parken und ÖPNV</h3>
              <p>
                Direkt vor dem Amphitheater gibt es nur begrenzte Parkmöglichkeiten. Wer auf Nummer sicher gehen
                möchte, reist per Bus an oder plant einen frühen Besuch.
              </p>
              <p>
                Vom Hauptbahnhof Trier fahren mehrere Linien in Richtung Amphitheater; je nach Haltestelle bleibt
                ein kurzer Fußweg.
              </p>
              <a className="text-link" href="/parken/">
                Parken und Anfahrt im Detail
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <h2 className="section-title">Bewertungen und Vertrauen</h2>
          <p className="section-subtitle">
            Die sichtbare Gesamtbewertung wurde auf den aktuellen Stand von Google Maps gebracht.
          </p>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article key={`${review.name}-${review.date}`} className="review-card">
                <div className="review-header">
                  <div className="review-avatar">{review.name.charAt(0)}</div>
                  <div className="review-meta">
                    <span className="review-name">{review.name}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">{review.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Fotos des Amphitheaters Trier</h2>
          <p className="section-subtitle">
            Die Galerie ist jetzt auch als eigene thematische Seite erreichbar.
          </p>
          <div className="photo-grid">
            {galleryImages.slice(0, 4).map((image) => (
              <article key={image.src} className="photo-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <p>{image.caption}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="/fotos/">
            Alle Fotos und Bildbeschreibungen ansehen
          </a>
        </section>

        <section className="section">
          <h2 className="section-title">Quellen und Transparenz</h2>
          <p className="lede">
            Für Öffnungszeiten, Preise, Kontakt, Parken und Barrierefreiheit orientiert sich diese Seite an den
            offiziellen Angaben. Bewertungen und Routenplanung stammen aus Google Maps.
          </p>
          <ul className="reference-list">
            {references.map((reference) => (
              <li key={reference.href}>
                <a href={reference.href} target="_blank" rel="noopener noreferrer">
                  {reference.label}
                </a>
                <span>{reference.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
