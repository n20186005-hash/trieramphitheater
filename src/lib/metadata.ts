import type { Metadata } from 'next';
import { galleryImages, siteConfig } from '@/lib/site-data';

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = '/',
}: MetadataInput): Metadata {
  const normalizedPath = path === '/' ? '/' : path.replace(/\/?$/, '/');
  const canonical = new URL(normalizedPath, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: canonical,
      title,
      description,
      siteName: siteConfig.siteName,
      images: [
        {
          url: `${siteConfig.url}${galleryImages[0].src}`,
          width: galleryImages[0].width,
          height: galleryImages[0].height,
          alt: galleryImages[0].alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}${galleryImages[0].src}`],
    },
  };
}
