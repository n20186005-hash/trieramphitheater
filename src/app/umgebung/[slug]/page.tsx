import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { nearbyGuides, guidePath } from '@/lib/nearby-guides';
import { siteConfig } from '@/lib/site-data';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return nearbyGuides.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = nearbyGuides.find(g => g.slug === slug);
  if (!g) return {};
  const canonical = siteConfig.url + guidePath(slug);
  return { title: g.title, description: g.description, alternates: { canonical },
    openGraph: { title: g.title, description: g.description, url: canonical, type: 'article', locale: 'de_DE', siteName: siteConfig.siteName },
    twitter: { card: 'summary', title: g.title, description: g.description } };
}
export default async function NearbyPage({ params }: Props) {
  const { slug } = await params;
  const g = nearbyGuides.find(g => g.slug === slug);
  if (!g) notFound();
  const canonical = siteConfig.url + guidePath(slug);
  const locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${g.name}, ${g.address}`)}`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(siteConfig.address)}&destination=${encodeURIComponent(`${g.name}, ${g.address}`)}&travelmode=walking`;
  const related = nearbyGuides.filter(other => g.related.includes(other.slug));
  return <>
    <JsonLd data={[
      { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description, url: canonical, inLanguage: 'de-DE', datePublished: '2026-11-10', dateModified: '2026-11-10', author: { '@type': 'Organization', name: 'Redaktion Trier Amphitheater' } },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Amphitheater Trier', item: siteConfig.url + '/' }, { '@type': 'ListItem', position: 2, name: g.name, item: canonical }] },
      { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: g.faq.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }
    ]} />
    <Nav />
    <main className="page-main nearby-page">
      <section className="section page-hero nearby-hero">
        <nav className="breadcrumbs" aria-label="Brotkrümelnavigation"><a href="/">Amphitheater Trier</a><span aria-hidden="true">/</span><a href="/#umgebung">Umgebung</a><span aria-hidden="true">/</span><span>{g.name}</span></nav>
        <p className="eyebrow">Trier weiterentdecken</p><h1>{g.name} besuchen</h1>
        <p className="hero-subtitle">{g.tagline}</p>
        <div className="button-row"><a className="button-link" href={locationUrl} target="_blank" rel="noopener noreferrer">Lage auf der Karte</a><a className="button-link secondary" href="#besuchszeiten">Besuchszeiten & Eintritt</a></div>
        <p className="editorial-date">Redaktion Trier Amphitheater · Quellen geprüft am <time dateTime="2026-11-10">10. November 2026</time></p>
      </section>
      <section className="section"><h2 className="section-title">{g.name} entdecken</h2><p className="lede">{g.intro}</p><div className="split-grid"><article className="info-card"><h3>Tipps vor dem Besuch</h3><ul className="quick-list">{g.tips.map(t => <li key={t}>{t}</li>)}</ul></article><article className="info-card"><h3>Die Höhepunkte</h3><ul className="quick-list">{g.highlights.map(t => <li key={t}>{t}</li>)}</ul></article></div></section>
      <section className="section"><h2 className="section-title">Über den Ort</h2><p className="lede">{g.about}</p><div className="table-wrap"><table className="data-table"><caption>Besuch auf einen Blick</caption><tbody><tr><th scope="row">Ort</th><td>{g.name}</td></tr><tr><th scope="row">Art</th><td>{g.type}</td></tr><tr><th scope="row">Adresse</th><td>{g.address}</td></tr><tr><th scope="row">Planung</th><td>Eigener Zugang und eigene Besuchsbedingungen; kein Bestandteil des Amphitheater-Eintritts.</td></tr></tbody></table></div></section>
      <section className="section" id="besuchszeiten"><h2 className="section-title">Öffnungszeiten und Eintritt</h2><div className="split-grid"><article className="info-card"><h3>Besuchszeiten</h3><p>{g.hours}</p></article><article className="info-card"><h3>Eintritt und Tickets</h3><p>{g.admission}</p></article></div><p className="notice">Betriebsangaben: <a href={g.sources[0].url} target="_blank" rel="noopener noreferrer">{g.sources[0].label}</a>. Die Hinweise sind eine datierte Planungshilfe.</p></section>
      <section className="section"><h2 className="section-title">Anreise planen</h2><p className="lede">{g.transport}</p><a className="text-link" href={routeUrl} target="_blank" rel="noopener noreferrer">Aktuellen Fußweg ab Amphitheater abrufen →</a></section>
      <section className="section"><h2 className="section-title">Was den Besuch besonders macht</h2><div className="split-grid">{g.appeal.map(a => <article className="info-card" key={a.title}><h3>{a.title}</h3><p>{a.text}</p></article>)}</div></section>
      <section className="section"><h2 className="section-title">Vorschlag für Ihren Rundgang</h2><p>Redaktionelle Reihenfolge; aktuelle Wegfreigaben vor Ort haben Vorrang.</p><ol className="nearby-route">{g.route.map(r => <li key={r}>{r}</li>)}</ol><h3>Besucherhinweise</h3><ul className="quick-list">{g.notices.map(n => <li key={n}>{n}</li>)}</ul></section>
      <section className="section"><div className="split-grid"><article className="info-card"><h2 className="section-title">Fotomotive bewusst wählen</h2><p>{g.photos}</p></article><article className="info-card"><h2 className="section-title">Übernachten und Tagesablauf</h2><p>{g.stay}</p><a href="https://www.trier-info.de/unterkuenfte" target="_blank" rel="noopener noreferrer">Unterkünfte bei Trier Tourismus vergleichen</a></article></div></section>
      <section className="section"><h2 className="section-title">Häufige Fragen</h2><div className="faq-list">{g.faq.map(f => <article className="faq-item" key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></article>)}</div></section>
      <section className="section"><h2 className="section-title">Adresse und Karte</h2><p>{g.name} · {g.address}</p><a className="text-link" href={locationUrl} target="_blank" rel="noopener noreferrer">Zieladresse in Google Maps öffnen</a></section>
      <section className="section source-note"><h2 className="section-title">Quellen für diesen Besuchsführer</h2><p>Verantwortlich: Redaktion Trier Amphitheater · Stand 10.11.2026. Hinweise zum Rundgang und zur Kombination sind redaktionelle Planungsvorschläge.</p><ul className="reference-list">{g.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul></section>
      <section className="section"><h2 className="section-title">Passende weitere Besuche</h2><div className="topic-grid"><a className="topic-card" href="/"><h3>Amphitheater Trier</h3><p>Zurück zu Arena, Kellergeschoss und Besuchsplanung.</p></a>{related.map(r => <a className="topic-card" href={guidePath(r.slug)} key={r.slug}><h3>{r.name}</h3><p>{r.tagline}</p></a>)}</div></section>
    </main><Footer />
  </>;
}
