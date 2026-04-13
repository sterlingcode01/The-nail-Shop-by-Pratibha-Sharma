import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pratibhanails.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/gallery',
    '/pricing',
    '/booking',
    '/contact',
    '/terms',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
