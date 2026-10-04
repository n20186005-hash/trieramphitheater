import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/metadata';
import { galleryImages, siteConfig } from '@/lib/site-data';

export const metadata = buildMetadata({
  title: 'Amphitheater Trier Fotos – Arena, Keller & Aussicht',
  description:
    'Fotos des Amphitheaters Trier mit Bildbeschreibungen zu Arena, Kellerräumen, Zuschauerrängen, Eingang und Aussicht.',
  path: '/fotos/',
});

export default function PhotosPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Amphitheater Trier Fotos',
      url: `${siteConfig.url}/fotos/`,
      description:
        'Fotoseite mit Arena, Keller, Zuschauerrängen und Aussicht im Amphitheater Trier.',
      inLanguage: 'de-DE',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Fotos', item: `${siteConfig.url}/fotos/` },
      ],
    },
    ...galleryImages.map((image) => ({
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${siteConfig.url}${image.src}`,
      caption: image.caption,
      width: image.width,
      height: image.height,
    })),
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
            <span>Fotos</span>
          </div>
          <p className="eyebrow">Arena, Keller und Aussicht</p>
          <h1>Amphitheater Trier Fotos</h1>
          <p className="lede">
            Diese Fotoseite ergänzt die normale Galerie um klare Bildbeschreibungen. So wird für Google und
            Besucher deutlicher, was auf den Bildern tatsächlich zu sehen ist.
          </p>
        </section>

        <section className="section">
          <div className="photo-grid">
            {galleryImages.map((image) => (
              <article key={image.src} className="photo-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <p>{image.caption}</p>
              </article>
            ))}
          </div>
          <p className="notice">
            Weitere aktuelle Besucherbilder und Routenplanung finden Sie direkt in
            {' '}
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
