import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
export const metadata = { title: 'Seite nicht gefunden – Trier Amphitheater', robots: { index: false, follow: true } };
export default function NotFound() {
  return <><Nav /><main className="page-main"><section className="section page-hero"><p className="eyebrow">Fehler 404</p><h1>Seite nicht gefunden</h1><p className="lede">Diese Adresse gehört zu keiner veröffentlichten Seite. Auf der Startseite finden Sie die Besuchsplanung und die Führer zu weiteren Trierer Sehenswürdigkeiten.</p><a className="button-link" href="/">Zur Startseite</a></section></main><Footer /></>;
}
