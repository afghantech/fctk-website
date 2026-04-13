import type { MetadataRoute } from 'next';
import { programs } from '@/lib/site-data';
import { getSiteUrl } from '@/lib/seo';

const staticRoutes = [
  '/',
  '/academics',
  '/academics/bakalavr',
  '/academics/master',
  '/academics/aspir',
  '/academics/curriculum',
  '/academics/vkr',
  '/abitur',
  '/news',
  '/nauka',
  '/nauka/conf',
  '/nauka/sci_journ',
  '/contacts',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));

  const programEntries: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${siteUrl}/academics/${program.category}/${program.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...programEntries];
}
